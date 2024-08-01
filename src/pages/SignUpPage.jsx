import Logo from "../images/Logo.png";
import Login from "../images/login.png";

// UUID
import { v4 as uuidv4 } from "uuid";

// Link
import { Link, useNavigate } from "react-router-dom";

// Hooks
import { useRef } from "react";

const SignUpPage = () => {
  const navigate = useNavigate();

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const userNameRef = useRef();
  const passwordRef = useRef();

  const signUpHandler = async (event) => {
    event.preventDefault();

    // Get input values
    const firstName = firstNameRef.current.value.trim();
    const lastName = lastNameRef.current.value.trim();
    const userName = userNameRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    // Check empty values
    if (!firstName || !lastName || !userName || !password) {
      alert("Please fill all required fields");
      return;
    }

    // Check strong password

    if (password.length < 8) {
      alert("Weak password");
      return;
    }

    // Create a new user
    const newUser = {
      firstName: firstName,
      lastName,
      userName,
      password,
      id: uuidv4(),
    };

    // Check existing user
    const existingUserResponse = await fetch(
      `http://localhost:3000/users?userName=${userName}`
    );

    const existingUserData = await existingUserResponse.json();

    if (existingUserData.length) {
      alert("Username already exists");
      return;
    }

    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    const data = await response.json();

    if (!response.ok) {
      return;
    }

    localStorage.setItem("userId", JSON.stringify(newUser.id));
    navigate("/");
  };

  return (
    <div className="flex justify-between">
      <div>
        <nav className="flex items-center gap-[80px] px-[120px] pt-[80px]">
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
          Sign up<span className="text-[#FFC700]">.</span>
        </h1>
        <form
          onSubmit={signUpHandler}
          className="px-[120px] flex flex-col gap-[40px] mt-[160px]"
        >
          <div className="flex gap-[40px]">
            <div className="flex flex-col font-black text-base">
              <label>FIRSTNAME</label>
              <input
                className="border-2 px-2 mt-[16px] rounded-[8px] h-[48px] w-[295px]"
                type="text"
                ref={firstNameRef}
              />
            </div>
            <div className="flex flex-col font-black text-base">
              <label>LASTNAME</label>
              <input
                className="border-2 px-2 mt-[16px] rounded-[8px] h-[48px] w-[295px]"
                type="text"
                ref={lastNameRef}
              />
            </div>
          </div>
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
              className="border-2 px-2 mt-[16px] rounded-[8px] h-[48px] w-[630px]"
              type="password"
              ref={passwordRef}
            />
          </div>
          <div className="flex justify-between font-medium text-base">
            <div className="flex gap-[10px]">
              <input type="radio" />
              <p>
                Yes, I understand & agree to the{" "}
                <a className="underline" href="#">
                  Terms & Conditions
                </a>
              </p>
            </div>
          </div>
          <button className="px-[30px] py-[24px] font-black text-[20px] text-[#fff] bg-[#1D1D1D] rounded-[8px] mt-[35px] flex items-center">
            SIGN UP<i className="fa-solid fa-arrow-right ml-[470px]"></i>
          </button>
          <div className="flex gap-[5px] mb-[80px] font-medium text-base">
            <p>Already have an account?</p>
            <Link className="underline" to="/sign-in">
              Sign in here.
            </Link>
          </div>
        </form>
      </div>
      <img src={Login} alt=""></img>
    </div>
  );
};

export default SignUpPage;
