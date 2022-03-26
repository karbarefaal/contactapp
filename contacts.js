const fs = require('fs');
//const chalk = require('chalk');


const addContact = (fullname,phone,email)=>{
    const contacts = loadContacts();
    const duplicateContact = contacts.find(c => c.fullname === fullname)

if(!duplicateContact){
    contacts.push({fullname,phone,email});
    saveContacts(contacts);
    console.log("Contact saved.");
}else{
    console.log("contact already exist");
    }
};

const listContacts = ()=>{
    const contacts = loadContacts();
    if(contacts.length > 0){
        console.log("your contacts:\n");
        console.table(contacts);
        // contacts.forEach((contact) => {
        //     console.log(`\t${"fullname"}:${contact.fullname}`);
        //     console.log(`\t${"phone"}:${contact.phone}`);
        //     console.log(`\t${"email"}:${contact.email}`);
        //     console.log("----------------------------------");
        // });
    }else{
        console.log("you don't have any contacts");
    }
};

const removeContact = fullname =>{
    const contacts = loadContacts();
    const filterContacts = contacts.filter(c=> c.fullname !== fullname);

    if(contacts.length > filterContacts.length){
        saveContacts(filterContacts);
        console.log(`${fullname} has been removed.`);
    }else{
        console.log("contact not found.");
    }
}


const loadContacts = () =>{
    try{
        const dataBuffer= fs.readFileSync("contacts.json");
        const contacts= dataBuffer.toString();
        return JSON.parse(contacts);
    }catch(ex){
        //console.log(ex);
        return [];
    }
}

const saveContacts = contacts =>{
    const data = JSON.stringify(contacts);
    fs.writeFileSync("contacts.json",data);
}

module.exports = {
    addContact,
    listContacts, 
    removeContact
};
