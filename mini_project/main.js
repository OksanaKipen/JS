fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
.then(data =>{
    console.log(data);
    const usersDiv = document.getElementById('usersDiv');
    data.forEach(user => {
        const usersBlock = document.createElement('div');
        usersBlock.innerText = `ID: ${user.id} Name: ${user.name}`;

        const btnLink = document.createElement('a');
        btnLink.innerText = 'User-Details';
        btnLink.href = `user-details.html?id=${user.id}`

        usersDiv.appendChild(usersBlock);
        usersBlock.appendChild(btnLink)
    })
})
.catch(error => {
    console.log('Помилка отримання даних', error);
})