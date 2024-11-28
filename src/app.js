/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  function palabrasRamdom(lista) {
    let palabras = "";
    palabras = lista[Math.floor(Math.random() * lista.length)];
    return palabras;
  }

  let generator = document.getElementById("excuses");
  generator.innerHTML =
    palabrasRamdom(who) +
    " " +
    palabrasRamdom(action) +
    " " +
    palabrasRamdom(what) +
    " " +
    palabrasRamdom(when);
};
