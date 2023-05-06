import React, { useRef, useState } from "react";
import Counter from "./components/Counter.jsx";
import ClassCounter from "./components/ClassCounter.jsx";
import './styles/App.css';
import PostItem from "./components/PostItem.jsx";
import PostList from "./components/PostList.jsx";
import MyButton from "./components/UI/button/MyButton.jsx";
import MyInput from "./components/UI/input/MyInput.jsx";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'React', body: 'Description'},
    {id: 3, title: 'TypeScript', body: 'Description'},
  ])

  const [post, setPost] = useState({title: '', body: ''})
  

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, {...post, id: Date.now()}]);
    setPost({title: '', body: ''});
  }

  return (
      <div className="App">
        <form>
          {/* Управляемы компонент */}
          <MyInput
            value={post.title}
            onChange={e => setPost({...post, title: e.target.value})}
            type="text" 
            placeholder="Название поста"
          />

          {/* Неконтролируемый компонент */}
          <MyInput
            value={post.body}
            onChange={e => setPost({...post, body: e.target.value})}
            type="text" 
            placeholder="Описание поста"
          />
          <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
        <PostList posts={posts} title={'Список постов 1'}/>
      </div>
  )
}

export default App
