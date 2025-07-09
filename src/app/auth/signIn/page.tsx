"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";
import LoginBG from "@/assets/images/LoginBg.jpg";
import SecureLogo from "@/assets/images/secure-logo.png";
import Link from "next/link";
import {
  GoogleReCaptcha
} from 'react-google-recaptcha-v3';
import { generateCaptcha } from "@/utils/generateCaptcha";
import LoopIcon from '@mui/icons-material/Loop';
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";
import { once } from "events";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [consent, setConsent] = useState(false);
  const [captchaText, setCaptchaText] = useState('');
  const [inputCaptcha, setInputCaptcha] = useState('');
  const [error, setError] = useState('');
  const [spinning, setSpinning] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setCaptchaText(generateCaptcha());
  }, []);

  const handleRefreshCaptcha = () => {
    setSpinning(true);
    setTimeout(() => {
      setSpinning(false);
      setCaptchaText(generateCaptcha());
      setInputCaptcha('');
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // CAPTCHA validation
    if (inputCaptcha.trim().toUpperCase() !== captchaText.toUpperCase()) {
      setError('Invalid CAPTCHA');
      handleRefreshCaptcha();
      return;
    }

    // ID and password validation
    const StaticUserName = process.env.NEXT_PUBLIC_EMAIL
    const StaticUserPassword = process.env.NEXT_PUBLIC_PASSWORD
    if (username === StaticUserName && password === StaticUserPassword) {
      localStorage.setItem("userId", username);
      router.push("/states/dashboard");
    } else {
      setError("Wrong ID or password");
    }
  };

  const isFormValid = username && password && inputCaptcha;

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
        <motion.h2
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 1, ease: "easeInOut", repeat: 0 }}
          className="text-center text-white text-lg sm:text-xl font-semibold mb-6"
        >
          Login
        </motion.h2>
        <motion.h2
          className=""
          initial={{ y: -300, opacity: 0 }}
          animate={{ y: [-300, 0, -150, 0, -75, 0, -25, 0], opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1], // easeOutBounce-like
          }}
        >
          UserName
        </motion.h2>

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
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex items-center justify-between space-x-4">
            <div className="bg-sky-900 text-white px-4 py-2 font-mono tracking-widest rounded">
              {captchaText}
            </div>


            <button
              type="button"
              onClick={handleRefreshCaptcha}
              className="text-sm text-blue-400 hover:underline font-medium cursor-pointer"
            >
              <LoopIcon fontSize="medium" className={`transition-transform ${spinning ? "animate-spin" : ""}`} />
            </button>

            <input
              type="text"
              placeholder="Enter CAPTCHA"
              className="w-full px-4 py-2 rounded bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={inputCaptcha}
              onChange={(e) => setInputCaptcha(e.target.value)}
            />
            {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
          </div>
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-2 rounded-sm font-medium transition ${isFormValid
              ? "cursor-pointer text-white bg-gradient-to-r from-cyan-900 to-teal-600 hover:from-teal-600 hover:to-cyan-900"
              : "cursor-not-allowed bg-gray-500 text-white/60"}`}
          >
            Sign In
          </button>
        </form>

        {/* <p className="text-sm text-white/80 text-center mt-4">
          Don’t have an account? <Link href="/auth/signUp" className="text-blue-400 hover:underline">Sign Up</Link>
        </p> */}
      </div>
    </div>
  );
}
