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
  postAdded: false,
};

const ADD_POST = 'ADD_POST';
export const addPost = {
  type: ADD_POST,
};
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
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
