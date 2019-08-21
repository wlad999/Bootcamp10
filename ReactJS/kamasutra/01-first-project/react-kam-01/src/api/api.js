import * as Axios from 'axios';
// const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';
const instance = Axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'eb6636a2-1e1d-4d06-925a-90fa722557fb',
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count = ${pageSize}`)
      .then(response => response.data);
  },
  unfollowUser(userId) {
    return instance.delete(`follow/${userId}`).then(response => response.data);
  },
  followUser(userId) {
    return instance.post(`follow/${userId}`).then(response => response.data);
  },
  getProfile(userId) {
    console.warn('Obsolete method. Please profileAPI object');
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },
  updataStatus(status) {
    return instance.put(`profile/status/`, { status: status });
  },
};
export const authAPI = {
  me() {
    return instance.get(`auth/me`);
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
