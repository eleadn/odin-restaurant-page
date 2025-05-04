import MenuViewModel from "./menuViewModel";

export default class MenuView
{
    #document;
    #container;
    #menuViewModel;

    constructor(document, container, menuViewModel)
    {
        this.#document = document;
        this.#container = container;
        this.#menuViewModel = menuViewModel;
    }

    #showItem(itemList, item)
    {
        const menuItem = this.#document.createElement("li");
        menuItem.classList.add("menu-item");

        const itemHeader = this.#document.createElement("p");
        itemHeader.classList.add("item-header");
        itemHeader.textContent = item.name;

        const ingredients = this.#document.createElement("p");
        ingredients.classList.add("ingredients");
        ingredients.textContent = item.ingredients;

        const price = this.#document.createElement("p");
        price.classList.add("price");
        price.textContent = item.price;

        menuItem.appendChild(itemHeader);
        menuItem.appendChild(ingredients);
        menuItem.appendChild(price);

        itemList.appendChild(menuItem);
    }

    #showCategory(menuList, category)
    {
        const menuPart = this.#document.createElement("li");
        menuPart.classList.add("menu-part");

        const menuHeader = this.#document.createElement("h1");
        menuHeader.classList.add("menu-header");
        menuHeader.textContent = category.name;

        const itemList = this.#document.createElement("ul");
        category.items.forEach((item, _, __) => this.#showItem(itemList, item));

        menuPart.appendChild(menuHeader);
        menuPart.appendChild(itemList);

        menuList.appendChild(menuPart);
    }

    show()
    {
        const menuList = this.#document.createElement("ul");
        menuList.classList.add("menu-list");

        const menu = this.#menuViewModel.menu;
        menu.categories.forEach((category, _, __) => this.#showCategory(menuList, category));

        this.#container.appendChild(menuList);
    }
}