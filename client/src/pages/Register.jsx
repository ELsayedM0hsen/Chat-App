import React, { useState } from "react";
import Gender from "../components/Gender";
import useRegister from "../hooks/useRegister";
import { Link } from "react-router-dom";

const Register = () => {
  const [inputs,setInputs] = useState({username:"", email:"",  password:"", confirmPassword:"", gender:""})
  const {loading,register} = useRegister()

  const handleInputs = (e)=>{
    setInputs((prev)=>({...prev,[e.target.name]:e.target.value}))
  }
  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
	};
  const handleRegister = async(e)=>{
    e.preventDefault()
    await register(inputs)
  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-black">
          Register
        </h1>
        <form>
          <div className="m-2">
          <span className="text-black">Username</span>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input type="text" name="username" onChange={handleInputs}  className="grow" placeholder="Username" />
            </label>
          </div>
          <div className="m-2">
            <span className="text-black">Email</span>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="email" name="email" onChange={handleInputs}  className="grow" placeholder="Email" />
            </label>
          </div>
          <div className="m-2">
            <span className="text-black">Password</span>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input type="password" name="password" onChange={handleInputs} placeholder="Password" className="grow" />
            </label>
          </div>
          <div className="m-2">
            <span className="text-black">Confirm Password</span>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input type="password" name="confirmPassword" onChange={handleInputs}  placeholder="Confirm Password" className="grow" />
            </label>
          </div>
          <Gender onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>
          <div className=" flex items-center justify-center m-3">
          <Link to="/login" className="link link-error">I have an account !</Link>
          </div>
          <div className=" flex items-center justify-center">
            <button onClick={handleRegister} className="btn btn-outline btn-wide" disabled={loading}>
            {loading ? <span className='loading loading-spinner '></span> : "Register"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
