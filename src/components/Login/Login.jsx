import React, { useRef, useState } from "react";
import { AiTwotoneLock } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { useAxios } from "../../axios/useAxios";
import { useNavigate, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../../axios/axios";
function Login() {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const validateUser = () => {
    setLoader(true);
    axios({
      url: "/login",
      method: "POST",
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("_token", res?.data?.token);
          localStorage.setItem("user", JSON.stringify(res?.data?.user));
          toast("Login successful", { theme: "dark" });
          setLoader(false);
          return navigate("/search");
        }
      })
      .catch((err) => {
        setLoader(false);
        return toast("Something went wrong!", {
          theme: "dark",
        });
      });
  };

  return (
    <div class="w-full h-screen bg-[#3a3e41] flex justify-center">
      <div className="w-[100%] h-[50%] flex justify-center">
        <div className="w-50 bg-[#2d3133] p-5 border-[1px] border-[#222]">
          <div className="flex w-25 m-2">
            <img
              src="https://app.cheminventory.net/images/ChemInventory.svg"
              alt=""
              class="w-[70px]"
            />
            <img
              src="https://app.cheminventory.net/images/ChemInventory.png"
              alt=""
              class="w-[225px]"
            />
          </div>
          <h1 class="text-center text-[#b6b8b8] text-lg font-bold font-display">
            Login
          </h1>
          <div className="login flex flex-col">
            <div className="email p-2 mt-3 bg-[#25292b] border-[1px] border-[#222] flex justify-between">
              <input
                type="text"
                placeholder="Email"
                class="bg-transparent outline-none text-white font-display text-[12px] w-[90%]"
                autoComplete="new-password"
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <FaUserAlt color="white" size={12} />
            </div>
            <div className="password p-2 mt-3 bg-[#25292b] border-[1px] border-[#222] flex justify-between">
              <input
                type="password"
                autoComplete="new-password"
                placeholder="Password"
                class="outline-none text-white font-display text-[12px] bg-transparent w-[90%]"
                onChange={(event) => setPassword(event.target.value)}
                required
                onPaste={(e) => e.preventDefault()}
              />
              <AiTwotoneLock color="white" size={15} />
            </div>
            <button
              type="submit"
              class="px-1 py-2 bg-[#4C595F] w-1/5 mt-3 text-[13px] font-display text-white font-bold "
              onClick={validateUser}
            >
              {loader ? (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    class="inline w-4 h-4 mr-2 animate-spin text-gray-600 fill-white"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                 
                </div>
              ) : (
                "Sign In "
              )}
            </button>
            <a
              href="#"
              class="text-[#b6b8b8] underline text-xs text-center pt-6 font-body cursor-pointer"
            >
              {" "}
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
