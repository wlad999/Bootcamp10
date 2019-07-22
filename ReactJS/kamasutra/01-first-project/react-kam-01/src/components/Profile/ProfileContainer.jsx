import React from 'react';
import Profile from './Profile';
import * as Axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../redux/profile-Reducer';

class ProfileContainer extends React.Component {
  componentDidMount() {
    Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(
      response => {
        debugger;
        this.props.setUserProfile(response.data);
      },
    );
  }
  render() {
    return <Profile {...this.props} propfile={this.props.profile} />;
  }
}
let mapStateToProps = state => ({ profile: state.profilePage.profile });

export default connect(
  mapStateToProps,
  { setUserProfile },
)(ProfileContainer);
