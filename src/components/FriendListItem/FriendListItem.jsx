import css from "./FriendListItem.module.css";

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
    <div className={css.friendListData}>
        <img className={css.friendAvatar} src={avatar} alt="Avatar" width="48" />
        <p className={css.friendName}>{name}</p>
        {isOnline ? <p className={css.friendStatusOnline}>Online</p> : <p className={css.friendStatusOffline}>Offline</p> }
</div>
    );
};

export default FriendListItem;