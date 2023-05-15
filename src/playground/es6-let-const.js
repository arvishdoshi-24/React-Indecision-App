// VAR vs LET vs CONST Variable declarations.

// VAR can be reassigned and redefined.

// For ex,

var nameVar = 'Champak Lal'   // Initital Decalaration
nameVar = 'Daya'         // Reasigning allowed
var nameVar = 'Babita'    // Redifining allowed
console.log(nameVar) // OUPTUT == Babita

// 
console.log('❤')
//

// LET can be reassigned BUT NOT redefined
let nameLet = 'Tapu';    // Initial Declaration
nameLet = 'Jethiya Babuchak';      // Reassigning allowed
// let nameLet = 'Iyer Idli'  // Redifining not allowed - GIVES OUT ERROR - TypeError: src/playground/es6-let-const.js: Duplicate declaration "nameLet"
console.log(nameLet)  // ignoring line 19, output == Jethiya Babuchak


// CONST can neither be redifined nor reassigned 
const nameConst = 'Frank'
//const nameConst = 'Gunther' // Redifing not allowed.
//nameConst = 'Peter'  // Reassigned not allowed.
console.log(nameConst)


// SCOPING 


// Just like var, let and const are function scoped. 
// But let and const are also block level scoped. Var is not block level scoped.

// Function Scoped -- VAR, LET, CONST 
// Block Level Scoped -- LET, CONST

// When something is block level scoped, not only it's bound to functions, it's also bound to code blocks.
// Things like the code blocks for a for loop or for an if statement. Block scoped does include functions.


// EXAMPLE - BLOCK LEVEL SCOPING

// With VAR
// var fullName = 'Jen Mead';

// if(fullName) {
//     var firstName = fullName.split(' ')[0]
//     console.log(firstName);
// }

// As VAR based variables are function scoped, which means the scope of firstName and fullName have same scope. WHY ?
// Line 45-47 is an IF statement, not a function.

// console.log(firstName); // therefore firstName can be accessed here as well.

// With CONST - As const is block scoped, at line no 69 there will be error. But line 64 will work properly.
// Same thing like above (line 56) happens with LET. Try replacing LET at line no 63
var fullName = 'Jen Mead';

if(fullName) {
    const firstName = fullName.split(' ')[0]
    console.log(firstName);
}



console.log(firstName); // therefore firstName can't be accessed here.