import * as Axios from 'axios';
// const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';
const instance = Axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '635d4a98-5c9c-4ce7-b29e-636f275b6bb7',
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count = ${pageSize}`)
      .then(response => response.data);
  },
  unfollowUser(u) {
    return instance.delete(`follow/${u.id}`).then(response => response.data);
  },
  followUser(u) {
    return instance.post(`follow/${u.id}`).then(response => response.data);
  },
};

// export const getUsers = (currentPage = 1, pageSize = 10) => {
//   return instance
//     .get(baseUrl + `users?page=${currentPage}&count = ${pageSize}`)
//     .then(response => response.data);
// };

// Axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
//   withCredentials: true,
//   headers: {
//     'API-KEY': '635d4a98-5c9c-4ce7-b29e-636f275b6bb7',
//   },
// });

// Axios.post(
//   `https://social-network.samuraijs.com/api/1.0/follow/${
//     u.id
//   }`,
//   {},
//   {
//     withCredentials: true,
//     headers: {
//       'API-KEY': '635d4a98-5c9c-4ce7-b29e-636f275b6bb7',
//     },
//   },
