function firstNonRepeatedChar(str) {
 // Write your code here
	let currChar = {};

	for(let char of str){
		if(currChar[char] === undefined){
			currChar[char] = 1;
		} else {
			currChar[char] += 1;
		}
	}

	for(let char of str){
		if(currChar[char] === 1){
			return char;
		}
	}
	return null;

}
const input = prompt("Enter a string"); 
alert(firstNonRepeatedChar(input)); 
