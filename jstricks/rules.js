// There is NO else if in js!

//Consider the ? : ("ternary" or "conditional") operator:

a ? b : c ? d : e;
//? : is right-associative, so which grouping represents how it will be processed?

a ? b : (c ? d : e)
(a ? b : c) ? d : e
//The answer is a ? b : (c ? d : e). Unlike with && and || above, the right-associativity here actually matters, as (a ? b : c) ? d : e will behave differently for some (but not all!) combinations of values.

// One such example:
// Trinomial operators are right-associative
// and space before ? is needed
true ? false : true ? true : true;		// false

true ? false : (true ? true : true);	// false
(true ? false : true) ? true : true;	// true


// a ponit to another object!!
// also right-associative, but a.x is already parsed
var a = {n: 1};
a.x = a = {n: 2};

