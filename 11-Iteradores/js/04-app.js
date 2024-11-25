// iterador while

let i =0; // inicializar while

/*while( i < 10 ){
    console.log(`número ${i}`);
    i++;
}*/

while( i <= 20 ){
    if(i%2===0 && i!==0){
        console.log(`El número ${i} es par`);
    } else if(i!==0){
        console.log(`El número ${i} es impar`);
    }
    i++;
}