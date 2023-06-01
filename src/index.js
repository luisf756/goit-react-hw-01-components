import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import { Porfile } from 'components/porfile/Porfile';
// import {Statistics} from 'components/statistics/Index'
// import { FriendList } from 'components/friendList/Index';
// import { TransactionHistory } from 'components/transactionHistory/Index';
import './index.css';

import user from './data/user.json';
// import friends from './data/friends.json'
// import transactions from './data/transactions.json'

//console.log(user.location)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      {/* <Statistics title="Upload stats" stats={data} /> */}
    {/* <Statistics stats={data} /> */}
    <section>

    </section>
    <section>{/* <FriendList friends={friends} />; */}</section>
    <section>{/* <TransactionHistory items={transactions} />; */}</section>
    

    
    
    <App user={user} />
  </React.StrictMode>
);
// tag, location, avatar, avatar, stats
