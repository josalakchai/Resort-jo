'use client';

import React from 'react';
import Image from 'next/image'; // ใช้สำหรับแสดงภาพใน Next.js

const resorts = [
  {
    id: 1,
    name: "Nak Nakorn Princess Chiang Rai",
    location: "ตำบล รอบเวียง",
    distance: "1.2 กม. จากตัวเมือง",
    rating: 4.5,
    isPopular: true,
    image: "/nakorn.jpg",
  },
  {
    id: 2,
    name: "Townscreen Resort",
    location: "ตำบล ริมกก",
    distance: "800 ม. จากตัวเมือง",
    rating: 4.2,
    isPopular: false,
    image: "/townscreen.jpg",
  },
];

function Resortpage() {
  return (
    <div className="min-h-screen bg-white px-4 py-6">
      <h1 className="text-2xl font-bold text-center mb-6">รีสอร์ท</h1>
      <div className="space-y-4">
        {resorts.map((resort) => (
          <div
            key={resort.id}
            className="flex bg-white rounded-xl shadow-md overflow-hidden border"
          >
            <Image
              src={resort.image}
              alt={resort.name}
              fill
              className="w-32 h-32 object-cover"
            />
            <div className="flex flex-col justify-between p-4 flex-1">
              <div>
                <h2 className="font-semibold text-lg">{resort.name}</h2>
                <p className="text-sm text-gray-500">{resort.location}</p>
                <p className="text-xs text-gray-400">{resort.distance}</p>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-green-600 font-semibold text-sm">
                  {resort.rating} ★
                </span>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 text-sm rounded">
                  ดูรายละเอียด
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resortpage;
