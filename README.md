# WhatsNew
## v.0.0.1

В этом учебном проекте реализована возможность просмотра новостей от различных интерент-изданий 
по интересующей пользователя тематике за последнюю неделю. Также у пользователя есть возможность 
просмотреть количество новостей по данной тематике за каждый из последних семи дней.

При работе над проектом использовались навыки вёрстки на языках *HTML* и *CSS*, реализован адаптив 
под различные виды устройств. Функционал организован с помощью *JavaScript*. Код является объектно-ориентированным, 
организован по БЭМ. При разработке использовалась система контроля версий *Git*, сборка осуществлена 
с помощью *Webpack*. 

## Как развернуть проект
* Скачайте репозиторий к себе на компьютер 
`git clone https://github.com/zi-klon/WhatsNew.git [ваша директория]`;
* Вам потребуется библиотека пакетов *npm*. Скачать можно по [ссылке](https://nodejs.org/en/download/). 
Находясь в папке проекта, запустите команду `npm init`;
* Установите вебпак `npm i webpack --save-dev`;
* Для работы с вебпаком потребуется установить эти пакеты:

`npm i webpack-dev-server --save-dev`

`npm i babel-loader --save-dev`

`npm i @babel/cli --save-dev`

`npm i @babel/core --save-dev`

`npm i @babel/preset-env --save-dev`

`npm i core-js@3.1.4 --save`

`npm install --save babel-polyfill`

`npm i mini-css-extract-plugin --save-dev`

`npm i css-loader --save-dev`

`npm install html-webpack-plugin --save-dev`

`npm i webpack-md5-hash --save-dev`

`npm i postcss-loader --save-dev`

`npm i autoprefixer --save-dev`

`npm i cssnano --save-dev`

`npm i style-loader --save-dev`

`npm i optimize-css-assets-webpack-plugin --save-dev`

В проекте существует три вида сборки:
1. dev-сборка - для разработки. Запускается командой `npm run dev`;
2. build-сборка - продакшн сборка. Запускается командой `npm run build`;
3. deploy-сборка - для опубликования на Github pages. Запускается командой `npm run build`;

## Перейти на сайт можно по ссылке <https://zi-klon.github.io/WhatsNew/>