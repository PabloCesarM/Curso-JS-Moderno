// RETO DEL FIZZ BUZZ


// si un número es 3 o multiplo imprimir fizz
// si un número es 5 o multiplo imprimir buzz
// si un número es multiplo de 3 y5 imprimir FIZZBUZZ!

for (let i = 0; i < 100; i++) {
    if(i%3 === 0 && i%5 ===0 ){
        console.log(`${i} FIZZBUZZ!`);
        continue;
    }
    if(i%3 === 0){
        console.log(`${i} fizz`);
    } else if(i%5 === 0){
        console.log(`${i} buzz`);
    }
    
}