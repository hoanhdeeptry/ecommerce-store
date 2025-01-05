// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserPlus,User, Mail, Lock, ArrowBigRight, Loader } from "lucide-react";
import { motion} from "framer-motion";
import { useUserStore } from "../stores/useUserStore";
const SignUpPage = () => {

  const loading = false ;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const {signup} = useUserStore();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("called here");
    signup(formData);
  }
  return (
    <div className="flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
      <motion.div
      initial = {{opacity:0, y:20}}
      animate = {{opacity:1, y:0}}
      transition = {{duration:0.8,delay:0.2}}
      >
        <h2 className="mt-6 text-center text-3xl font-extrabold text-emerald-400">Create an account</h2>
      </motion.div>
      <motion.div
      initial = {{opacity:0, y:20}}
      animate = {{opacity:1, y:0}}
      transition = {{duration:0.8,delay:0.2}}
      >
        <div className="bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                full name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" aria-hidden="true"></User>
                </div>
                <input
                  type="text"
                  id="name"
                  required
                  className="block w-full px-3 py-2 pl-10 bg-gray-700 boder border-gray-600 rounded-md shadowsm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm "
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" aria-hidden="true"></Mail>
                </div>
                <input
                  type="email"
                  id="email"
                  required
                  className="block w-full px-3 py-2 pl-10 bg-gray-700 boder border-gray-600 rounded-md shadowsm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm "
                  placeholder="youremail@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" aria-hidden="true"></Lock>
                </div>
                <input
                  type="password"
                  id="password"
                  required
                  className="block w-full px-3 py-2 pl-10 bg-gray-700 boder border-gray-600 rounded-md shadowsm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm "
                  placeholder="*********"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                ConfirmPassword 
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" aria-hidden="true"></Lock>
                </div>
                <input
                  type="password"
                  id="confirmPassword"
                  required
                  className="block w-full px-3 py-2 pl-10 bg-gray-700 boder border-gray-600 rounded-md shadowsm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm "
                  placeholder="*********"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                />
              </div>
            </div>

            <button
            type = "submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            disabled={loading}
            >
              {loading?(
                <>
                  <Loader className="mr-2 h-5 w-5 animate-spin" aria-hidden="true"/>
                  Loading
                </>
              ):(
                <>
                  <UserPlus className="mr-2 h-5 w-5" aria-hidden="true"></UserPlus>
                  Sign Up
                </>
              )}
            </button>
          </form>
          <p className="mt-8 text-center text-sm text-gray-400">
              Already have an account ? {" "}
              <Link to="/login" className="font-medium text-emerald-600 hover:text-emerald-500">
                Login here <ArrowBigRight className="inline h-4 w-4"/>
              </Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
};

export default SignUpPage;
