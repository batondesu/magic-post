// pages/login.js
import '/app/global.css'

import React from 'react';
import Link from 'next/link';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="bg-white p-8 rounded shadow-md w-1/3">
        <h2 className="text-2xl font-bold mb-4 text-center">Đăng nhập</h2>
        <form className="space-y-4">
          <div className="relative">
            <label htmlFor="phone" className="absolute top-0 left-2 -mt-2 text-xs text-gray-600">
              Số điện thoại
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full mt-3 border-2 border-blue-400 rounded-md p-2 focus:outline-none focus:border-blue-600"
              placeholder="Nhập số điện thoại của bạn"
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="absolute top-0 left-2 -mt-2 text-xs text-gray-600">
              Mật khẩu
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full mt-3 border-2 border-blue-400 rounded-md p-2 focus:outline-none focus:border-blue-600"
              placeholder="Nhập mật khẩu của bạn"
            />
          </div>
          <div className="flex justify-between items-center">
            <Link legacyBehavior href="/forgot-password">
              <a className="text-blue-500 text-xs hover:underline">Quên mật khẩu?</a>
            </Link>
            <Link legacyBehavior href="/register">
              <a className="text-blue-500 text-xs hover:underline">Đăng ký</a>
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
