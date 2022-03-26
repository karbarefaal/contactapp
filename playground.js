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