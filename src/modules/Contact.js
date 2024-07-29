function createForm() {
    const form = document.createElement("form");

    const top = document.createElement("div");
    const bottom = document.createElement("div");

    top.classList.add("top");
    bottom.classList.add("bottom");

    const name = document.createElement("input");
    name.type = "text";
    name.name = "firstName";
    name.placeholder = "First Name";

    const lastName = document.createElement("input");
    lastName.type = "text";
    lastName.name = "lastName";
    lastName.placeholder = "Last Name";

    const phoneNumber = document.createElement("input");
    phoneNumber.type = "tel";
    phoneNumber.name = "phoneNumber";
    phoneNumber.placeholder = "Phone Number";

    const email = document.createElement("input");
    email.type = "email";
    email.name = "email";
    email.placeholder = "Email";

    top.appendChild(name);
    top.appendChild(lastName);
    top.appendChild(phoneNumber);
    top.appendChild(email);

    const about = document.createElement("textarea");
    about.style.borderRadius = "12px";
    about.style.padding = "8px";
    about.name = "about";
    about.placeholder = "About";
    about.id = "about";

    const submit = document.createElement("input");
    submit.type = "submit";
    submit.value = "Submit";
    submit.id = "submit";

    bottom.appendChild(about);
    bottom.appendChild(submit);

    form.appendChild(top);
    form.appendChild(bottom);

    return form;
}



export default function createContact(){
    const container = document.getElementById("content");
    const h1 = document.createElement("h1");
    h1.textContent = "Contact Us";

    container.classList.add("about-content");
    container.appendChild(h1);
    container.appendChild(createForm());
}