import React from 'react';
import PropTypes from 'prop-types';

const HomeWork1 = ({ name, tag, location, avatar, stats }) => (
  <div className="profile">
    <div className="description">
      <img src={avatar} alt="user avatar" className="avatar" />
      <p className="name">{name}</p>
      <p className="tag">{tag}a</p>
      <p className="location">{location}</p>
    </div>

    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{stats.followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{stats.views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
);
HomeWork1.propTypes = {
  name: PropTypes.shape.isRequired,
  tag: PropTypes.shape.isRequired,
  location: PropTypes.shape.isRequired,
  avatar: PropTypes.shape.isRequired,
  stats: PropTypes.shape.isRequired,
};

export default HomeWork1;
