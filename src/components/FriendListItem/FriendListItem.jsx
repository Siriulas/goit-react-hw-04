import css from './FriendListItem.module.css'
import clsx from 'clsx'

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
    const status = clsx(isOnline ? css.online : css.offline)
    return (
        <div className={css.friendListItem}>
  <img className={css.picture} src={avatar} alt="Avatar" width="48" />
  <p className={css.friend}>{name}</p>
  <p className={status}>{isOnline ? "Online" : "Offline"}</p>
</div>
    )
}