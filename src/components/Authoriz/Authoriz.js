import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import Divider from "@mui/material/Divider";
import "./Authoriz.scss";

const Authoriz = () => {
  const [user, setUser] = useState({});

  let handleCallbackResponse = (response) => {
    console.log(response.credential);

    let userObject = jwt_decode(response.credential);

    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  };

  let handleLogOut = () => {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  };

  useEffect(() => {
    /*global google */
    google.accounts.id.initialize({
      client_id:
        "424142064753-km2rvn2pamu328ms3o174sgu5mgbr8su.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "filled_blue",
      size: "medium",
      text: "signin",
      shape: "rectangular",
    });

    google.accounts.id.prompt();
  }, []);

  return (
    <>
      <div className="Google">
        <div id="signInDiv"> </div>

        <div>
          {user && (
            <div className="Google_account">
              <img src={user.picture}></img>
              <div className="Google_User-name">{user.name}</div>
            </div>
          )}{" "}
        </div>
      </div>
      <Divider sx={{ my: 0.5 }} />
      <div className="Google__wrapper__sign-out">
        {Object.keys(user).length !== 0 && (
          <div className="Google_sign-out" onClick={handleLogOut}>
            Sign Out
          </div>
        )}
      </div>
    </>
  );
};

export default Authoriz;
