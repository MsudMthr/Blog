import { useEffect, useState } from "react";
import { getCookie } from "src/helper/coockies";

const useAuth = () => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const userToken = getCookie("userToken");
    if (userToken) {
      setToken(userToken);
    }
  }, []);
  return { token, setToken };
};
export default useAuth;
