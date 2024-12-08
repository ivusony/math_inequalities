import  Inequalities from './inequalities.js';


function app(){
    let calculateXrangeCheckbox = document.querySelector( "#calculateXrangeCheckbox" );
    let containerElement = document.querySelector( "#containerElement" );
    calculateXrangeCheckbox.addEventListener( "change", function(){
        if( calculateXrangeCheckbox.checked ){
            // minNumber: minimum number to generate - default 10
            // maxNumber: maximum number to generate - default 511 ( 500 + minNumber )
            // containerElement: element to append tasks to
            Inequalities.calculateXrange( 10, 511, containerElement );
        }
        else{
            containerElement.innerHTML = "";
        }
    });
}

app();

// Inequalities.calculateXrange( 10, 10, 100 );