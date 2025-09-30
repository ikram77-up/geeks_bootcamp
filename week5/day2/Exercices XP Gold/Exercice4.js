const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
];

// const getData = async function () {
//     const [users, posts, albums] = await Promise.all(urls.map(url =>
//         fetch(url).then(resp => resp.json())
//     ));
//     console.log('users', users);
//     console.log('posta', posts);
//     console.log('albums', albums);
// }

// getData()
async function getData() {
    const [users, posts, albums] = await Promise.all
        (urls.map(async (url) => {
            const resp = await fetch(url);
            return await resp.json()
        }));
    console.log('users', users);
    console.log('posta', posts);
    console.log('albums', albums);

}
getData()


