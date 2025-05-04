export default class HomePageView
{
    #document;
    #container

    #homePageViewModel;

    constructor(document, container, homePageViewModel)
    {
        this.#document = document;
        this.#container = container;
        this.#homePageViewModel = homePageViewModel;
    }

    #showHomeRestaurantInfos(presentation)
    {
        const restaurantInfos = this.#document.createElement("div");
        restaurantInfos.classList.add("restaurant-infos");

        const restaurantName = this.#document.createElement("h1");
        restaurantName.textContent = this.#homePageViewModel.name;

        const informations = this.#document.createElement("p");
        informations.textContent = `${this.#homePageViewModel.subDescription} | ${this.#homePageViewModel.adress}`;

        restaurantInfos.appendChild(restaurantName);
        restaurantInfos.appendChild(informations);

        presentation.appendChild(restaurantInfos);
    }

    #showHomeSubPresentation(presentation)
    {
        const subPresentation = this.#document.createElement("div");
        subPresentation.classList.add("informations", "sub-presentation");

        const description = this.#document.createElement("p");
        description.textContent = this.#homePageViewModel.description;

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

        this.#homePageViewModel.hours.forEach((hour, _, __) =>
        {
            const hourItem = this.#document.createElement("li");
            hourItem.textContent = hour;

            hoursList.appendChild(hourItem);
        });

        hoursInfos.appendChild(hours);
        hoursInfos.appendChild(hoursList);

        presentation.appendChild(hoursInfos);
    }

    show()
    {
        const presentation = this.#document.createElement("div");
        presentation.classList.add("presentation");

        this.#showHomeRestaurantInfos(presentation);
        this.#showHomeSubPresentation(presentation);
        this.#showHomeHours(presentation);

        this.#container.appendChild(presentation);
    }
}