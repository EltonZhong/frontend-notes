/**
 *  JSON stringification has the special behavior that if an object value has a toJSON() method defined,
 *  this method will be called first to get a value to use for serialization.
**/
var o = { };

var a = {
	b: 42,
	c: o,
	d: function(){}
};

// create a circular reference inside `a`
o.e = a;

// would throw an error on the circular reference
// JSON.stringify( a );

// define a custom JSON value serialization
a.toJSON = function() {
	// only include the `b` property for serialization
	return { b: this.b };
};

JSON.stringify( a ); // "{"b":42}"


/**
 * An optional second argument can be passed to JSON.stringify(..) that is called replacer. 
 * This argument can either be an array or a function. 
 * 
 * It's used to customize the recursive serialization of an object by providing a filtering mechanism 
 * for which properties should and should not be included, in a similar way to how toJSON() can prepare a value for serialization.
 * If replacer is an array, it should be an array of strings, each of which will specify a property name that 
 * is allowed to be included in the serialization of the object. 
 * If a property exists that isn't in this list, it will be skipped.
 * 
 * If replacer is a function, it will be called once for the object itself, 
 * and then once for each property in the object, and each time is passed two arguments, key and value. 
 * To skip a key in the serialization, return undefined. Otherwise, return the value provided.
 */
var a = {
	b: 42,
	c: "42",
	d: [1,2,3]
};

JSON.stringify( a, ["b","c"] ); // "{"b":42,"c":"42"}"

JSON.stringify( a, function(k,v){
	if (k !== "c") return v;
} );
// "{"b":42,"d":[1,2,3]}"


var a = {
	valueOf: function(){
		return "42";
	}
};

var b = {
	toString: function(){
		return "42";
	}
};

var c = [4,2];
c.toString = function(){
	return this.join( "" );	// "42"
};

Number( a );			// 42
Number( b );			// 42
Number( c );			// 42
Number( "" );			// 0
Number( [] );			// 0
Number( [ "abc" ] );	// NaN

~-1 === 0 // ~x is roughly the same as -(x+1). That's weird, but slightly easier to reason about.

