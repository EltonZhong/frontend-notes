let spread = function() { 
    console.log([...arguments])
}

(() => {}).bind // doesn't work, also for arguments ..ect

!!new Boolean( false ) === true; //stupid object

var _sy_test = Symbol.for('this is a new Symbol') // Note: Symbols are not objects, they are simple scalar primitives.
_sy_test === Symbol.for('this is a new Symbol') // true! 


ke = {
	length: 4,
	2: "foo"
};

Array.from( arrLike );
// [ undefined, undefined, "foo", undefined ]


new WeakMap()  // take object as key, and gc more efficiently

String.raw`\ta${str}d\xE9`;
// "\tabcd\xE9", not "	abcdé"


var obj = { a: 1 },
	handlers = {
		get(target,key,context) {
			// note: target === obj,
			// context === pobj
			console.log( "accessing: ", key );
			return Reflect.get(
				target, key, context
			);
		}
	},
	pobj = new Proxy( obj, handlers );

obj.a;
// 1

pobj.a;
// accessing: a
// 1
