import { useEffect } from "react";
import Chat from "./container/chat/Chat";
import Detail from "./container/detail/Detail";
import List from "./container/list/List";
import Login from "./container/login/Login";
import Notification from "./container/notification/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";
import { useChatStore } from "./lib/chatStore";

const App = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  const { chatId } = useChatStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("User ID:", user.uid);
        fetchUserInfo(user?.uid);
      } else {
        fetchUserInfo(null);
      }
    });
    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  console.log("Current User:", currentUser);

  if (isLoading) return <div className="loading">Loading...</div>;

  return (
    <div className="container">
      {currentUser ? (
        <>
          <List />
          {chatId&&<Chat />}
          {chatId&&<Detail />}
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
};

export default App;
