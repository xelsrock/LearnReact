import React, { useEffect, useMemo, useRef, useState } from "react";
import './styles/App.css';
import PostList from "./components/PostList.jsx";
import PostForm from "./components/PostForm.jsx";
import PostFilter from "./components/PostFilter.jsx";
import MyModal from "./components/UI/MyModal/MyModal.jsx";
import MyButton from "./components/UI/button/MyButton";
import { usePosts, useSortedPosts } from "./hooks/usePosts.js";
import PostService from "./API/PostService.js";
import Loader from "./components/UI/Loader/Loader";
import { useFetching } from "./hooks/useFetching";
import { getPagesArray, getPageCount } from "./utils/pages";
import Pagination from "./components/UI/pagination/Pagination";

function App() {

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
      setPosts(response.data);
      const totalCount = response.headers['x-total-count'];
      setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
  }

  return (
      <div className="App">
        <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
          Создать пост
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={createPost}/>
        </MyModal>
        <hr style={{margin: '15px 0'}}/>
        <PostFilter 
          filter={filter} 
          setFilter={setFilter}
        />
        {postError && 
          <h1>Произошла ошибка ${postError}</h1>
        }
        {isPostsLoading
          ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
          : <PostList remove={removePost} posts={sortedAndSearchPosts} title={'Список постов 1'}/>
        }
        <Pagination
          page={page}
          changePage={changePage}
          totalPages={totalPages}
        />
        
      </div>
  )
}

export default App
