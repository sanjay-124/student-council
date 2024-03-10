import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import Footer from "../component/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { firebaseConfig } from "../fireconfig";
import ExecutiveHeader from "../component/ExecutiveHeader";
firebase.initializeApp(firebaseConfig);


const executives = ["finance@gmail.com", "studentaffairs@gamil.com", "operations@gmail.com", "president@gmail.com"];
const secondchamber = ["sports@gmail.com", "arts@gmail.com", "community@gmail.com", "ib1@gmail.com", "ib2@gmail.com", "gr9@gmail.com", "gr10@gmail.com"];

function UserSignup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      const user = userCredential.user;

      if (executives.includes(user.email)) {
        toast.success("Sign In successful!");
        setEmail("");
        setPassword("");
        navigate("/executive");
      } else if (secondchamber.includes(user.email)) {
        toast.success("Sign In successful!");
        setEmail("");
        setPassword("");
        navigate("/secondchamber");
      } else {
        toast.error("You don't have permission to access the admin pages.");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <ExecutiveHeader activePage="signup" />
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Link to="/">
            <span className="sr-only">Home Page</span>
            <img className="mx-auto w-auto" src="/images/sc-icon.png" alt="" />
          </Link>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-fuchsia-50 py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="xyz@gmail.com"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-purple-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-fuchsia-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserSignup;
