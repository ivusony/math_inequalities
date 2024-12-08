import  Inequalities from './inequalities.js';


function app(){
    let calculateXrangeCheckbox = document.querySelector( "#calculateXrangeCheckbox" );
    let calculateXrangeTasksContainer = document.querySelector( "#calculateXrangeTasksContainer" );
    calculateXrangeCheckbox.addEventListener( "change", function(){
        if( calculateXrangeCheckbox.checked ){
            Inequalities.calculateXrange( 10, 10, 100, calculateXrangeTasksContainer );
        }
    });
}

app();

// Inequalities.calculateXrange( 10, 10, 100 );