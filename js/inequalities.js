import render from "./render.js";

export default {
    calculateXrange,
    reset
}

let operations = [ ">", "<" ];
function pickGreatherThanOrLessThanOperator(){
    return operations[ Math.floor( Math.random() * operations.length ) ];
}


// minNumber: minimum number to generate - default 10
// maxNumber: maximum number to generate - default 100
// containerElement: element to append tasks to
function calculateXrange(  minNumber, maxNumber, containerElement ){
    try{
        let userInputNumberOfTasksRaw = prompt( "Koliko zadataka želiš da napraviš Kajo?" );
        let userInputNumberOfTasks = parseInt( userInputNumberOfTasksRaw );
        if( isNaN( userInputNumberOfTasks ) ){
            throw new Error( "Greška! Uneta kombinacija nije broj! Pokušaj ponovo" );
        }
        if( userInputNumberOfTasks > 500 ){
            throw new Error( "Greška! Maksimalan broj zadataka je 500" );
        }
        let operationBegin = Date.now();
        function factory(){
            let randomNumbers = [];
            function numberGenerator( randomNumbers ){
                let a = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
                if( !randomNumbers.includes( a ) ){
                    randomNumbers.push( a );
                }
                if( randomNumbers.length === userInputNumberOfTasks ) return;
                numberGenerator( randomNumbers );
            }
            // generate numbers recursively
            numberGenerator( randomNumbers );

            //clear container
            containerElement.innerHTML = "";

            // render tasks
            randomNumbers.forEach( ( number, idx ) => {
                let operation = pickGreatherThanOrLessThanOperator();
                let Xposition = Math.random() < 0.5 ? 0 : 1;
                render.calculateXrange( operation, Xposition, number, idx, containerElement );
            } );

            // log duration
            console.log( `Duration: ${ Date.now() - operationBegin } miliseconds ` );
        }
        factory();
    }catch( e ){
        render.error_( e );
    }
}


function reset(containerElement){
    containerElement.innerHTML = "";
}

