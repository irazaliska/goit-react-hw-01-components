import PropTypes from 'prop-types';
import { List, Item, IsOnline, IsOffline, Avatar, Name } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <Item key={id}>
           {isOnline ? <IsOnline /> : <IsOffline />}
          <Avatar src={avatar} alt="User avatar" />
          <Name>{name}</Name>
        </Item>
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
