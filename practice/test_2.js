console.log(123);
let date = new Date();
console.log(date.getDay())
console.log(date.getTime());
console.log(new Date());

function divider (a,b){
    if (b === 0) {
        throw new Error('Arithmetic exception')
    }else {
        console.log(a/b);
    }
}
try {
    divider(10,0);
}catch (e) {
    console.log('you cannot use 0 as divider');
}

