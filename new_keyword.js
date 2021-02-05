//নিঊ (new) keyword ব্যবহার করা হয় যখন একটা (class) ক্লাস থেকে অনেক গুলো সেইম টাইপের অবজেক্ট বানানো লাগে
//class হলো যে অনেক গুলো প্রোপার্টি ধারন করতে পারে 
// object হল  class এর প্রোপ্রার্টি গুলো মধ্য একটি বা একাধীক

class Person{
    constructor(firstName, lastName,age,salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.salary = salary;
    }
}
 const heroPerson = new Person('Nayemul','hasaan',24,25000);
 const newPerson = new Person('Faysal','ahamed',32,250000);
 console.log(heroPerson);
 console.log(newPerson);