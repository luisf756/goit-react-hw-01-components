// import { FriendList } from "./friendList/Index";
import { Porfile } from './porfile/Porfile';
import {Statistics} from "./statistics/Statistics";
import data from 'data/data.json';
import friends from 'data/friends.json'
import { FriendList } from 'components/friendList/Index'
import { TransactionHistory } from 'components/transactionHistory/Index';
import transactions from 'data/transactions.json'

const styleTest = {
  //   width:'100%',
  height: '100%',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  color: '#010101',
};

const section = {
  width: '100vw',
  height: '40vh',
  margin: ' 0 auto',
  marginBottom: '100px',
  paddingRight: '100px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};
const content = {
  width: '100%',
  height: 'auto',
  margin: '0 auto',
  top: '0%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
};

export const App = ({ user }) => {
  return (
    
    <div style={styleTest}>
      {/* React homework template */}
      <div style={content}>
        <section style={section}>
          <Porfile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        </section>
        <section style={section}>
        <Statistics stats={data} />
        </section>
        <section style={section}>
          <h2>Friend list</h2>
          <FriendList friends={friends} />
        </section>

        <section>
          <TransactionHistory items={transactions} />
        </section>
      </div>
    </div>
    
  );
};
