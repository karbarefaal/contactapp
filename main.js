const yargs = require('yargs');


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
        console.log(fullname,phone,email);
    }
});

// console.log(process.argv);
// console.log('-----------------------');
yargs.parse();
//console.log(yargs.argv);


