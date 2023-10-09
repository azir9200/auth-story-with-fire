
MCQ TEST
1. Write the correct answer from the following options and give an explanation (2-5 lines).
let greeting;
greetign = {};
console.log(greetign);
A: {},   
B: ReferenceError: greetign is not defined
C: undefined
Answer :  B: ReferenceError: greetign is not defined
 Explain: In the questions code is given an  declared a variable named greeting, but later assigened an 'greetign' is not declared, and an empty object, it should be greeting something or not. thats why answer willl be: B: ReferenceError: greetign is not defined.
2. Write the correct answer from the following options and give an explanation (2-5 lines).
function sum(a, b) {
  return a + b;
}

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3
Answer:  C: "12"   Explain: in this function  name sum is return a add  with b, but when we use the + operator with a string and a number, it performs concatenation instead of addition.  so when WE call the function it will be "12", 
3. Write the correct answer from the following options and give an explanation (2-5 lines).
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError
Answer:   C: ['🍝', '🍕', '🍫', '🥑', '🍔']    Explain :   in this functon we create an array with the food.  then we declare favourie  info with the favourite food, which does not change the previous value, so answer is C..
4. Write the correct answer from the following options and give an explanation (2-5 lines).
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError
Answer :  B: Hi there, undefined,  explain:  in the given function sayHi having a parameter anme "name"  but when it calling  there is not any value provided, so its undefined. 
5. Write the correct answer from the following options and give an explanation (2-5 lines).
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4
Answer: 3     explain :  in the code have an array which have forEach method,    So, the count variable gets incremented three times, resulting in a final value of 3. Therefore, when you log count, it will display 3