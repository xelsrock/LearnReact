import React, { useRef, useState } from "react";
import './styles/App.css';
import PostList from "./components/PostList.jsx";
import PostForm from "./components/PostForm.jsx";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description1'},
    {id: 2, title: 'React', body: 'Description2'},
    {id: 3, title: 'TypeScript', body: 'Description3'},
  ])
  
  const [selectedSort, setSelectedSort] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
      <div className="App">
        <PostForm create={createPost}/>
        <hr style={{margin: '15px 0'}}/>
        <div>
          <MySelect
            value={selectedSort}
            onChange={sortPosts}
            defaultValue='Сортировка'
            options={[
              {value: 'title', name: 'По названию'},
              {value: 'body', name: 'По описанию'},
            ]}
          />
        </div>
        {posts.length !== 0
            ? 
            <PostList remove={removePost} posts={posts} title={'Список постов 1'}/>
            : 
            <h1 style={{textAlign: 'center'}}>
              Посты не были найдены
            </h1>
        }
      </div>
  )
}

export default App
