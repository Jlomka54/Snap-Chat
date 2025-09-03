import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/features/auth/operations";
import { selectIsAuth, selectStatus } from "../redux/features/auth/selectors";
import { toast } from "react-toastify";

export const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = () => {
    setPassword("");
    setUsername("");
    dispatch(registerUser({ username, password }));
  };
  const status = useSelector(selectStatus);
  const isAuth = useSelector(selectIsAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (status) {
      toast(status);
    }
    if (isAuth) {
      navigate("/");
    }
  }, [status, isAuth, navigate]);
  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/3 h-60 mx-auto mt-48"
      >
        <h2 className="text-lg text-white text-center">Register</h2>

        <label className="text-xs text-gray-400">
          Username:
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
            type="text"
            name="username"
            placeholder="Username"
            className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
          />
        </label>
        <label className="text-xs text-gray-400">
          Password:
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            type="password"
            name="password"
            placeholder="Password"
            className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
          />
        </label>
        <div className="flex gap-8 justify-center mt-4">
          <button
            onClick={handleSubmit}
            type="submit"
            className="flex justify-center items-center text-xs bg-gray-600 text-white rounded-sm py-2 px-4"
          >
            {" "}
            Create account
          </button>
          <Link
            to="/login"
            className="flex justify-center items-center text-xs text-white"
          >
            I have account
          </Link>
        </div>
      </form>
    </div>
  );
};
