'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff, FiArrowLeft } from 'react-icons/fi';
import axios from 'axios';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
      
    });
  };


  const passwordMatch = formData.confirmPassword !== '' && formData.confirmPassword === formData.password;
  const checkFields = formData.firstName.trim() !== '' && formData.email.trim() !== '' || formData.lastName.trim() !== '';

  const handleRegister = async(e: React.FormEvent) => {
    e.preventDefault();
    const {confirmPassword, ...payload} = formData;
    setIsLoading(true);
    try{
      const response = await axios.post("http://localhost:8080/user/signup", payload)
      console.log("registered successfully", response);
    }
    catch(e: any){
      console.log("error while signing up", e);
    }
    finally{
      setIsLoading(false);
    }
  }

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   {console.log("This is console log")}

  //   if (formData.password !== formData.confirmPassword) {
  //     alert('Passwords do not match!');
  //     return;
  //   }
    
  //   setIsLoading(true);
    
  //   // Simulate API call
  //   await new Promise(resolve => setTimeout(resolve, 2000));
  //   setIsLoading(false);
    
  //   // Here you would handle the actual registration logic
  //   console.log('Registration attempt:', formData);
    
  //   // Redirect to OTP verification
  //   window.location.href = '/verify-otp';
  // };

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 relative z-10 bg-white">
      <div className='border-3 rounded-2xl border-teal-300'>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="glass-effect p-8 rounded-3xl shadow-2xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-8"
          >
            <Link href="/" className="inline-flex items-center text-black hover:text-black mb-4">
              <FiArrowLeft className="mr-2" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold text-black mb-2">Create Account</h1>
            <p className="text-black">Join us today and get started</p>
          </motion.div>

          {/* Form */}
          <form onSubmit={handleRegister} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                variants={inputVariants}
                whileFocus="focus"
              >
                <label className="block text-black/90 text-sm font-medium mb-2">
                  First Name <span className='text-red-500'>*</span>
                </label>
                <div className="relative">
                  <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/70" />
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="input-field pl-10 text-black bg-[#E7F0FE] placeholder-black/30"
                    placeholder="First name"
                    required
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                variants={inputVariants}
                whileFocus="focus"
              >
                <label className="block text-black/90 text-sm font-medium mb-2">
                  Last Name
                </label>
                <div className="relative">
                  <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/70" />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="input-field pl-10 text-black bg-[#E7F0FE] placeholder-black/30"
                    placeholder="Last name"
                    required
                  />
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              variants={inputVariants}
              whileFocus="focus"
            >
             
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              variants={inputVariants}
              whileFocus="focus"
            >
              <label className="block text-black/90 text-sm font-medium mb-2">
                Email Address <span className='text-red-500'>*</span>
              </label>
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/70" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field pl-10 text-black bg-[#E7F0FE] placeholder-black/30"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              variants={inputVariants}
              whileFocus="focus"
            >
              <label className="block text-black/90 text-sm font-medium mb-2">
                Password <span className='text-red-500'>*</span>
              </label>
              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/70" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="input-field pl-10 pr-10 text-black bg-[#E7F0FE] placeholder-black/30"
                  placeholder="Create a password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black/70 hover:text-black"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              variants={inputVariants}
              whileFocus="focus"
            >
              <label className="block text-black/90 text-sm font-medium mb-2">
                Confirm Password <span className='text-red-500'>*</span>
              </label>
              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/70" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="input-field pl-10 pr-10 text-black bg-[#E7F0FE] placeholder-black/30"
                  placeholder="Confirm your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black/70 hover:text-black"
                >
                  {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                type="submit"
                disabled={isLoading || !passwordMatch || !checkFields}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary relative overflow-hidden disabled:opacity-50 disabled:hover:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center justify-center"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                    />
                    Creating Account...
                  </motion.div>
                ) : (
                  'Create Account'
                )}
              </motion.button>
            </motion.div>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-8 text-center"
          >
            <p className="text-black/80">
              Already have an account?{' '}
              <Link href="/login" className="text-black hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </motion.div>
        </div>
      </motion.div>
      </div>
    </div>
  );
}