import { useState } from "react";
import Button from "./Button";

function FormAddFriend({ onSetFriends, onShowAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=");

  function handleAddFriend(e) {
    e.preventDefault();

    if (!name || !image) {
      return;
    }

    const id = Date.now();

    const newFriend = {
      id: id,
      name: name,
      image: image + id,
      balance: 0,
    };

    onSetFriends((friends) => [...friends, newFriend]);
    onShowAddFriend();
  }

  return (
    <form className="form-add-friend">
      <label>🧑‍🤝‍🧑Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>📷 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button onClick={handleAddFriend}>Add</Button>
    </form>
  );
}

export default FormAddFriend;
