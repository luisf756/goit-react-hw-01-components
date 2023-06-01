
import PropTypes from "prop-types";
import style from './Porfile.module.css'

export const Porfile = ({username, tag, location, avatar, stats}) => {
  return (
    <div class={style.profile}>
      <div className={style.descripcion}>
        <img
          src={avatar}//https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt={tag}
          className={style.avatar}
        />
        <p className={style.name}>{username}</p>
        <p className={style.tag}> @{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li className={style.stats_item}>
          <span className={style.label}>Followers</span>
          <span className={style.quantity}>{stats.followers}</span>
        </li>
        <li className={style.stats_item}>
          <span className={style.label}>Views</span>
          <span className={style.quantity}>{stats.views}</span>
        </li>
        <li className={style.stats_item}>
          <span className={style.label}>Likes</span>
          <span className={style.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};


Porfile.propTypes = {
  username: PropTypes.string.isRequired,
  tag:PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
