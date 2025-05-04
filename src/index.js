import "./style.css";
import DisplayController from "./displayController.js";
import HomePageViewModel from "./views/homePageViewModel.js";
import MenuViewModel from "./views/menuViewModel.js";
import Menu from "./menu/menu.js";
import MenuCategory from "./menu/menuCategory.js";
import MenuItem from "./menu/menuItem.js";

const content = document.querySelector("#content");
const navMenu = document.querySelector("nav");
const buttons = Array.from(navMenu.children);

const homePageViewModel = new HomePageViewModel(
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

const categories =
[
    new MenuCategory("ANTIPASTI E INSALATE",
    [
        new MenuItem("Green bean salad", "roasted pistachios & salted ricotta", "14"),
        new MenuItem("Mozzarella & datterino tomatoes", "basil & balsamic cream", "15"),
        new MenuItem("Melanzana laccata, heart of burrata", "caramelised aubergines, confit tomatoes & mint", "16"),
        new MenuItem("Baby artichoke salad", "avocado & parmigiano", "19"),
        new MenuItem("Sea bass carpaccio", "stracciatella, black lemon & raspberry", "18"),
        new MenuItem("Green asparagus salad with ricotta", "spinach shoots, pomegranate, pine nuts", "18"),
        new MenuItem("Calamari Fritti", "tartar sauce", "17"),
        new MenuItem("Spinach shoots", "pecorino, hazelnuts & lemon vinaigrette", "12"),
    ]),
    new MenuCategory("PIZZA",
    [
        new MenuItem("Margherita", "tomato sauce, fior di latte, basil", "13"),
        new MenuItem("Bufalina", "tomato sauce, stracciatella, oregano, fresh basil", "15"),
        new MenuItem("Quattro Formaggi", "gorgonzola, pecorino, fior di latte, parmiggiano", "17"),
        new MenuItem("Regina Classica", "fior di latte, tomatoes, ham with herbs, raw mushrooms", "18"),
        new MenuItem("Diavola", "tomato sauce, spicy sausage Spianata, fior di latte, oregano", "18"),
        new MenuItem("Burrata", "tomato sauce, burrata, balsamic cream, rocket, Datterino tomatoes & confit tomatoes", "19"),
        new MenuItem("Tonnato", "tomato sauce, fresh tuna, confit tomatoes, capers, olives, oregano, fior di latte", "22"),
        new MenuItem("Truffe", "truffle cream, fior di latte, parmigiano, fresh summer truffle", "27"),
    ]),
    new MenuCategory("PASTA",
    [
        new MenuItem("Penne Pomodoro or arrabiata", "Datterino tomatoes & basil or chilli pepper & fresh herbs", "18"),
        new MenuItem("Pappardelle al Ragu of long-cooked beef", "roasted onions, carrots & celery", "23"),
        new MenuItem("Ravioli di Ricotta e Spinaci, limone", "sage & parmigiano cream", "18"),
        new MenuItem("Spaghetti alla carbonara or Carbonara al tartufo", "guanciale & pecorino", "19"),
        new MenuItem("Pici cacio e pepe", "pecorino with pepper & parmesan", "22"),
        new MenuItem("Penne Alfredo", "parmesan cream, golden chicken & brown mushrooms", "24"),
        new MenuItem("Gnocchi alla Sorrentina", "tomatoes, mozzarella & fresh basil", "21"),
        new MenuItem("Spaghetti alle vongole", "clam, garlic & chilli", "28"),
        new MenuItem("Fregola ai frutti di mare", "fregola sarda, prawns, squid, clams, white wine, garlic & chilli", "32"),
        new MenuItem("Linguine with truffle", "truffle cream, parmigiano & fresh summer truffle", "31"),
    ]),
    new MenuCategory("PESCE E CARNE",
    [
        new MenuItem("Fritto Misto", "squids, prawns, zucchinis & eggplants", "23"),
        new MenuItem("Tunna steak Sicilian-style", "spinach shoots, olives, capers & fennet julienne", "27"),
        new MenuItem("Grilled sea bass fillet", "tomatoes, baby potatoes with thyme & crispy breadcrumbs", "25"),
        new MenuItem("Golden chicken fillet Caesar-style", "romaine salad, croutons, parmesan & Caesar sauce", "23"),
        new MenuItem("Beef carpaccio", "mozzarella, roasted tomatoes & pine nuts, baby potatoes with thyme", "22"),
        new MenuItem("Veal Milanaise-style", "tomato penne"),
    ]),
    new MenuCategory("DOLCE",
    [
        new MenuItem("Tiramisu", "", "9"),
        new MenuItem("Tiramisu XL", "", "15"),
        new MenuItem("Italian Profiterole", "stracciatella ice cream", "12"),
        new MenuItem("Soft chocolate nocciolata cake", "vanilla cream", "10"),
        new MenuItem("Panna cotta", "pistachio praline & toasted pistachios", "12"),
        new MenuItem("Roasted pear with honey", "rosemary crumble, vanilla ice cream", "12"),
        new MenuItem("Pineapple carpaccio", "fresh mint", "9"),
        new MenuItem("Pizza alla Nutella", "almonds & hazelnuts", "9"),
        new MenuItem("Gelato e Sorbetti", "vanilla - coffee - pistachio - chocolate - strawberry - lemon - hazelnuts", "7"),
    ]),
];
const menu = new Menu(categories);
const menuViewModel = new MenuViewModel(menu);

new DisplayController(document, content, buttons, homePageViewModel, menuViewModel);