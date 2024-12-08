
export default {
    calculateXrange
}

function calculateXrange( numberOfTasks, minNumber, maxNumber, containerElement ){
    let userInputNumberOfTasks = prompt( "Koliko zadataka želiš da napraviš Kajo?" ) || numberOfTasks;
    let operations = [ ">", "<" ];
    function pickRandomOperation(){
        return operations[ Math.floor( Math.random() * operations.length ) ];
    }
    function factory(){
        let randomNumbers = [];
        function numberGenerator( randomNumbers ){
            let a = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
            if( !randomNumbers.includes( a ) ){
                randomNumbers.push( a );
            }
            // console.log( randomNumbers );
            if( randomNumbers.length === numberOfTasks ) return;
            numberGenerator( randomNumbers );
        }
        numberGenerator( randomNumbers );

        randomNumbers.forEach( number => {
            let operation = pickRandomOperation();
            let p = document.createElement( "p" );
            p.textContent = `X ${operation} ${number}; X ∈ {___________________________}`;
            containerElement.appendChild( p );
            console.log( `X ${operation} ${number}; X ∈ {               }` );
        } );
    }
    factory();
}