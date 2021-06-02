function rand(min, max){
    let r = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(r);
}
var mas = [0, 0, 0, 0];
for (let i = 0; i < 4; i++) {
    let r = rand (1, 9);
    for( let j = 0; j < 4; j++){
        while( r == mas[j]){
            r = rand (1, 9);
        }
    }
    mas[i] = r;
}

var somd = 1;
const readlineSync = require('readline-sync');

console.log(mas);
do{
var snum = [0, 0, 0, 0];
var some = [];
answer = readlineSync.question('some ')
snum = answer.toString();
var bull = 0, cow = 0;
for( var i = 0; i < 4; i += 1){
    some.push(+snum.charAt(i));
   }

for( var i = 0; i < 4; i += 1){
    if(some[i] == mas[i]){ bull += 1; };
    for( var j = 0; j < 4; j += 1){
        if (some[i] == mas[j]){ cow += 1; };
    }
}

if( bull == 4 ) { somd = 0; 
    console.log('You win');
    break;
};

console.log('Cows ' + cow + ' bulls ' + bull);
}while(somd != 0);