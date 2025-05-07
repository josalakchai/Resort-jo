import React from 'react';
import { User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

function Registrationpage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative">
      {/* ไอคอนผู้ใช้ด้านขวาบน */}
      <div className="absolute top-6 right-6 text-black">
        <User className="w-6 h-6" />
      </div>

      <div className="bg-white w-full max-w-sm p-6 rounded-xl shadow-md">
        {/* โลโก้ตรงกลาง */}
        <div className="flex justify-center mb-6">
          <Image src="/HM1.png" alt="logo" fill className="w-24 h-24 rounded-full" />
        </div>

        {/* ฟอร์ม */}
        <form className="space-y-3">
          <input
            type="text"
            placeholder="ชื่อ"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
          />
          <input
            type="text"
            placeholder="นามสกุล"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
          />
          <input
            type="text"
            placeholder="เบอร์โทร"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
          />
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
          />

          <div className="flex justify-end pt-2">
          <Link href="/documents/login">
            <button
              type="submit"
              className="bg-blue-500 text-white px-5 py-1.5 rounded-full"
            >
              ตกลง
            </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registrationpage;
