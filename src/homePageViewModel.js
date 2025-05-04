export default class HomePageViewModel
{
    #name;
    #description;
    #subDescription;
    #adress;
    #hours;

    constructor(name, description, subDescription, adress, hours)
    {
        this.#name = name;
        this.#description = description
        this.#subDescription = subDescription;
        this.#adress = adress;
        this.#hours = hours;
    }

    get name()
    {
        return this.#name;
    }

    get description()
    {
        return this.#description;
    }

    get subDescription()
    {
        return this.#subDescription;
    }

    get adress()
    {
        return this.#adress;
    }

    get hours()
    {
        return this.#hours
    }
}