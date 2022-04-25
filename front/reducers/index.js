import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import user from './user';
import post from './post';

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
