const numbers = [2,3,4,5,6,7,8];
//filter মানে হলো কন্ডিশনের মধ্য কে কে পরে যেমন এখানে বলা হইছে numbers array মধ্যে ৫ থেকে বড় কে কে আছে 
//  x => x>5
const larger = numbers.filter(x => x >5);
//find মানে হলো এই numbers অ্যারে মধ্যে এই x>5  কন্ডিশন এর মধ্যে কোন এলিমেন্ট থাকলে তাদের মধ্যে প্রথম এলিমেন্ট কে দেখাবে বা বের করে দিবে 
const isThere  = numbers.find(x => x >5);
console.log(isThere);
console.log(larger);