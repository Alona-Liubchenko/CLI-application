const fs = require("fs").promises;
const path = require("path");
const contactsPath = path.join(__dirname, "contacts.json");

function listContacts() {
  fs.readFile(contactsPath, "utf-8")
    .then((data) => console.log(data))
    .catch((error) => console.log(error.message));
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
const contacts = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

module.exports = contacts;
