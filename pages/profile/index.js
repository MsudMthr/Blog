import { Avatar } from "@mui/material";
import React, { useState } from "react";
import { auth, upload } from "src/firebase";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { useRouter } from "next/router";
const Profile = () => {
  const router = useRouter();
  const [profileImage, setProfileImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const user = auth.currentUser;

  //check user
  if (typeof window !== "undefined" && user === null) router.push("/");

  const changeImageHandler = (e) => {
    if (e.target.files[0]) setProfileImage(e.target.files[0]);
  };

  const updateHandler = () => {
    if (profileImage) {
      upload(profileImage, user, setIsLoading).then((res) => console.log(res));
    }
  };

  return (
    <section>
      <div>
        {/* profile Avatar */}
        <div>
          {user?.photoURL ? (
            <Avatar
              src={user?.photoURL}
              alt={user?.email}
              sx={{
                width: 100,
                height: 100,
                boxShadow: "2px 2px 5px 3px #00000050",
              }}
            />
          ) : (
            <Avatar
              alt={user?.email}
              className={"text-4xl capitalize shadow-lg shadow-red-600"}
              sx={{ width: 100, height: 100, bgcolor: deepOrange[500] }}
            >
              {user?.email[0]}
            </Avatar>
          )}
          <input type="file" name="" id="" onChange={changeImageHandler} />
          <button onClick={updateHandler}>send</button>
        </div>
        {/* username */}
        {user?.displayName && (
          <h1>
            نام کاربری : <span>{user.displayName}</span>
          </h1>
        )}
        <h1>
          ایمیل: <span>{user?.email}</span>
        </h1>
      </div>
      <div></div>
    </section>
  );
};

export default Profile;
