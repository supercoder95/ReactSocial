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
// FOLLOW___
export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';
// UNFOLLOW___
export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

const dummyUser = (data) => ({
  ...data,
  nickname: 'supercoder',
  id: 1,
  posts: [],
  following: [],
  followers: [],
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
  switch (action.type) {
    // LOG_IN

    case LOG_IN_REQUEST:
      console.log('reducer login is running...');
      return {
        ...state,
        logInLoading: true,
        logInError: null,
        logInDone: false,
      };

    case LOG_IN_FAILURE:
      return {
        ...state,
        logInLoading: false,
        logInDone: false,
      };

    case LOG_IN_SUCCESS:
      return {
        ...state,
        logInLoading: false,
        logInDone: true,
        me: dummyUser(action.data),
      };

    // LOG_OUT

    case LOG_OUT_REQUEST:
      console.log('reducer logOut Request');
      return {
        ...state,
        logOutLoading: true,
        logOutError: null,
        logOutDone: false,
      };

    case LOG_OUT_FAILURE:
      console.log('reducer LOG_OUT_FAILURE!!!!');
      return {
        ...state,
        logOutLoading: false,
        logOutError: action.error,
      };

    case LOG_OUT_SUCCESS:
      console.log('reducer logOut success');
      return {
        ...state,
        logOutLoading: false,
        logOutDone: true,
        logOutError: null,
        me: null,
      };

    case SIGN_UP_REQUEST:
      console.log('reducer signUp Request');
      return {
        ...state,
        signUpLoading: true,
        signUpError: null,
        signUpDone: false,
      };

    // SIGN_UP___

    case SIGN_UP_FAILURE:
      console.log('reducer SIGN_UP_FAILURE!!!!');
      return {
        ...state,
        signUpLoading: false,
        signUpError: action.error,
      };

    case SIGN_UP_SUCCESS:
      console.log('reducer signUp success');
      return {
        ...state,
        signUpLoading: false,
        logOutDone: true,
        logOutError: null,
        me: null,
      };
    default:
      return state;
  }
};

export default reducer;
