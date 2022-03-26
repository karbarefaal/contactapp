const fs = require('fs');

const persons = [
    
    { id:1, fullname: "ali sajjadi"},
    { id:2, fullname: "sajjad rastkhiz"},
    { id:3, fullname: "mehdi ansari"}

];


//fs.writeFileSync("contacts.json", JSON.stringify(persons));

const data = fs.readFileSync('contacts.json');
const p = JSON.parse(data.toString());
console.log(p);
console.log(typeof(p));

//--------------------------------------------------

//console.log(process.argv[3]);

const command = process.argv[2];
// if(command == 'add') console.log('adding..');
// else console.log('command not valid');

switch(command){
    case 'add':
        console.log('adding...');
        break;
    case 'remove':
        console.log('removing..');
        break;
    default:
        console.log('command not valid');
        

}