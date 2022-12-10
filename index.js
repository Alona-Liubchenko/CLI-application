const contacts = require("./db/contacts");

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const { argv } = yargs(hideBin(process.argv));

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const list = await contacts.listContacts();
      console.log(list);
      break;

    case "get":
      const contact = await contacts.getContactById(id);
      console.log("get", contact);
      break;

    case "add":
      await contacts.addContact(name, email, phone);
      break;

    case "remove":
      const deleteContact = await contacts.removeContact(id);
      console.log(deleteContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
