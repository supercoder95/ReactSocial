import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';
// import { useInView } from 'react-intersection-observer';
import AppLayout from '../components/AppLayout';
import PostCard from '../components/postCard';
import PostForm from '../components/postForm';

import { LOAD_POSTS_REQUEST } from '../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';

import wrapper from '../store/configureStore';

const Home = () => {
  const dispatch = useDispatch();
  // const [ref, inView] = useInView();
  const { me } = useSelector((state) => state.user);
  const { mainPosts, retweetError } = useSelector((state) => state.post);

  // 리트윗 에러 알람
  useEffect(() => {
    if (retweetError) {
      alert(retweetError);
    }
  }, [retweetError]);

  // useEffect(() => {
  //   dispatch({
  //     type: LOAD_MY_INFO_REQUEST,
  //   });
  //   dispatch({
  //     type: LOAD_POSTS_REQUEST,
  //   });
  // }, []);

  // useEffect(() => {
  //   if (inView && hasMorePosts && !loadPostLoading) {
  //     const lastId = mainPosts[mainPosts.length - 1]?.id;
  //     dispatch({
  //       type: LOAD_POSTS_REQUEST,
  //       lastId,
  //     });
  //   }
  // }, [inView, hasMorePosts, loadPostLoading, mainPosts]);

  return (
    <AppLayout>
      {me && <PostForm />}
      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      {/* <div ref={hasMorePosts && !loadPostLoading ? ref : undefined} /> */}
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch({
      type: LOAD_POSTS_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default Home;
