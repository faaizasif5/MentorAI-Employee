import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/firebase";

export default function isLoggedIn() {
  const [user] = useAuthState(auth);
  if (user) {
    return true;
  }
  return false;
}
