//normalPerson নামে একটা object আছে এবং তার ভিতরে কিছু property and method আছে
// যেমন  firstName and lastName হলো normalPerson এর property,
//আর getFullName and chargeBill হলো normalPerson এর method,
// যখন আমরা normalPerson object এর method অন্য একটা object এ ব্যবহার করবো তখন আমাদের apply() ব্যবহার করতে হবে 
// apply() আর call() কাজ একই কিন্তু একটা array ব্যবহার করে অন্যটা , কমা 
const normalPerson ={ 
    firstName : "nayemul",
    lastName :"Hasan",
    salary : 25000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tax, otherCost){
        console.log(this);
        this.salary = this.salary - amount - tax - otherCost;
        return this.salary;
    }
}
//2nd object কোন ম্যথড নাই কিন্তু আমাদের chargeBill ম্যাথডটা লাগবে তাই আমাদের ৩২ নাম্বার লাইনে heroPerson কে apply() করলাম normalPerson এর
//  chargeBill ম্যাথডের সাথে।  এর প্রথম argument হবে this argument পরে ইচ্ছেমত ( array )ব্যবহার করে অনেক গুলা argument দেয়া যাবে ম্যাথডে যতটা থাকে 
// সোজা কথা কোন object এর ম্যাথড দার করে অন্য একটা object এর ম্যাথড হিসেবে ব্যবহার করার নাম ই বাইন্ড।

const heroPerson ={
    firstName: "Faysal",
    lastName: "Ahamed",
    salary: 25000
}
//3rd Object
const madPerson ={
    firstName:"Oliv",
    lastName:"kan",
    salary: 30000
}
//chargeBill: function(amount, tax) //this.salary
//chargeBill.apply(heroPerson, 900, 50); প্রথমটা দিস(heroPerson) , পরেরটা (amount) ,(tax),(otherCost)
normalPerson.chargeBill.apply(heroPerson, [900, 50, 150]);

console.log(heroPerson.salary);
