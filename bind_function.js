//normalPerson নামে একটা object আছে এবং তার ভিতরে কিছু property and method আছে
// যেমন  firstName and lastName হলো normalPerson এর property,
//আর getFullName and chargeBill হলো normalPerson এর method,
// যখন আমরা normalPerson object এর method অন্য একটা object এ ব্যবহার করবো তখন আমাদের bind() ব্যবহার করতে হবে 
const normalPerson ={ 
    firstName : "nayemul",
    lastName :"Hasan",
    salary : 25000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    }
}
//2nd object কোন ম্যথড নাই কিন্তু আমাদের chargeBill ম্যাথডটা লাগবে তাই আমাদের ৩২ নাম্বার লাইনে heroPerson কে বাইন্ড করলাম normalPerson এর
//  chargeBill ম্যাথডের সাথে। সোজা কথা কোন object এর ম্যাথড দার করে অন্য একটা object এর ম্যাথড হিসেবে ব্যবহার করার নাম ই বাইন্ড।

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
const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);
heroBillCharge(3000);
heroBillCharge(1770);
console.log(heroPerson.salary);
console.log(normalPerson.salary);

// normal Person সেকশন 

// normalPerson.getFullName();
// normalPerson.chargeBill(1550);
// console.log(normalPerson.salary);
// console.log(typeof(normalPerson));