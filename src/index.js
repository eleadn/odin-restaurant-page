import "./style.css";
import DisplayController from "./displayController.js";

const content = document.querySelector("#content");
const navMenu = document.querySelector("nav");
const buttons = Array.from(navMenu.children);

const controller = new DisplayController(content, buttons);