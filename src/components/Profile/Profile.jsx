import css from './Profile.module.css'

export default function Profile({ name, tag, location, image, stats }) {
  return (
  <div className={css.profileCard}>

      <div className={css.userProfile}>
  
        <img className={css.profileImg} src={image} alt="User avatar" />
        <p className={css.profilName}>{name}</p>
        <p className={css.profilTag}>@{tag}</p>
        <p className={css.profilLocation}>{location}</p>
      </div>
      
      <ul className={css.profileRecord}>
        <li className={css.record}>
          <span>Followers</span>
          <span className={css.recordValue}>{stats.followers}</span>
        </li>   
        <li className={css.record}>
          <span>Views</span>
          <span className={css.recordValue}>{stats.views}</span>
        </li>        
        <li className={css.record}>
          <span>Likes</span>
          <span className={css.recordValue}>{stats.likes}</span>
        </li>
      </ul>

    </div>)
}