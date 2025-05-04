import ContactViewModel from "./contactViewModel";

export default class ContactView
{
    #document;
    #container;

    #contactViewModel;

    constructor(document, container, contactViewModel)
    {
        this.#document = document;
        this.#container = container;
        
        this.#contactViewModel = contactViewModel;
    }

    show()
    {
        const contactCard = this.#document.createElement("div");
        contactCard.classList.add("contact-card");

        const contact = this.#document.createElement("div");
        contact.classList.add("contact");

        const contactHeader = this.#document.createElement("h1");
        contactHeader.textContent = "Contact Us";

        const phone = this.#document.createElement("p");
        phone.textContent = `Phone: ${this.#contactViewModel.phoneNumber}`;

        const email = this.#document.createElement("p");
        email.textContent = `Email: ${this.#contactViewModel.email}`;

        contact.appendChild(contactHeader);
        contact.appendChild(phone);
        contact.appendChild(email);

        contactCard.appendChild(contact);

        this.#container.appendChild(contactCard);
    }
}