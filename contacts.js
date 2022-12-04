const fs = require("fs").promises;
const path = require("path").promises;
const contactsPath = path("./db/contacts.json");

function listContacts() {
  fs.readFile("contacts.json").then((data) => console.log(data.toString()));
}

function getContactById(contactId) {
  // ...твій код
}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
