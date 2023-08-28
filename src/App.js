import { useState } from "react";
import initialFriends from "./initialFriends";
import FriendsList from "./FriendsList";
import FormAddFriend from "./FormAddFriend";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onSetFriends={setFriends}
          onSelectedFriend={setSelectedFriend}
        />

        {showAddFriend && (
          <FormAddFriend
            onSetFriends={setFriends}
            onShowAddFriend={handleShowAddFriend}
          />
        )}

        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>

      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          setFriends={setFriends}
          setSelectedFriend={setSelectedFriend}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}

export default App;
