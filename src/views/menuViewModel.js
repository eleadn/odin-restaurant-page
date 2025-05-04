import Menu from "../menu/menu";

export default class MenuViewModel
{
    #menu;

    constructor(menu)
    {
        this.#menu = menu;
    }

    get menu()
    {
        return this.#menu;
    }
}