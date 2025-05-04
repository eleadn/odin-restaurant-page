export default class DisplayController
{
    #document;

    #container;
    #navButtons;
    #currentMenu;

    #homePage;

    #selectedClass = "selected";

    constructor(document, container, navButtons, homePage)
    {
        this.#document = document;

        this.#container = container;
        this.#navButtons = navButtons;
        this.#currentMenu = this.#navButtons.find((navMenu, _, __) => navMenu.classList.contains(this.#selectedClass));

        this.#homePage = homePage;

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

    #showHomeRestaurantInfos(presentation)
    {
        const restaurantInfos = this.#document.createElement("div");
        restaurantInfos.classList.add("restaurant-infos");

        const restaurantName = this.#document.createElement("h1");
        restaurantName.textContent = this.#homePage.name;

        const informations = this.#document.createElement("p");
        informations.textContent = `${this.#homePage.subDescription} | ${this.#homePage.adress}`;

        restaurantInfos.appendChild(restaurantName);
        restaurantInfos.appendChild(informations);

        presentation.appendChild(restaurantInfos);
    }

    #showHomeSubPresentation(presentation)
    {
        const subPresentation = this.#document.createElement("div");
        subPresentation.classList.add("informations", "sub-presentation");

        const description = this.#document.createElement("p");
        description.textContent = this.#homePage.description;

        subPresentation.appendChild(description);

        presentation.appendChild(subPresentation);
    }

    #showHomeHours(presentation)
    {
        const hoursInfos = this.#document.createElement("div");
        hoursInfos.classList.add("informations", "hours");

        const hours = this.#document.createElement("h2");
        hours.textContent = "Hours";

        const hoursList = this.#document.createElement("ul");

        this.#homePage.hours.forEach((hour, _, __) =>
        {
            const hourItem = this.#document.createElement("li");
            hourItem.textContent = hour;

            hoursList.appendChild(hourItem);
        });

        hoursInfos.appendChild(hours);
        hoursInfos.appendChild(hoursList);

        presentation.appendChild(hoursInfos);
    }

    #showHome()
    {
        const presentation = this.#document.createElement("div");
        presentation.classList.add("presentation");

        this.#showHomeRestaurantInfos(presentation);
        this.#showHomeSubPresentation(presentation);
        this.#showHomeHours(presentation);

        this.#container.appendChild(presentation);
    }

    #switchPage(button)
    {
        this.#currentMenu.classList.remove(this.#selectedClass);
        button.classList.add(this.#selectedClass);
        this.#currentMenu = button;
        this.#clearContainer();

        switch (button.textContent)
        {
            case "Home":
                this.#showHome();
                break;
        }
    }
}