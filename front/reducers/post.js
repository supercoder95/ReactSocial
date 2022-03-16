import shortId from 'shortid';
import produce from 'immer';

export const initialState = {
  mainPosts: [
    {
      id: shortId.generate(),
      User: {
        id: shortId.generate(),
        nickname: 'supercoder',
      },
      content: '첫 번째 게시글 #해시태그 #익스페리스',
      Images: [
        {
          id: shortId.generate(),
          src: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Cow_%28Fleckvieh_breed%29_Oeschinensee_Slaunger_2009-07-07.jpg',
        },
        {
          id: shortId.generate(),
          src: 'https://coinpan.com/files/attach/images/198/535/178/095/23f39ad4b20be9edd80da6ebb6804fc1.png',
        },
        {
          id: shortId.generate(),
          src: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Cow_%28Fleckvieh_breed%29_Oeschinensee_Slaunger_2009-07-07.jpg',
        },
      ],
      Comments: [
        {
          id: shortId.generate(),
          User: {
            id: shortId.generate(),
            nickname: 'hypercoder',
          },
          content: 'hello world',
        },
        {
          id: shortId.generate(),
          User: {
            id: shortId.generate(),
            nickname: 'ultracoder',
          },
          content: 'bye world',
        },
      ],
    },
  ],
  imagePaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
};
// ADD_POST___
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

// Input
export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
});

const dummyPost = (data) => ({
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: 'supercoder',
  },
  Images: [],
  Comments: [],
});

const dummyComment = (data) => ({
  id: shortId.generate(),
  content: data,
  User: {
    id: 1,
    nickname: 'supercoder',
  },
});
// reducer -> 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수(불변성은 지키면서)
const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      // ADD_POST___
      case ADD_POST_REQUEST:
        // added immer
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      // return {
      //   ...state,
      //   addPostLoading: true,
      //   addPostError: null,
      //   addPostDone: false,
      // };
      case ADD_POST_SUCCESS:
        draft.mainPosts.unshift(dummyPost(action.data));
        draft.addPostLoading = false;
        draft.addCommentDone = true;
        draft.addCommentError = null;
        break;
      // return {
      //   ...state,
      //   mainPosts: [dummyPost(action.data), ...state.mainPosts],
      //   addPostLoading: false,
      //   addPostError: null,
      //   addPostDone: true,
      // };
      case ADD_POST_FAILURE:
        draft.addCommentLoading = false;
        draft.addPostDone = false;
        draft.addPostError = action.error;
        break;
      // return {
      //   ...state,
      //   addPostLoading: false,
      //   addPostError: action.error,
      //   addPostDone: false,
      // };

      // REMOVE_POST___
      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostError = null;
        draft.removePostDone = false;
        break;
      // return {
      //   ...state,
      //   removePostLoading: true,
      //   removePostError: null,
      //   removePostDone: false,
      // };
      case REMOVE_POST_SUCCESS:
        draft.mainPosts = state.mainPosts.filter((v) => v.id !== action.data);
        draft.removePostLoading = false;
        draft.removePostError = null;
        draft.removePostDone = true;
        break;
      // return {
      //   ...state,
      //   mainPosts: state.mainPosts.filter((v) => v.id !== action.data),
      //   removePostLoading: false,
      //   removePostError: null,
      //   removePostDone: true,
      // };
      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        draft.removePostDone = false;
        break;
      // return {
      //   ...state,
      //   removePostLoading: false,
      //   removePostError: action.error,
      //   removePostDone: false,
      // };

      // ADD_COMMENT___
      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentError = null;
        draft.addCommentDone = false;
        break;
      // return {
      //   ...state,
      //   addCommentLoading: true,
      //   addCommentError: null,
      //   addCommentDone: false,
      // };
      case ADD_COMMENT_SUCCESS: {
        draft.
      //   const postIndex = state.mainPosts.findIndex(
      //     (v) => v.id === action.data.postId
      //   );
      //   const post = { ...state.mainPosts[postIndex] };
      //   const Comments = [dummyComment(action.data.content), ...post.Comments];
      //   post.Comments = post.Comments.slice();
      //   const mainPosts = [...state.mainPosts];
      //   mainPosts[postIndex] = { ...post, Comments };
      //   return {
      //     ...state,
      //     mainPosts,
      //     addCommentLoading: false,
      //     addCommentError: null,
      //     addCommentDone: true,
      //   };
      // }
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
  });
};

export default reducer;
