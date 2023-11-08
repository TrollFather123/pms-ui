/* eslint-disable no-console */
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase/firebase";

export default function useDetectUser() {
  const auth = getAuth(app);
  onAuthStateChanged(auth, async (user) => {
    console.log(user, "user");
    if (user) {
      return true;
    } else {
      return false;
    }
  });
}
