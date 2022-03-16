import produce from 'immer';

export const initialState = {
  logInLoading: false,
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameError: null,
  me: null,
  signUpData: {},
  loginData: {},
};
// LOG_IN___
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
// LOG_OUT___
export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
// SIGN_UP___
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
// CHANGE_NICKNAME___
export const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
export const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
// FOLLOW___
export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';
// UNFOLLOW___
export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

const dummyUser = (data) => ({
  ...data,
  nickname: 'supercoder',
  id: 1,
  posts: [{ id: 1 }],
  following: [
    { nickname: '울트라코더' },
    { nickname: '자이언트코더' },
    { nickname: '하이퍼코더' },
    { nickname: '메가코더' },
  ],
  followers: [
    { nickname: '울트라코더' },
    { nickname: '자이언트코더' },
    { nickname: '하이퍼코더' },
    { nickname: '메가코더' },
  ],
});

// LOG_IN
export const loginRequestAction = (data) => {
  return {
    type: LOG_IN_REQUEST,
    data,
  };
};

// LOG_OUT

export const logoutRequestAction = (data) => {
  return {
    type: LOG_OUT_REQUEST,
  };
};

// Reducer

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      // LOG_IN

      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInError = null;
        draft.logInDone = false;
        break;
      // console.log('reducer login is running...');
      // return {
      //   ...state,
      //   logInLoading: true,
      //   logInError: null,
      //   logInDone: false,
      // };

      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInDone = false;
        break;
      // return {
      //   ...state,
      //   logInLoading: false,
      //   logInDone: false,
      // };

      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = dummyUser(action.data);
        break;
      // return {
      //   ...state,
      //   logInLoading: false,
      //   logInDone: true,
      //   me: dummyUser(action.data),
      // };

      // LOG_OUT

      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutError = null;
        draft.logOutDone = false;
        break;
      // console.log('reducer logOut Request');
      // return {
      //   ...state,
      //   logOutLoading: true,
      //   logOutError: null,
      //   logOutDone: false,
      // };

      case LOG_OUT_FAILURE:
        draft.logInLoading = false;
        draft.logOutError = action.error;
        break;
      // console.log('reducer LOG_OUT_FAILURE!!!!');
      // return {
      //   ...state,
      //   logOutLoading: false,
      //   logOutError: action.error,
      // };

      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutError = null;
        draft.logOutDone = true;
        draft.me = null;
        break;
      // console.log('reducer logOut success');
      // return {
      //   ...state,
      //   logOutLoading: false,
      //   logOutError: null,
      //   logOutDone: true,
      //   me: null,
      // };

      // SIGN_UP___

      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpError = null;
        draft.signUpDone = false;
        break;
      // console.log('reducer signUp Request');
      // return {
      //   ...state,
      //   signUpLoading: true,
      //   signUpError: null,
      //   signUpDone: false,
      // };

      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;
      // console.log('reducer SIGN_UP_FAILURE!!!!');
      // return {
      //   ...state,
      //   signUpLoading: false,
      //   signUpError: action.error,
      // };

      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpError = null;
        draft.signUpDone = true;
        draft.me = null;
        break;
      // console.log('reducer signUp success');
      // return {
      //   ...state,
      //   signUpLoading: false,
      //   logOutDone: true,
      //   logOutError: null,
      //   me: null,
      // };

      // CHANGE_NICKNAME___

      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameError = null;
        draft.changeNicknameDone = false;
        break;
      // console.log('reducer CHANGE_NICKNAME_REQUEST!!!!');
      // return {
      //   ...state,
      //   changeNicknameLoading: false,
      //   changeNicknameError: null,
      // };

      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        draft.changeNicknameDone = false;
        break;
      // console.log('reducer CHANGE_NICKNAME_FAILURE!!!!');
      // return {
      //   ...state,
      //   changeNicknameLoading: false,
      //   changeNicknameError: action.error,
      // };

      case CHANGE_NICKNAME_SUCCESS:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = null;
        draft.changeNicknameDone = true;
        break;
      // console.log('reducer signUp success');
      // return {
      //   ...state,
      //   changeNicknameLoading: false,
      //   changeNicknameDone: true,
      //   changeNicknameError: null,
      // };

      case ADD_POST_TO_ME:
        draft.me.posts.unshift({ id: action.data });
        break;
      // return {
      //   ...state,
      //   me: {
      //     ...state.me,
      //     posts: [{ id: action.data }, ...state.me.posts],
      //   },
      // };

      case REMOVE_POST_OF_ME:
        draft.me.posts = draft.me.posts.filter((v) => v.id !== action.data);
        break;
      // return {
      //   ...state,
      //   me: {
      //     ...state.me,
      //     posts: state.me.posts.filter((v) => v.id !== action.data),
      //   },
      // };
      default:
        break;
    }
  });
};

export default reducer;
