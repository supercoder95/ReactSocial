import { Col, Row } from 'antd';
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
  // 방식 1번
  // const [ref, inView] = useInView();
  const me = useSelector((state) => state.user.me);
  const mainPosts = useSelector((state) => state.post.mainPosts);
  const { retweetError, hasMorePosts, loadPostsLoading } = useSelector(
    (state) => state.post
  );

  // 리트윗 에러 알람
  useEffect(() => {
    if (retweetError) {
      alert(retweetError);
    }
  }, [retweetError]);

  // 방식 1번
  // useEffect(() => {
  //   if (inView && hasMorePosts && !loadPostLoading) {
  //     const lastId = mainPosts[mainPosts.length - 1]?.id;
  //     dispatch({
  //       type: LOAD_POSTS_REQUEST,
  //       lastId,
  //     });
  //   }
  // }, [inView, hasMorePosts, loadPostLoading, mainPosts]);

  // 방식 2번
  useEffect(() => {
    function onScroll() {
      if (
        window.pageYOffset + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 300
      ) {
        if (hasMorePosts && !loadPostsLoading) {
          const lastId = mainPosts[mainPosts.length - 1]?.id;
          dispatch({
            type: LOAD_POSTS_REQUEST,
            lastId,
          });
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePosts, loadPostsLoading, mainPosts]);

  return (
    <AppLayout>
      <Row justify="center">
        <Col xs={24} xl={10}>
          {me && <PostForm />}
        </Col>
      </Row>
      <Row gutter={24} justify="left">
        {mainPosts.map((post) => (
          <Col xs={24} sm={14} md={10} lg={8} xl={8}>
            <PostCard key={post.id} post={post} />
          </Col>
        ))}
      </Row>
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
