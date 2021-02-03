// students নামে একটা অ্যারে থাকবে(id and name), একটা ফর লুপ ব্যবহার করে অ্যারের প্রতেকটি অবজেক্টকে ধরতে হবে
// এবং সেখান থেকে শুধু name (নাম) গুলোকে নিয়ে অন্য একটা অ্যারেতে রাখতে হবে 
// এবং id গুলোকে আলাদা অ্যারেতে রাখতে হবে; 
const students = [
    {id: 11, name: 'Nayemul Hasan'},
    {id: 15, name: 'Saheb Hasan'},
    {id: 17, name: 'Nayemul saheb'},
    {id: 21, name: 'Faysal Ahamed'},
    {id: 14, name: 'Asad Ullah'}
];
const names = [];
const ids = [];
for(let i=0; i<students.length; i++){
    const element = students[i]
    const name = element.name;
    const id = element.id;
    names.push(name);
    ids.push(id);
    console.log(names);
    console.log(ids);
}