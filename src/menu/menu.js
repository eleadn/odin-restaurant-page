import MenuCategory from "./menuCategory";

export default class Menu
{
    #categories;

    constructor(...categories)
    {
        this.#categories = Array.from(...categories);
    }

    add(category)
    {
        this.#categories.push(category);
    }

    get categories()
    {
        return this.#categories;
    }
}