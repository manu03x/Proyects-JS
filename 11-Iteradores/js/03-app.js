// Fizz buzz

// Tenemos del 0 al 100

// Multiplos de 3 imprimen fizz

// Multiplos de 5 imprimen buzz

// Los que son multiplos de 3 y de 5 deben escribir la palabra fizz buzz


for(i = 1; i < 100; i++) {
    if(i % 3 == 0 && i % 5 == 0){
        console.log( i + ' Fizz Buzz');
    } else if(i % 3 == 0){
        console.log(i + ' Fizz')
    } else if (i % 5 == 0){
        console.log(i + ' Buzz')
    }
}