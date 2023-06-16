const url = new URLSearchParams(window.location.search);
const userId = url.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(res => res.json())
    .then(user => {
        const userDetails = document.getElementById('userDetails');
        const postDiv = document.createElement('div');
        postDiv.classList.add('postDiv')
        postDiv.innerText = `
            ID: ${user.id}
            Name: ${user.name}
            Username: ${user.username}
            Email: ${user.email}
            Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}
            Geo Location: Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng}`

        const postBtn = document.createElement('button');
        postBtn.classList.add('postBtn')
        postBtn.innerText = 'Post of current user';

        const postsContainer = document.createElement('div');
        postsContainer.classList.add('postsContainer')

        postBtn.addEventListener('click', () => {
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
                .then(res => res.json())
                .then(posts => {
                    postsContainer.innerHTML ='';
                    posts.forEach(post => {
                        const postLink = document.createElement('a');
                        postLink.classList.add('postLink')
                        postLink.innerText = post.title;
                        postLink.href = `post-details.html?postId=${post.id}`;

                        postsContainer.appendChild(postLink);
                    })
                })
                .catch(error =>{
                    console.log('Помилка отримання даних', error)
                })
        })
        userDetails.append(postDiv, postBtn, postsContainer)
    })
    .catch(error =>{
        console.log('Помилка отримання інформації', error)
    })


// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
