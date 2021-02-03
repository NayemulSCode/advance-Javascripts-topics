const numbers = [2,3,4,5,6,7,8];
const output = [];

// for(let i=0 ; i<numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);
// map function এর তিনটি প্যারামিটার থাকে ১। এলিমেন্ট(element) 2। ইন্ডেক্স(index) 3.অ্যারে(array)
const result =  numbers.map(function(element){
    return element * element;
})
console.log(result);