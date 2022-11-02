# Gulp 4. 
Стартовая сборка для Фронтенда

## Что включает в себя сборка?
* [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) — автоматически расставляет вендорные префиксы в CSS в соответствии с сервисом [Can I Use](https://caniuse.com/);
* [gulp-concat](https://www.npmjs.com/package/gulp-concat) - конкатенация файлов;
* [gulp-sass](https://www.npmjs.com/package/gulp-sass) — компиляция SASS,SCSS в CSS;
* [gulp-rename](https://www.npmjs.com/package/gulp-rename) — переименование файлов;
* [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) — создание карты sourcemap;
* [gulp-notify](https://www.npmjs.com/package/gulp-notify) — уведомление о событиях;
* [gulp-csso](https://www.npmjs.com/package/gulp-csso) — объединение дублирующихся классов;
* [gulp-watch](https://www.npmjs.com/package/gulp-watch) — отслеживание изменений в файлах проекта;
* [Browsersync](https://browsersync.io/docs/gulp) — автообновление браузера;
* [gulp-svg-sprite](https://www.npmjs.com/package/gulp-svg-sprite) — создание svg спрайта;
* [gulp-svgmin](https://www.npmjs.com/package/gulp-svgmin) — минификация SVG;
* [gulp-cheerio](https://www.npmjs.com/package/gulp-cheerio) — удаление лишних атрибутов из svg;
* [gulp-replace](https://www.npmjs.com/package/gulp-replace) — фиксинг возможных багов при сборке svg спрайта;

## Как пользоваться?

* Установить ```Node JS```
* Ставим утилиту глобально ```$ npm install gulpjs/gulp-cli -g```;
* Устанавливаем ```Gulp 4``` в папку с проектом ```$ npm install gulp --save-dev```;
* Проверка версии gulp и чтобы убедиться, что все корректно установлено: ```gulp - gulp -v```;

## Начало работы

* Устанавливаем пакеты из package.json: ```npm i```;
* Устанавливаем пакеты из bower.json: ```bower i```;
* Основная команда: ```gulp``` запускает слежку за файлами ```gulp-watch``` и ```browserSync```
* Сборка проекта: ```gulp-build``` проект собирается в дире ```build``` (создастся сама)
* В настройках таска ```browserSync``` можем указывать страницу с которой на данный момент работаем

## Порядок установки нового плагина
* ```gulp/gonfig/tasks.js``` массив с установленными плагинами галпа;
* ```gulp/tasks/``` все таски разбиты на отдельные файлы и подключены в ```gulp/gonfig/tasks.js```;
* После установки нового плагина через ```npm``` необходимо добавить его в массив ```gulp/config/tasks.js```;
* Создать новый файл в ```gulp/tasks/``` с настройками плагина
* Добавить обработку плагина в ```gulp/tasks/watch.js```
* Добавить обработку плагина в ```gulpfile.js``` в таски ```default``` и ```build```