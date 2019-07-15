import React from 'react';
import styles from './users.module.css';
import * as Axios from 'axios';
import userPhoto from '../../assets/images/users.png';

let Users = props => {
  if (props.users.length === 0) {
    Axios.get('https://social-network.samuraijs.com/api/1.0/users').then(
      response => {
        // debugger;
        props.setUsers(response.data.items);
      },
    );
    // props.setUsers([
    //   {
    //     id: 1,
    //     photoUrl:
    //       'https://steamuserimages-a.akamaihd.net/ugc/963095678570779142/678F6DDE61B17A1AA32739F4D31B128B5B5BF6D1/',
    //     followed: false,
    //     fullName: 'Dmitry',
    //     status: 'i am a Boss',
    //     location: { city: 'Minsk', country: 'Belarus' },
    //   },
    //   {
    //     id: 2,
    //     photoUrl:
    //       'https://www.meme-arsenal.com/memes/12be6fef3f4ab64e65e4f69a19b9f64d.jpg',
    //     followed: true,
    //     fullName: 'Alex',
    //     status: 'i am a Boss too',
    //     location: { city: 'Moscow', country: 'Russia' },
    //   },
    //   {
    //     id: 3,
    //     photoUrl:
    //       'https://steamuserimages-a.akamaihd.net/ugc/933814008881152016/838D9568CF06E89568DD6D8D58A61291110336C5/',
    //     followed: false,
    //     fullName: 'Andrew',
    //     status: 'i am a more Boss',
    //     location: { city: 'Kiev', country: 'Ukraine' },
    //   },
    // ]);
  }

  return (
    <div>
      {props.users.map(u => (
        <div key={u.id}>
          <span>
            <div>
              <img
                src={u.photos.small != null ? u.photos.small : userPhoto}
                alt=""
                className={styles.userPhoto}
              />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{'u.location.counrty'}</div>
              <div>{'u.location.city'}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
