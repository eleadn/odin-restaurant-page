import MenuItem from "./menuItem";

export default class MenuCategory
{
    #name;
    #items

    constructor(name, items)
    {
        this.#name = name;
        this.#items = items;
    }

    get name()
    {
        return this.#name;
    }

    get items()
    {
        return this.#items;
    }
}