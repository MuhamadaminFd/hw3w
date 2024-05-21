import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, selectPost } from './postsSlice';
import './style.css';

const Comp = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const selectedPostId = useSelector((state) => state.posts.selectedPostId);
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  const handleItemClick = (id) => {
    dispatch(selectPost(id));
  };

  return (
    <div className="container">
      {status === 'loading' && <p>Загрузка...</p>}
      {status === 'failed' && <p>Ошибка: {error}</p>}
      {status === 'succeeded' && (
        <ul>
          {posts.map((item) => (
            <li key={item.id} onClick={() => handleItemClick(item.id)}>
              {item.title}
              {selectedPostId === item.id && (
                <div className="details">
                  <p>{item.body}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Comp;
