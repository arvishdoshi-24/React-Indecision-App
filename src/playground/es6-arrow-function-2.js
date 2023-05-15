// In ES6 arrow functions, `Arguments` object and `this` object is no longer bound.
// Unlike in ES5, they are bound

// So, we're going to run through an example of each of these. We'll start off with 
// ES5 function that actually uses the tool and then we'll explore how that goes away 
// with arrow function.

// `arguments` object - no longer bound with arrow functions

 // ES-5 example 

const add = function (a,b) {
    // We have access to the arguments object. It prints out all of the arguments passed to a function,
    // regardless of what's defined in the arguments list..i.e `a` and `b`.
    // arguments at line 16 will print 55, 1 and 1000 as well even though 1000 is not named at line no 12.
    console.log(arguments)
    return a + b;
}

//console.log(add(55,1, 1000))

 // Arrow function example

const addArrow = (a,b) => {
    //console.log(arguments)
    return a + b;
};

//console.log(addArrow(55,45))



// `this` keyword - no longer bound with arrow functions

  // ES5 Example 
  
  // placesLived is a method, a function defined on an object property. And it's value will be an ES5 function.

  // When we use a regular function (i.e ES5), and we define it on an object property, the `this` keyword is 
  // bound to that object (i.e the `user` object). so, we can access values like `this.name`, `this.cities`.

  // So as we know, when we add a function onto an object property, the `this` value is bound to that object. (i.e the `user` object)
  // When we just define a regular anonymous function (like we did at line no 55), there is no bound `this` value and it gets 
  // set equal to undefined. SO, LINE NO 55 WILL GIVE AN ERROR !!! 

  // Therefore, `this.name` is accessible at line no 52 but not at line no 56

const user = {
    name : 'Jethiya Babuchak',
    cities: ['Bhachau', 'Mumbai', 'London'],
    placesLived: function () {
        console.log(this.name)
        console.log(this.cities)

        this.cities.forEach(function(city) {
            console.log(this.name + ' has lived in ' + city)
        })
    }
}

//user.placesLived();


// There are a ton of workarounds that have existed for a long time. Below mentioned is one such example.
// We create a new variable called `that`, set it equal to `this`. Then we can acccess `that` wherever we want,
// including in our nested functions WITHOUT ANY ERROR LIKE WE ENCOUNTERED ABOVE !!!

const userThat = {
    name : 'Jethiya Babuchak',
    cities: ['Bhachau', 'Mumbai', 'London'],
    placesLived: function () {
        const that = this;

        this.cities.forEach(function(city) {
            console.log(that.name + ' has lived in ' + city)
        })
    }
}

// userThat.placesLived();


  // Arrow Function Example

  // With ES6 Arrow Functions, your functions no longer bind their own `this` value. 
  // Instead, they just use the `this` value of the context they were created in.

  // In below example were an arrow function, it would just use it's parent's `this` value.  And it's parent is `userArr` object.
  // And we don't need to have `const that = this` workaround.

const userArr = {
    name : 'Jethiya Babuchak',
    cities: ['Bhachau', 'Mumbai', 'London'],
    placesLived: function () {
        console.log(95, this)
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city)
        }
        )
    }
}

//userArr.placesLived();


// BELOW FUNCTION WON'T WORK



const userArr2 = {
    name : 'Jethiya Babuchak',
    cities: ['Bhachau', 'Mumbai', 'London'],
    placesLived: () => {
        console.log(95, this)
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city)
        }
        )
    }
}

//userArr2.placesLived(); // ERROR - Uncaught TypeError: Cannot read properties of undefined (reading 'cities')

//We're getting that because this arrow function doesn't bind its own `this` value.
//So it's no longer equal to the `user` object. It goes up to the parent scope, which is the global scope.

//And in that case, `this` is indeed undefined. So if we do want to use `this`, use the code snippet from line 
// 91-100.




// NEW SYNTAX IN ES6 FOR METHOD DEFINITION SUCH THAT WE GET ACCESS TO `this`  (FROM LINE NO 138):- 

const ES6user_new = {
    name : 'Jethiya Babuchak',
    cities: ['Bhachau', 'Mumbai', 'London'],
    placesLived() {
        console.log(139, this)
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city)
        }
        )
    }
}

ES6user_new.placesLived();

const multiplier = {
    numbers : [1,2,3],
    multipleBy : 2,
    multiply() {
        console.log(this)
        return this.numbers.map((number) => number * this.multipleBy);
    }
}

//console.log(multiplier.multiply());


// Because ‘this’, always references the owner of the function it is in.

// When it is inside of an object’s method — the function’s owner is the object. Thus the ‘this’ keyword is bound to the object. 
// Yet when it is inside of a function, either stand alone or within another method, it will always refer to the window/global object.
