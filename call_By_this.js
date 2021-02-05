// একটি ম্যাথড এর মধ্য তার প্রোপার্টি এক্সেস করতে চাইলে আমাদের this ব্যবহার করতে হবে , this.firstName
// আর ম্যাথডের প্রোপার্টি বাইরে থেকে এক্সেস করতে হলে, যে মেথডের প্রোপার্টি এক্সেস করবো সেই 
// method এর নাম dot দিয়ে প্রোপার্টি এর নাম যেমনঃ Person.salary
const Person ={
    firstName : "nayemul",
    lastName :"Hasan",
    salary : 25000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    bill: function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}
Person.getFullName();
Person.bill(1550);
console.log(Person.salary);
console.log(typeof(Person));