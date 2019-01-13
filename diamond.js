


let who = ['The milkman ', 'My favorite ghost ', 'The drifter at the park ', 'My sick cat '];
let what = ['took my balloon ', 'hid under my bed ', 'danced in the street ', 'sang a Dolly Parton song '];
let when = ['yesterday.', 'last night.', '10 years ago.', 'in 1987.'];

let makeExcuse = () => {
 let whodat = Math.floor(Math.random() * who.length);
 let whatdat = Math.floor(Math.random() * what.length);
 let whendat = Math.floor(Math.random() * when.length);
 

 document.getElementById("excuses").innerHTML =  who[whodat] + "" + what[whatdat] + "" + when[whendat];

} 

console.log(makeExcuse(document.getElementById("excuses").innerHTML))