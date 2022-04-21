// import { HYDRATE } from 'next-redux-wrapper';
// import user from './user';
// import post from './post';
// import { combineReducers } from 'redux';

// const initialState = {
//   user: {},
//   post: {},
// };

// const rootReducer = combineReducers({
//   index: (state = {}, action) => {
//     switch (action.type) {
//       case HYDRATE:
//         return {
//           ...state,
//           ...action.payload,
//         };
//       default:
//         return state;
//     }
//   },
//   user,
//   post,
// });

// export default rootReducer;

import user, { LOAD_MY_INFO_REQUEST } from './user';
import post, { LOAD_POSTS_REQUEST } from './post';
import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import { ConfigContext } from 'antd/lib/config-provider';
import { END } from 'redux-saga';
import wrapper from '../store/configureStore';

// 조금 더 복잡한 확장 가능한 형태, HYDRATE를 추가 가능함
const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log('HYDRATE', action);
      return action.payload;
    default: {
      const combinedReducers = combineReducers({
        user,
        post,
      });
      return combinedReducers(state, action);
    }
  }
};

export default rootReducer;
