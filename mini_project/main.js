fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        const usersDiv = document.getElementById('usersDiv');
        data.forEach(user => {
            const usersBlock = document.createElement('div');
            usersBlock.classList.add('userBlock')
            usersBlock.innerText = `ID: ${user.id} Name: ${user.name}`;

            const btnLink = document.createElement('a');
            btnLink.classList.add('user-button')
            btnLink.innerText = 'User-Details';
            btnLink.href = `user-details.html?id=${user.id}`

            usersDiv.appendChild(usersBlock);
            usersBlock.appendChild(btnLink)
        })
    })
    .catch(error => {
        console.log('Помилка отримання даних', error);
    })


// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
