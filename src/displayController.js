import ContactView from "./views/contactView";
import HomePageView from "./views/homePageView";
import MenuView from "./views/menuView";

export default class DisplayController
{
    #container;
    #navButtons;
    #currentMenu;
     
    #pages;

    #selectedClass = "selected";

    constructor(document, container, navButtons, homePageViewModel, menuViewModel, contactViewModel)
    {
        this.#container = container;
        this.#navButtons = navButtons;
        this.#currentMenu = this.#navButtons.find((navMenu, _, __) => navMenu.classList.contains(this.#selectedClass));

        this.#pages =
        {
            "Home": new HomePageView(document, container, homePageViewModel),
            "Menu": new MenuView(document, container, menuViewModel),
            "About" : new ContactView(document, container, contactViewModel),
        }

        this.#navButtons.forEach((button, _, __) => button.addEventListener("click", (event) => this.#switchPage(event.target)));

        if (this.#currentMenu !== null)
        {
            this.#switchPage(this.#currentMenu);
        }
    }

    #clearContainer()
    {
        while (this.#container.hasChildNodes())
        {
            this.#container.firstChild.remove();
        }
    }

    #switchPage(button)
    {
        this.#currentMenu.classList.remove(this.#selectedClass);
        button.classList.add(this.#selectedClass);
        this.#currentMenu = button;
        this.#clearContainer();

        this.#pages[button.textContent]?.show();
    }
}