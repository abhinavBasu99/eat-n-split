import Friend from "./Friend";

function FriendsList({ friends, onSetFriends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} onSetFriends={onSetFriends} key={friend.id} />
      ))}
    </ul>
  );
}

export default FriendsList;
