const fs = require("fs").promises;
const path = require("path");
const uuid = require("uuid");
const contactsPath = path.join(__dirname, "db/contacts.json");

const listContacts = async () => {
  const dataString = await fs.readFile(contactsPath, "utf8");
  const data = JSON.parse(dataString);
  return data;
};

const getContactById = async (contactId) => {
  const allContacts = await listContacts();
  // console.log(allContacts);
  const contact = allContacts.find((contact) => contact.id === contactId);
  console.log(contact);
  return contact ? contact : null;
};

const removeContact = async (id) => {
  const allContacts = await listContacts();
  const index = allContacts.findIndex((contact) => contact.id === id);
  console.log(id);
  const deleteContact = allContacts[index];
  if (index !== -1) {
    allContacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(allContacts));
  }
  return deleteContact ? deleteContact : null;
};

const addContact = async (name, email, phone) => {
  const nevContact = {
    id: uuid.v4(),
    name,
    email,
    phone,
  };
  const allContacts = await listContacts();
  allContacts.push(nevContact);
  await fs.writeFile(contactsPath, JSON.stringify(allContacts));
};
const contacts = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

module.exports = contacts;
