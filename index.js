console.log("hello world");

const currentYear = new Date().getFullYear();
const birthYear = 2001;
const ageNaimur = currentYear - birthYear;
console.log("your age is", ageNaimur);

// Constant values
const weight = 70;
const height = 1.75;

// BMI formula: weight / (height * height)
const bmi = weight / (height * height);

console.log("Your BMI is:", bmi);
// check commit from other device second time

const firstName = "Naimur";
const lastName = "Rahman";
const experience = "a year";
const niche = "web development";

const aboutNaimur = `I'm ${firstName} ${lastName}. I have ${experience} of experience in ${niche}.`;
console.log(aboutNaimur);

// if else
const age = 18;
if (age >= 18) {
  console.log(`You are eligible to vote`);
} else {
  console.log(`You are not eligible to vote`);
}

// type conversion and coercion
//number
console.log(Number("42")); //number 42
console.log(Number("42px")); //Nan
console.log(Number(true)); //1
console.log(Number(false)); //0
//sting
console.log(String(100 + 23)); //sting
console.log("100" + 23); //10023
console.log("100" - 23); //77
//Boolean
console.log(Boolean(0)); //false
console.log(Boolean("0")); //true
console.log(Boolean("")); //false
console.log(Boolean(" ")); //true
//operator
console.log(2 + "2"); //22
console.log(2 - "2"); //0
console.log(2 * "2"); //4
console.log(2 / "two"); //Nan
//calculation with boolean
console.log(1 + true); //2
console.log(true + true); //2
console.log(10 - false); //10
console.log(false - true); //-1
