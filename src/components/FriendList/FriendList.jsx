import PropTypes from 'prop-types';
import {
  List,
  Item,
  IsOnline,
  IsOffline,
  Avatar,
  Name,
} from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <Item key={id}>
          {isOnline ? (<IsOnline></IsOnline>) : (<IsOffline></IsOffline>)}
          <Avatar src={avatar} alt="User avatar" />
          <Name>{name}</Name>
        </Item>
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;