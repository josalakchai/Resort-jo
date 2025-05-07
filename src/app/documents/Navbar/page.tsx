import React from 'react';
import { Search, MoreVertical, User } from 'lucide-react';

function Nacbarpage() {
  return (
    <div className="w-full h-16 flex items-center px-6 justify-between bg-gradient-to-r from-yellow-400 via-green-300 to-cyan-500 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/HM1.png" // ใส่ path โลโก้ของคุณ
          alt="Logo"
          className="w-10 h-10 rounded-full"
        />
      </div>

      {/* Search box */}
      <div className="flex items-center bg-white rounded-full px-4 py-1 w-[300px]">
        <input
          type="text"
          placeholder="ค้นหา"
          className="flex-grow bg-transparent outline-none text-sm"
        />
        <Search className="w-4 h-4 text-gray-500" />
      </div>

      {/* User icon */}
      <div className="flex items-center gap-2">
        <MoreVertical className="text-white w-5 h-5" />
        <User className="text-black w-6 h-6" />
        <span className="text-black font-medium text-sm">jo</span>
      </div>
    </div>
  );
}

export default Nacbarpage;
