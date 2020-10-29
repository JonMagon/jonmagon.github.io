---
layout: post
title: KDiskMark - тестирование производительности дисков
date: 2020-10-29 18:13 +0300
---

<div style="filter: brightness(100%)">

![Главное окно приложения](/assets/img/Screenshot_20201029_183104.png)

</div>

<!--summary.start-->
Среди Windows приложений, аналоги которых отсутствуют под Linux системы, довольно часто отмечают CrystalDiskMark. Поэтому я решил это исправить с помощью C++ и Qt5.
<!--summary.end-->

**KDiskMark** представляет собой удобный графический интерфейс для [Flexible I/O Tester](https://github.com/axboe/fio), как и [CrystalDiskMark](https://crystalmark.info/en/software/crystaldiskmark/) использует майкрософтский [diskspd](https://github.com/microsoft/diskspd) для непосредственно тестирования SSD или HDD. Присутствует поддержка профилей производительности, можно настроить практически каждый параметр любого теста, текстовые отчёты позволяют публиковать результаты на форуме в удобном виде.  
Интерфейс выполнен на английском языке, но также переведён на русский (очевидно), немецкий, китайский, португальский, итальянский, чешский и французский.  
Лицензирован GPLv3, а значит является свободным ПО с открытым исходным кодом и может быть изменён каждым в рамках лицензии.  
В настоящее время приложение включено в официальные репозитории Arch и Fedora, что позволяет в этих дистрибутивах установить его одной командой в терминале.  
Исходный код доступен на GitHub: [https://github.com/JonMagon/KDiskMark](https://github.com/JonMagon/KDiskMark)

## Название
Авторы обзоров указывают на букву **K** в названии и добавляют, что приложение не зависит от **KDE**, а один француз высказал такую мысль, что он бы использовал букву **Q**. На самом деле, это довольно необычно, так как я не ожидал, что название кого-то запутает или ещё что-то. Буква **K** здесь исключительно как отсылка к **Crystal**. Возможно, **KD** создаёт какой-то эффект своеобразный или это проявления различий в культуре/языки (какая-то прямо [герменевтика](https://ru.wikipedia.org/wiki/Герменевтика)), но название именно такое, какое есть, и меняться оно не будет.

## Установка
### Snap Store
При установке через Snap Store для полного функционала необходимо вручную подключить mount-observe и hardware-observe интерфейсы.
```bash
sudo snap install kdiskmark
sudo snap connect kdiskmark:mount-observe
sudo snap connect kdiskmark:hardware-observe
````

### Ubuntu дистрибутивы
```bash
sudo add-apt-repository ppa:jonmagon/kdiskmark
sudo apt update
sudo apt install kdiskmark
```

### Arch дистрибутивы
```bash
sudo pacman -Syu kdiskmark
```

Или git-версия из AUR:
```bash
git clone https://aur.archlinux.org/kdiskmark-git.git
cd kdiskmark-git
makepkg -si
```

### Fedora
```bash
sudo dnf install kdiskmark
```
