import "./style.css";
import DisplayController from "./displayController.js";
import HomePageViewModel from "./homePageViewModel.js";

const content = document.querySelector("#content");
const navMenu = document.querySelector("nav");
const buttons = Array.from(navMenu.children);

const homePage = new HomePageViewModel(
    "Trattoria Lesbiana",
    "La Trattoria Lesbiana is a traditionnal italian restaurant. Our ingredients are fresh and the food is prepared by real Italian Lesbians. Enjoy a charming place by the sea that surely will make you feel like a real mediterranean.",
    "An Italian Restaurant",
    "60 Unexisting Street, Unreal City",
    [
        "Monday: closed",
        "Tuesday: 11am - 11pm",
        "Wednesday: 11am - 11pm",
        "Thursday: 11am - 11pm",
        "Friday: 10am - 12pm",
        "Saturday: 10am - 12pm",
        "Sunday: 12am - 10pm",
    ],
);

const controller = new DisplayController(document, content, buttons, homePage);