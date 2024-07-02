import { Profile } from "./components/Profile/Profile";
import userData from "./data/userData.json";
import { FriendList } from "./components/FriendList/FriendList";
import friends from "./data/friends.json";
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";
import transactions from "./data/transactions.json";
import { Button } from "./components/Button/Button";
import { ClickCounter } from "./components/ClickCounter/ClickCounter";

export default function App() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />

      <Button message="Playing music!">Play some music</Button>
      <Button message="Uploading your data!">Upload data</Button>

      <ClickCounter />
      <ClickCounter />
    </>
  );
}
