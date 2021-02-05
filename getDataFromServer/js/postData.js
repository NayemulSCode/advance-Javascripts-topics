
// const postInfo= {
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }

document.getElementById('postbtn').addEventListener('click',function(){
    const title = document.getElementById('title').value;
    const bodyContent = document.getElementById('postbody').value;
    const post = {title:title, body:bodyContent};
    postServer(post);
    console.log(title, bodyContent);
})
//server এ ডাটা পোস্ট করতে গেলে মেথড, বডি, আর হেডার লাগবে! ফেচ এর মাধ্যমে সার্ভার ডাটা পোস্ট করি! 
function postServer(postInfo){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(postInfo),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((data) => console.log(data));
}