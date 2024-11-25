// iterador DO WHILE

let i =0; // inicializar while

do{
    console.log(`número ${i}`);
    i++;
}while( i < 10 );


do {
    if(i%2===0 && i!==0){
        console.log(`El número ${i} es par`);
    } else if(i!==0){
        console.log(`El número ${i} es impar`);
    }
    i++;
}while( i <= 20 );