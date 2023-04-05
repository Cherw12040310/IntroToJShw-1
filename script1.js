

let stringOne ="Strawberry";
let stringTwo ="Bananna";
let stringThree ="Strawberry";


if(stringOne == stringTwo && stringTwo == stringThree){
	alert("Correct: All three strings are equal");
}
else if(stringOne == stringTwo || stringOne == stringThree || stringTwo == stringThree){ 
	alert("At least two of the strings are equal");
}
else{
	alert("None of the strings are equal");
}

/*
console.log(stringOne == stringTwo); //false
console.log(stringTwo == stringThree); //false
console.log(stringThree == stringOne); //false
console.log(stringThree == stringOne && stringOne == stringTwo); //false
*/