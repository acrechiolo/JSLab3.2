class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
  toString() {
    return `${this.name} <${this.email}>`;
  }
}
class AddressBook {
  constructor() {
    this.contacts = [];
  }
  add(name, email, phone, relation) {
    let myNewContact = new Contact(name, email, phone, relation);
    this.contacts.push(myNewContact);
  }
  deleteAt(index) {
    this.contacts.splice(index, 1);
  }
  getAtIndex(index) {
    return this.contacts[index];
  }

  findContactsByName(name) {
    return this.contacts.find(contact => contact.name === name); //returns the WHOLE contact
  }
  searchContacts(text) {
    return this.contacts.filter(contact => {
      for (let property in contact) {
        if (contact[property].includes(text)) {
          return contact;
        }
      }
    });
  }
  deleteByName(addressBook, name) {
    let counter = 0;
    for (let contact of addressBook.contacts) {
      if ((contact.name = name)) {
        counter++;
        addressBook.splice(counter, 1);
      } else {
        counter++;
      }
    }
  }
}
let addressBook = new AddressBook();
let formEl = document.querySelector("form");

addressBook.add(
  "Alyssa Crechiolo",
  "alyssacrechiolo@gmail.com",
  "810.552.7077",
  "Me"
);
addressBook.add(
  "Roniya Rojan",
  "ronirojan@gmail.com",
  "734.450.5522",
  "Friend"
);

addressBook.add(
  "Kristi Byrnes",
  "kristibyrnes@gmail.com",
  "917.502.5107",
  "Best Friend"
);

addressBook.add(
  "Randi Hudson",
  "randihudson@gmail.com",
  "313.555.5107",
  "Friend"
);

function display() {
  let container = document.querySelector(".contact-container");
  container.innerHTML = "";
  for (let contact of addressBook.contacts) {
    let card = document.createElement("div");
    let name = document.createElement("p");
    name.innerText = `Name: ${contact.name}`;
    card.append(name);
    let email = document.createElement("p");
    email.innerText = `Email: ${contact.email}`;
    card.append(email);
    let phone = document.createElement("p");
    phone.innerText = `Phone: ${contact.phone}`;
    card.append(phone);
    let relation = document.createElement("p");
    relation.innerText = `Relation: ${contact.relation}`;
    card.append(relation);
    container.append(card);
    card.setAttribute("class", "contact-box");
  }
}
display();

// let form = document.querySelector("form");
// form.addEventListener("submit", e => {
//     const formData = new formData (form);
//     addressBook.add(formData.get("name"),
//     addressBook.add(formData.get("email"),
//     addressBook.add(formData.get("phone"),
//     addressBook.add(formData.get("relation");
//     display();

// });
