import FriendListItem from '../FriendListItem/FriendListItem'
import css from './FriendList.module.css'

export default function FriendList({friends}) {
    return (
       <ul className={css.friendsList}>
            {friends.map(item => {
                return (
                    <li key={item.id}>
                        <FriendListItem friend={item} />
                    </li>
                );
    })}
</ul> 
    )
}