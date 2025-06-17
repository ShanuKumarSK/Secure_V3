"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import LoginBG from "@/assets/images/LoginBg.jpg";
import SecureLogo from "@/assets/images/secure-logo.png";
import Link from 'next/link';

const SignUp = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add API call or authentication logic here
    console.log({ username, email, password });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      {/* Background Image */}
      <Image
        src={LoginBG}
        alt="Background"
        fill
        className="object-cover -z-10"
        priority
      />
      <div className="absolute inset-0 bg-opacity-50 backdrop-blur-xs -z-10" />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-lg p-6 sm:p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
        {/* Avatar */}
        <div className="flex justify-center -mt-22 mb-4">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-purple-400 via-blue-400 to-green-400 p-[2px]">
            <div className="bg-gray-900 w-full h-full rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src={SecureLogo}
                alt="User Avatar"
                width={110}
                height={110}
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center text-white text-lg sm:text-xl font-semibold mb-6">
          Login
        </h2>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 rounded bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full px-4 py-2 rounded bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="w-full py-2 cursor-pointer rounded-sm text-white font-medium bg-gradient-to-r from-cyan-900 to-teal-600 transition hover:from-teal-600 hover:to-cyan-900">
            Sign In
          </button>
        </form>

        <p className="text-sm text-white/80 text-center mt-4">
          Already have an account? <Link href="/auth/signIn" className="text-blue-400 hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp