// solution 1

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


// solution 2

for (var index2 = 1 ; index2 <101; index2++) {
    if(index2%3 == 0 & index2%5 != 0){
        console.log ("Fizz");   
    }
    if(index2%5 == 0 & index2%3 != 0){
        console.log ("Buzz");   
    }
    if( index2%3 ==0 & index2%5 == 0) {
        console.log( "FizzBuzz");
    }

    if(index2%3 != 0 & index2%5 != 0){
        console.log (index2);
    }
    
}
