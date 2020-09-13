/*
 * Caculate the Timeago
 * v2.0
 * https://github.com/cotes2020/jekyll-theme-chirpy
 * © 2019 Cotes Chung
 * MIT Licensed
 */

$(function() {

  var toRefresh = $(".timeago").length;

  var intervalId = void 0;

  function timeago(iso, isLastmod) {
    let now = new Date();
    let past = new Date(iso);

    if (past.getFullYear() !== now.getFullYear()) {
      toRefresh -= 1;
      return past.toLocaleString("ru-RU", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    }

    if (past.getMonth() !== now.getMonth()) {
      toRefresh -= 1;
      return past.toLocaleString("ru-RU", {
        month: "short",
        day: "numeric"
      });
    }

    let seconds = Math.floor((now - past) / 1000);

    function plural(number, titles) {
      cases = [2, 0, 1, 1, 1, 2];
      return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
    }

    let day = Math.floor(seconds / 86400);
    if (day >= 1) {
      toRefresh -= 1;
      return day + " " + plural(day, ['день', 'дня', 'дней']) + " назад";
    }

    let hour = Math.floor(seconds / 3600);
    if (hour >= 1) {
      return hour + " " + plural(hour, ['час', 'часа', 'часов']) + " назад";
    }

    let minute = Math.floor(seconds / 60);
    if (minute >= 1) {
      return minute + " " + plural(minute, ['минуту', 'минуты', 'минут']) + " назад";
    }

    return (isLastmod ? "прямо" : "Прямо") + " сейчас";
  }

  function updateTimeago() {
    $(".timeago").each(function() {
      if ($(this).children("i").length > 0) {
        var basic = $(this).text();
        var isLastmod = $(this).hasClass("lastmod");
        var node = $(this).children("i");
        var date = node.text(); /* ISO Date: "YYYY-MM-DDTHH:MM:SSZ" */
        $(this).text(timeago(date, isLastmod));
        $(this).append(node);
      }
    });

    if (toRefresh === 0 && typeof intervalId !== "undefined") {
      clearInterval(intervalId); /* stop interval */
    }
    return toRefresh;
  }

  if (toRefresh === 0) {
    return;
  }

  if (updateTimeago() > 0) { /* run immediately */
    intervalId = setInterval(updateTimeago, 60000); /* run every minute */
  }

});
