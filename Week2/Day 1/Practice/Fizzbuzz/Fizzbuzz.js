var index = 1;
while (index<101) {
    if(index%3 == 0 & index%5 != 0){
        console.log ("Fizz");   
    }
    if(index%5 == 0 & index%3 != 0){
        console.log ("Buzz");   
    }
    if( index%3 ==0 & index%5 == 0) {
        console.log( "FizzBuzz");
    }

    if(index%3 != 0 & index%5 != 0){
        console.log (index);
    }
    
    index+=1;
}

