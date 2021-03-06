import React from 'react';
import Header from './Header';
// import * as Axios from 'axios';
import { connect } from 'react-redux';
import {
  // setAuthUserData
  // getAuthUserData,
  logout,
} from '../redux/auth-Reducer.js';
// import { authAPI } from '../../api/api';

class HeaderContainer extends React.Component {
  // componentDidMount() {
  //   this.props.getAuthUserData();
  // }
  // --------------------------------------------------
  // Axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
  //   withCredentials: true,
  // })
  // --------------------------// -----------------------
  // authAPI.me().then(response => {
  //   if (response.data.resultCode === 0) {
  //     let {
  //       id,
  //       login,
  //       email,
  //     } = response.data.data; /*Деструктуризируем нужные свойства в переменные */
  //     this.props.setAuthUserData(id, email, login);
  //   }
  // });

  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
export default connect(
  mapStateToProps,
  {
    // getAuthUserData,
    logout,
  },
)(HeaderContainer);
