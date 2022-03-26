const yargs = require('yargs');
//const chalk = require('chalk');

const {addContact,listContacts,removeContact} = require('./contacts');

yargs.command({
    command:"create",
    aliases: ["c"],
    describe: "[create new contanct]",
    builder: {
        fullname: {
            alias: "f",
            describe: "person fullname",
            demandOption: true,
            type: "string"
        },
        phone: {
            alias: "p",
            describe: "person phone",
            demandOption: true,
            type: "number"
        },
        email: {
            alias: "e",
            describe: "person emailAddress",
            demandOption: true,
            type: "string"
        },
    },
    handler({fullname,phone,email}){
        addContact(fullname,phone,email);
    }
});

yargs.command({
    command: "list",
    aliases: "l",
    describe: `$"[listing the saved contacts]"}`,
    handler(){
        listContacts();
    }
});


yargs.command({
    command: "remove",
    aliases: "r",
    describe: `${"[remove contact]"}`,
    builder: {
        fullname: {
            alias: "f",
            describe: "person fullname",
            demandOption: "true",
            type: "string"
        }
    },
    handler({fullname}){
        removeContact(fullname);
    }
})

// console.log(process.argv);
// console.log('-----------------------');
yargs.parse();
//console.log(yargs.argv);


