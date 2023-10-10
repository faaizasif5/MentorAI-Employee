import { CircularProgress } from "@mui/material";
import { setUser } from "../redux/reducers/AuthReducer";
import { clearErrors } from "../redux/reducers/formErrorsSlice";

const signin = (user, loading, navigate, dispatch) => {
  if (loading) {
    <CircularProgress />;
    return;
  }
  if (user) {
    dispatch(clearErrors());
    dispatch(
      setUser({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        photo: user.photoURL,
        accessToken: user.accessToken,
      }),
    );
    navigate("/dashboard/home");
  }
};
export default signin;
