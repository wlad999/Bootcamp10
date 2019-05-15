import React from 'react';

const HomeWork1 = ({ name, tag, location, avatar, stats }) => (
  <div class="profile">
    <div class="description">
      <img src={avatar} alt="user avatar" class="avatar" />
      <p class="name">{name}</p>
      <p class="tag">{tag}a</p>
      <p class="location">{location}</p>
    </div>

    <ul class="stats">
      <li>
        <span class="label">Followers</span>
        <span class="quantity">{stats.followers}</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">{stats.views}</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
);

export default HomeWork1;
