import ChatWindow from "./pages/ChatWindow";
import ModalNotifications from "./components/ModalNotifications";
import ChangePlatformButton from "./components/ChangePlatformButton";

import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.Main}>
      <ChatWindow />
      <ChangePlatformButton />
      <ModalNotifications />
    </div>
  );
}

export default App;
