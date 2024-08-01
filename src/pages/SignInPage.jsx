// Images
import Logo from "../images/Logo.png";
import Login from "../images/login.png";

// Axios
import axios from "axios";

// Link
import { Link } from "react-router-dom";

// Hooks
import { useRef } from "react";

// Router Hooks
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const navigate = useNavigate();

  const userNameRef = useRef();
  const passwordRef = useRef();

  const signInHandler = async (event) => {
    event.preventDefault();

    const userName = userNameRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    if (!userName || !password) {
      alert("Please fill all required fields");
      return;
    }

    const response = await axios({
      method: "get",
      url: `http://localhost:3000/users?userName=${userName}`,
    });

    // Check existing user
    if (!response.data.length) {
      alert("Username or password is incorrect");
      return;
    }

    const user = response.data[0];

    // Check correct password
    if (user.password !== password) {
      alert("Username or password is incorrect");
      return;
    }

    localStorage.setItem("userId", JSON.stringify(user.id));
    navigate("/");
  };

  return (
    <div className="flex justify-between">
      <div>
        <nav className="flex items-center gap-[80px] ">
          <div>
            <a href="./index.html">
              <img src={Logo} alt="" />
            </a>
          </div>
          <div className="bg-black rounded-[8px] text-[#fff] p-[15px]">
            English
          </div>
        </nav>
        <h1 className="font-black text-[96px] px-[120px] mt-[80px]">
          Sign in<span className="text-[#FFC700]">.</span>
        </h1>
        <form
          onSubmit={signInHandler}
          className="px-[120px] flex flex-col gap-[40px] mt-[160px]"
        >
          <div className="flex flex-col font-black text-base">
            <label>USERNAME</label>
            <input
              className="border-2 px-2 mt-[16px] rounded-[8px] h-[48px] w-[630px]"
              type="text"
              ref={userNameRef}
            />
          </div>
          <div className="flex flex-col font-black text-base">
            <label>PASSWORD</label>
            <input
              className="border-2 px-2 mt-4 rounded-2xl h-12 w-[630px]"
              type="password"
              ref={passwordRef}
            />
          </div>
          <div className="flex justify-between font-medium text-base">
            <div className="flex gap-[10px]">
              <input type="radio" />
              <p>Remember me</p>
            </div>
            <a className="underline" href="#">
              Recover my password
            </a>
          </div>
          <button className="px-[30px] py-[24px] font-black text-[20px] text-[#fff] bg-[#1D1D1D] rounded-[8px] mt-[35px] flex items-center">
            SIGN IN<i className="fa-solid fa-arrow-right ml-[470px]"></i>
          </button>
          <div className="flex gap-[5px] mb-[80px] font-medium text-base">
            <p>New here?</p>
            <Link className="underline" to="/sign-up">
              Create an account.
            </Link>
          </div>
        </form>
      </div>
      <img src={Login} alt=""></img>
    </div>
  );
};

export default SignInPage;
