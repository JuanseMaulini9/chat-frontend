import { useState } from "react";
import toast from "react-hot-toast";
import { SignUpsInputs } from "../types";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const signup = async ({
    username,
    fullname,
    password,
    confirmPassword,
  }: SignUpsInputs) => {
    const succes: boolean = handleInputsErrors({
      username,
      fullname,
      password,
      confirmPassword,
    });
    if (!succes) return;
    setLoading(true);
    try {
      const res = await fetch(`${backendUrl}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          fullname,
          password,
          confirmPassword,
        }),
        credentials: "include",
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

function handleInputsErrors({
  username,
  fullname,
  password,
  confirmPassword,
}: SignUpsInputs) {
  if (!fullname || !username || !password || !confirmPassword) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
}
