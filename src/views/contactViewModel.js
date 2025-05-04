export default class ContactViewModel
{
    #phoneNumber;
    #email;

    constructor(phoneNumber, email)
    {
        this.#phoneNumber = phoneNumber;
        this.#email = email;
    }

    get phoneNumber()
    {
        return this.#phoneNumber;
    }

    get email()
    {
        return this.#email;
    }
}