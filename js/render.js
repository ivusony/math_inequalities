
export default {
    calculateXrange,
    error_
}

function calculateXrange( operation,  number, idx, containerElement){
    let taskContainer = document.createElement( "div" );
    taskContainer.classList.add( "taskContainer" );
    let p = document.createElement( "p" );
    p.classList.add( "task" );
    let span = document.createElement( "span" );
    span.classList.add( "number" );
    span.textContent = `${ idx + 1}.)`;
    taskContainer.prepend( p );
    taskContainer.prepend( span );
    p.textContent = ` X ${operation} ${number}; X ∈ {___________________________}`;
    containerElement.appendChild( taskContainer );
}

function error_(e){
    let p = document.createElement( "p" );
    p.classList.add( "error" );
    p.textContent = e.message;  
    containerElement.innerHTML = "";
    containerElement.appendChild( p );
}