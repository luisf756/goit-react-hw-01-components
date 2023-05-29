import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Porfile } from 'components/porfile/Index';
import './index.css';
// import {user} from './data/user.json';
import user from './data/user.json';

//console.log(user.location)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Porfile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <App />
  </React.StrictMode>
);
// tag, location, avatar, avatar, stats