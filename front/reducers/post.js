export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: 'supercoder',
      },
      content: '첫 번째 게시글 #해시태그 #익스페리스',
      Images: [
        {
          src: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Cow_%28Fleckvieh_breed%29_Oeschinensee_Slaunger_2009-07-07.jpg',
        },
        {
          src: 'https://coinpan.com/files/attach/images/198/535/178/095/23f39ad4b20be9edd80da6ebb6804fc1.png',
        },
        {
          src: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Cow_%28Fleckvieh_breed%29_Oeschinensee_Slaunger_2009-07-07.jpg',
        },
      ],
      Comments: [
        {
          User: {
            nickname: 'hypercoder',
          },
          content: 'hello world',
        },
      ],
    },
  ],
  imagePaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
};
// ADD_POST___
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
});

const dummyPost = {
  User: {
    id: 1,
    nickname: 'HyperCoder',
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // ADD_POST___
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostError: null,
        addPostDone: false,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        addPostLoading: false,
        addPostError: null,
        addPostDone: true,
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
        addPostDone: false,
      };
    // ADD_COMMENT___
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentError: null,
        addCommentDone: false,
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        addCommentLoading: false,
        addCommentError: null,
        addCommentDone: true,
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentLoading: false,
        addCommentError: action.error,
        addCommentDone: false,
      };
    default:
      return state;
  }
};

export default reducer;
