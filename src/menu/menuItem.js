export default class MenuItem
{
    #name;
    #ingredients;
    #price;

    constructor(name, ingredients, price)
    {
        this.#name = name;
        this.#ingredients = ingredients;
        this.#price = price;
    }

    get name()
    {
        return this.#name;
    }

    get ingredients()
    {
        return this.#ingredients;
    }

    get price()
    {
        return this.#price;
    }
}