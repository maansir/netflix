import React, { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <form className="bg-black opacity-80 py-14 px-10 flex justify-center p-5 w-96 flex-col gap-5 m-auto rounded-md text-white">
      <h2 className="pb-4 text-3xl font-bold">
        {isSignInForm ? "Sign In" : "Sign Up"}
      </h2>
      {!isSignInForm && (
        <input
          className="h-11 bg-transparent rounded-sm border-slate-300 border px-3"
          type="text"
          placeholder="Name..."
        />
      )}
      <input
        className="h-11 bg-transparent rounded-sm border-slate-300 border px-3"
        type="mail"
        placeholder="Email..."
      />
      <input
        className="h-11 bg-transparent rounded-sm border-slate-300 border px-3"
        type="password"
        placeholder="Password..."
      />
      <button className="bg-red-600 rounded-sm h-11 hover:bg-red-500">
        {isSignInForm ? "Sign In" : "Sign Up"}
      </button>
      <p onClick={toggleSignInForm}>
        {isSignInForm ? (
          <span>
            New to Netflix{" "}
            <strong className="cursor-pointer">Sign Up Now</strong>
          </span>
        ) : (
          <span>
            Already User <strong className="cursor-pointer">Sign In</strong>
          </span>
        )}
      </p>
    </form>
  );
};

export default Login;
