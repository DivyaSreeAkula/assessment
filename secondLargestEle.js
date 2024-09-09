// Write a function 
// that finds the second largest integer in 
// the array using only a single loop, and outputs the result to the console.

const secondLargestEle=(inputArr)=>{
// Assuming the size of the array is >=2    
let first= inputArr[0], second=inputArr[1]; //Initializes the first and s
if(inputArr[1]<inputArr[0]){
    first= inputArr[1];
    second=inputArr[0];
}
 for(let i=2; i<inputArr.length; i++){
    if(inputArr[i]<second){
        if(inputArr[i]<=first)
         first =inputArr[i]
        else
        second= inputArr[i]
    }
 }   
 return second
}

console.log(secondLargestEle([6,13,22,18,0,3,45,57,5,12]))