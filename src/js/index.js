import anime from "animejs";
import "../sass/variables.scss";
import "../sass/body.scss";
import "../sass/header.scss";
import "../sass/main.scss";
import "../sass/section.scss";

import { routes } from "../js/routes";
console.log(process.env.RAWG_API);

let pageArgument;

const setRoute = () => {
  let path = window.location.hash.substring(1).split("/");
  pageArgument = path[1] || "";

  var pageContent = document.getElementById("pageContent");
  routes[path[0]](pageArgument);
  return true;
};

const searchGame = () => {
  const input = document.getElementById("search");
  input.addEventListener("keydown", function () {
    if (event.keyCode == 13) {
      let gameToSearch = input.value;
      gameToSearch = gameToSearch.replace(/\s+/g, "-");
      window.location.href = `#pagelist/${gameToSearch}`;
    }
  });
};
searchGame();

window.addEventListener("hashchange", () => setRoute());
window.addEventListener("DOMContentLoaded", () => setRoute());

