import Friend from "./Friend";

function FriendsList({
  friends,
  selectedFriend,
  onSetFriends,
  onSelectedFriend,
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          selectedFriend={selectedFriend}
          onSetFriends={onSetFriends}
          onSelectedFriend={onSelectedFriend}
          key={friend.id}
        />
      ))}
    </ul>
  );
}

export default FriendsList;
