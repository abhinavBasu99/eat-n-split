import Button from "./Button";

function Friend({ friend, onSetFriends }) {
  function handleDeleteFriend(id, name) {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${name} from your Friends List?`
    );

    confirmDelete &&
      onSetFriends((friends) => friends.filter((friend) => friend.id !== id));
  }

  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button>Select</Button>
      <span
        className="delete"
        onClick={() => handleDeleteFriend(friend.id, friend.name)}
      >
        X
      </span>
    </li>
  );
}

export default Friend;
