let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

function getExcuse(){

    let valorWho = Math.floor(Math.random() * who.length);
    let valorAction = Math.floor(Math.random() * action.length);
    let valorWhat = Math.floor(Math.random() * what.length);
    let valorWhen= Math.floor(Math.random() * when.length);

    let quien = who[valorWho];
    let accion = action[valorAction];
    let que = what[valorWhat];
    let cuando = when [valorWhen];

    console.log("A", quien, accion, que, cuando);
    return quien+" "+ accion +" "+ que +" "+ cuando
}


document.querySelector("#excuse").innerHTML = getExcuse()