const url = new URLSearchParams(window.location.search);
const postId = url.get('postId');

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res => res.json())
    .then(post => {
        const postDetails = document.getElementById('postDetails');
        const h1 = document.createElement('h1');
        h1.innerText = 'Post Details';

        const usersInfo = document.createElement('div');
        usersInfo.classList.add('usersInfo')
        usersInfo.innerText = `Post Information
        ID: ${post.id}
        Title: ${post.title}
        Post: ${post.body}
        `;
        const h2 = document.createElement('h2');
        h2.innerText = 'Comments';

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(res => res.json())
            .then(comments => {
                const commentsDiv = document.createElement('div');
                commentsDiv.classList.add('commentsDiv');
                comments.forEach(comment => {
                    const commentBlock = document.createElement('div');
                    commentBlock.classList.add('commentsBlock')
                    const p = document.createElement('p');

                    p.innerText = `
                    ${comment.name}
                    ${comment.email}
                    ${comment.body}`;

                    commentBlock.appendChild(p);
                    commentsDiv.appendChild(commentBlock);
                })
                postDetails.append(h1, usersInfo, h2, commentsDiv);
            })
            .catch(error => {
                console.log('Помилка відображення коментарів', error);
            })
    })
    .catch(error => {
        console.log('Помилка відображення інформації', error);
    })

// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)