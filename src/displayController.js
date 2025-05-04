export default class DisplayController
{
    #container;
    #navButtons;
    #currentMenu;

    #selectedClass = "selected";

    constructor(container, navButtons)
    {
        this.#container = container;
        this.#navButtons = navButtons;
        this.#currentMenu = this.#navButtons.find((navMenu, _, __) => navMenu.classList.contains(this.#selectedClass));

        this.#navButtons.forEach((button, _, __) => button.addEventListener("click", (event) => this.#switchPage(event.target)));
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

        this.#clearContainer()
    }
}