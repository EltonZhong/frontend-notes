let spread = function() { 
    console.log([...arguments])
}

(() => {}).bind // doesn't work, also for arguments ..ect

!!new Boolean( false ) === true; //stupid object

var _sy_test = Symbol.for('this is a new Symbol') // Note: Symbols are not objects, they are simple scalar primitives.
_sy_test === Symbol.for('this is a new Symbol') // true! 


