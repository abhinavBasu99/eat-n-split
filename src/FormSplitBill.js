import { useState } from "react";
import Button from "./Button";

function FormSplitBill({ selectedFriend, setFriends, setSelectedFriend }) {
  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const [billPayer, setBillPayer] = useState("user");
  const friendExpense = bill - myExpense;

  function handleSplitBill(e) {
    e.preventDefault();

    if (!bill || !myExpense) {
      return;
    }

    let balance;

    if (billPayer === "user") {
      balance = selectedFriend.balance + friendExpense;
    }

    if (billPayer === "friend") {
      balance = selectedFriend.balance - myExpense;
    }

    const newFriendObject = { ...selectedFriend, balance: balance };

    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id ? newFriendObject : friend
      )
    );

    setSelectedFriend(null);
  }

  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🕴️Your expense</label>
      <input
        type="text"
        value={myExpense}
        onChange={(e) =>
          setMyExpense(
            Number(e.target.value) > bill ? myExpense : Number(e.target.value)
          )
        }
      />

      <label>🧑‍🤝‍🧑 {selectedFriend.name}'s expense</label>
      <input type="text" value={friendExpense} disabled />

      <label>🤑 Who is paying the bill?</label>
      <select value={billPayer} onChange={(e) => setBillPayer(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button onClick={handleSplitBill}>Split Bill</Button>
    </form>
  );
}

export default FormSplitBill;
