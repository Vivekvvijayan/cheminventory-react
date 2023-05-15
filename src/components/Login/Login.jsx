import React,{ useRef, useState } from "react";
import { AiTwotoneLock } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { useAxios } from "../../axios/useAxios";
import { useNavigate, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../../axios/axios";
function Login() {
  const navigate = useNavigate()
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')


  const validateUser = () => {
    // axios({
    //   url:"/login",
    //   data:{
    //     email,
    //     password
    //   }
    // })

    axios({
      url:"/login",
      method:"POST",
      data:{
        email,
        password
      }
    }).then(res => {
      
      if(res.status === 200) {
        localStorage.setItem('_token',res?.data?.token)
        localStorage.setItem("user",JSON.stringify(res?.data?.user))
        toast("Login successful",{theme:"dark"})
        return navigate('/search')
      }
    }).catch(err => {
      return toast("Something went wrong!",{
        theme:"dark"
      })
    })

  }

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
          <h1 class="text-center text-[#b6b8b8] text-lg font-bold font-display">Login</h1>
          <div className="login flex flex-col">
            <div className="email p-2 mt-3 bg-[#25292b] border-[1px] border-[#222] flex justify-between">
              <input
                type="text"
                placeholder="Email"
                class="bg-transparent outline-none text-white font-display text-[12px] w-[90%]"
                autoComplete="new-password"
               onChange={event => setEmail(event.target.value)}
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
                onChange={event => setPassword(event.target.value)}
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
              Sign In
            </button>
            <a href="#" class="text-[#b6b8b8] underline text-xs text-center pt-6 font-body cursor-pointer">
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
