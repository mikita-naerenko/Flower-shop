import replace from "gulp-replace"; //Поиск и замена
import plumber from "gulp-plumber"; //Обработка ошибок
import notify from "gulp-notify"; //Сообщения(подсказки)
import newer from "gulp-newer";
import ifPlugin from "gulp-if";
import browsersync from "browser-sync";

//Экспортируем объект
export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  newer : newer,
  if: ifPlugin,
  browsersync: browsersync
}
