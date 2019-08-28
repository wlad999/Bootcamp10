import React from 'react';
import Profile from './Profile';
// import * as Axios from 'axios';
import { connect } from 'react-redux';
import {
  // setUserProfile,
  getUserProfile,
  getStatus,
  updateStatus,
} from '../redux/profile-Reducer';
import { withRouter } from 'react-router-dom';
// import { usersAPI } from '../../api/api';
// import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.autorizedUserId;
      if (!userId) {
        this.props.history.push('/login');
      }
    }
    this.props.getUserProfile(userId);

    this.props.getStatus(userId);

    // usersAPI.getProfile(userId).then(response => {
    //   this.props.setUserProfile(response.data);
    // });

    // Axios.get(
    //   `https://social-network.samuraijs.com/api/1.0/profile/` + userId,
    // )
  }
  render() {
    // if (!this.props.isAuth) {
    //   return <Redirect to={'/login'} />;
    // }
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

// let AuthRedirectContainer = props => {
//   if (!this.props.isAuth) {
//     return <Redirect to={'/login'} />;
//   }
//   return <ProfileContainer {...props} />;
// };
// МЕняем логику AuthRedirectContainer на  вызов withAuthRedirect
// let AuthRedirectContainer = withAuthRedirect(ProfileContainer);
// ---------Эту логику запихнули в withAuthRedirect.js
// let mapStateToPropsForRedirect = state => ({
//   isAuth: state.auth.isAuth,
// });

// AuthRedirectContainer = connect(mapStateToPropsForRedirect)(
//   AuthRedirectContainer,
// );
// -----------------------------
let mapStateToProps = state => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  autorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});
// let mapStateToProps = state => ({
//   profile: state.profilePage.profile,
//   isAuth: state.auth.isAuth,
// });

// let WithUrlDataContainerComponent = withRouter(AuthRedirectContainer);
// let WithUrlDataContainerComponent = withRouter(ProfileContainer);

// export default connect(
//   mapStateToProps,
//   {
//     // setUserProfile,
//     getUserProfile,
//   },
// )(WithUrlDataContainerComponent);

export default compose(
  connect(
    mapStateToProps,
    { getUserProfile, getStatus, updateStatus },
  ),
  withRouter,
  // withAuthRedirect,
)(ProfileContainer);
