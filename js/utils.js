export default {
    calculateXrangeCheckAnswer
}

function calculateXrangeCheckAnswer( number, arrayOfNumbers, operation ){
    
    let result  = false;

    if( operation === ">" ){
        result = arrayOfNumbers.every( num => num > number );
    }else{
        result = arrayOfNumbers.every( num => num < number );
    }
    return result;
}