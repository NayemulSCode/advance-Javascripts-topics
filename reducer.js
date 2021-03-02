//first method for finding total sum of array using for loop
const aonm = [1,2,3,4,5,6,7,8];
var element = 0;
for (let i = 0; i < aonm.length; i++) {
    element = element + aonm[i];
}
console.log("tui hoili for loop er total sum: ",element);

//second method for finding the sum of array  using reduce with return 
const totalSum = aonm.reduce((sum, num) =>{
    console.log(sum, num);
    return sum + num  
}, 
0);

//third method for finding  the sum of array using reduce
const total = aonm.reduce((element,i) => element + i,0);
console.log("tui hoili reducer er sum:",total);

//4th method for finding the sum of array object using reduce
const familyMembers = [
    {name: "Faysal Ahmed", age:34, salary: 50000},
    {name: "Farid Ahmed", age:38, salary: 70000},
    {name: "Asad Ahmed", age:36, salary: 80000},
    {name: "Noor mona", age:20, salary: 15555}
];
const Salary = familyMembers.reduce((Sum, salary)=> Sum+ salary.salary,0);
console.log(Salary);