import React from 'react';
import Image from 'next/image'; // นำเข้า Image ถ้าใช้ Next.js (ลบถ้าใช้ React ธรรมดา)

function Loginpage() {
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center bg-[url('/462554607_963347112319380_1591295771978777457_n.jpg')]">
      <div className="bg-gray-200/80 backdrop-blur-md w-[400px] p-8 rounded-[30px] shadow-xl text-white">
        <div className="flex justify-center mb-6">
          <Image
            src="/HM1.png"
            alt="Logo"
            className="w-24 h-24 rounded-full"
          />
        </div>
        <form className="space-y-4">
          <div>
            <label className="block font-semibold mb-1 text-black">User</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-full text-black focus:outline-none"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-black">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-full text-black focus:outline-none"
            />
          </div>

          <div className="flex items-center mt-4 text-black">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-sm font-medium">Remember username</label>
          </div>

          <p className="text-sm mt-1 underline cursor-pointer text-black">
            Forgotten your username or password
          </p>

          <div className="flex justify-between w-full mt-6">
            <button
              type="button"
              className="bg-red-600 text-white px-6 py-2 rounded-full font-bold"
            >
              สมัครสมาชิก
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-full font-bold"
            >
              ตกลง
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Loginpage;
