import React, { useMemo, useRef, useState } from "react";
import './styles/App.css';
import PostList from "./components/PostList.jsx";
import PostForm from "./components/PostForm.jsx";
import MySelect from "./components/UI/select/MySelect.jsx";
import MyInput from "./components/UI/input/MyInput.jsx";
import PostFilter from "./components/PostFilter.jsx";
import MyModal from "./components/UI/MyModal/MyModal.jsx";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'React', body: 'Description1'},
    {id: 2, title: 'JavaScript', body: 'Description2'},
    {id: 3, title: 'TypeScript', body: 'Description3'},
  ])
  
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);
  

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
      <div className="App">
        <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
          Создать пользователя
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={createPost}/>
        </MyModal>
        <hr style={{margin: '15px 0'}}/>
        <PostFilter 
          filter={filter} 
          setFilter={setFilter}
        />
        <PostList remove={removePost} posts={sortedAndSearchPosts} title={'Список постов 1'}/>
      </div>
  )
}

export default App
