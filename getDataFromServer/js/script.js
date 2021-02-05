

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(json => displayUsers(json))
.catch(error => console.log(error))

//create funtion for get username in my own browser
function displayUsers(users){
    const userNames = users.map(user =>user.username);
    const ul = document.getElementById('user-name-container');


    //for loop for get username one by one
    for(let i=0; i<userNames.length; i++){
        const username = userNames[i];
        const li = document.createElement('li');
        li.innerText = username;
        ul.appendChild(li);
    }
    
}