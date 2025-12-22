import React from 'react';

function PostList({ posts }) {
    const datafile =[
        {
        "id": 1,
        "title": "Hello World",
        "content": "Try Reactjs is awesome. Can't wait to learn more",
        "date": "12-04-2017",
        "slug": "hello-world"
    },
    {
        "id": 2,
        "title": "Setup React",
        "content": "Setting up react is easy. Learn more about it!",
        "date": "1-28-2018",
        "slug": "setup-react"
    }
]
    
  return (
    <div>
        <h1>this is a title</h1>
        {datafile.map((post) => (
            <div key={post.id} >
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <small>{post.date}</small>
            </div>
        ))}
    </div>
  );
}
export default PostList;