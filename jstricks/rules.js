// There is NO else if in js!

//Consider the ? : ("ternary" or "conditional") operator:

a ? b : c ? d : e;
//? : is right-associative, so which grouping represents how it will be processed?

a ? b : (c ? d : e)
(a ? b : c) ? d : e
//The answer is a ? b : (c ? d : e). Unlike with && and || above, the right-associativity here actually matters, as (a ? b : c) ? d : e will behave differently for some (but not all!) combinations of values.

//One such example:

true ? false : true ? true : true;		// false

true ? false : (true ? true : true);	// false
(true ? false : true) ? true : true;	// true