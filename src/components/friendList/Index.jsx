import style from './FriendList.module.css';

// export const FriendList = ({ friends }) => {

//   return friends.map(friend => (
//     <li className={style.item} key={friend.id}>
//       <span className={friend.isOnline ? style.status__true : style.status__false}>{friend.isOnline}</span>
//       <img className={style.avatar} src={friend.avatar} alt="User avatar" width="48" />
//       <p className={style.name}> {friend.name}</p>
//     </li>
//   ));
// };

export const FriendList = ({ friends }) => {
  return (
    
    <ul className={style.friendlist}>
      <Friend friends={friends} />
    </ul>
  );
};

const Friend = ({ friends }) => {
  return friends.map(friend => (
    <li className={style.item} key={friend.id}>
      <span
        className={friend.isOnline ? style.status__true : style.status__false}
      >
        {friend.isOnline}
      </span>
      <img
        className={style.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={style.name}> {friend.name}</p>
    </li>
  ));
};
