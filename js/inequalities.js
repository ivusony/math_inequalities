
export default {
    calculateXrange
}

let operations = [ ">", "<" ];
function pickRandomOperation(){
    return operations[ Math.floor( Math.random() * operations.length ) ];
}

// numberOfTasks: number of tasks to generate
// minNumber: minimum number to generate - default 10
// maxNumber: maximum number to generate - default 100
// containerElement: element to append tasks to
function calculateXrange( numberOfTasks, minNumber, maxNumber, containerElement ){
    try{
        let userInputNumberOfTasksRaw = prompt( "Koliko zadataka želiš da napraviš Kajo?" ) || numberOfTasks;
        let userInputNumberOfTasks = parseInt( userInputNumberOfTasksRaw );
        if( isNaN( userInputNumberOfTasks ) ){
            console.error( "Unesi broj!" );
            throw new Error( "Unesi broj!" );
        }
        function factory(){
            let randomNumbers = [];
            function numberGenerator( randomNumbers ){
                let a = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
                if( !randomNumbers.includes( a ) ){
                    randomNumbers.push( a );
                }
                // console.log( randomNumbers );
                if( randomNumbers.length === userInputNumberOfTasks ) return;
                numberGenerator( randomNumbers );
            }
            // generate numbers recursively
            numberGenerator( randomNumbers );

            //clear container
            containerElement.innerHTML = "";

            randomNumbers.forEach( ( number, idx ) => {
                let operation = pickRandomOperation();
                let p = document.createElement( "p" );
                let span = document.createElement( "span" );
                span.classList.add( "number" );
                span.textContent = `${ idx + 1}.`;
                p.prepend( span );
                p.classList.add( "task" );
                p.textContent = ` X ${operation} ${number}; X ∈ {___________________________}`;
                containerElement.appendChild( p );
            } );
        }
        factory();
    }catch( e ){
        console.error( e );
        alert( e.message );
    }
}

