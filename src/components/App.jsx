// import { FriendList } from "./friendList/Index";
import { Porfile } from './porfile/Porfile';
import {Statistics} from "./statistics/Index";
import data from 'data/data.json';

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
      </div>
    </div>
    
  );
};
