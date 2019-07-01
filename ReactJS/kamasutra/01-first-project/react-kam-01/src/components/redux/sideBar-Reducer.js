let initialState = {
  friends: [
    {
      id: 1,
      name: 'Stive',
      ava:
        'https://st2.depositphotos.com/1007566/12301/v/950/depositphotos_123013306-stock-illustration-avatar-man-cartoon.jpg',
    },
    {
      id: 2,
      name: 'Robert',
      ava:
        'https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg',
    },
    {
      id: 3,
      name: 'Jack',
      ava:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe5vdk8h6BZ-Hw4Hx6cPrW0FSSTh9U05ReaZovHbukvzZ6zICo',
    },
  ],
};

const sideBarReducer = (state = initialState, action) => {
  return state;
};
export default sideBarReducer;
