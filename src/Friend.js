import Button from "./Button";

function Friend({ friend, selectedFriend, onSetFriends, onSelectedFriend }) {
  const isSelected = friend.id === selectedFriend?.id;

  function handleDeleteFriend(id, name) {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${name} from your Friends List?`
    );

    confirmDelete &&
      onSetFriends((friends) => friends.filter((friend) => friend.id !== id));
  }

  function handleSelection(friend) {
    onSelectedFriend((currentFriend) =>
      currentFriend?.id === friend.id ? null : friend
    );
  }

  return (
    <li className={isSelected ? "selected" : ""}>
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

      <Button onClick={() => handleSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
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
