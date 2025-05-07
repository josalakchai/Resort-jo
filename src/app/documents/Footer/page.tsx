import React from 'react';
import { Facebook, Phone } from 'lucide-react'; // หรือใช้ไอคอนอื่นได้
import Image from 'next/image'; // ถ้าใช้ Next.js (ลบถ้าใช้ React ธรรมดา)

function Footerpage() {
  return (
    <footer className="bg-blue-600 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-3 items-center gap-4 text-center">
        {/* LEFT: FOLLOW */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold">FOLLOW US ON</h3>
          <a
  href="https://www.facebook.com/salakchai082454740408045112345?locale=th_TH" // ← เปลี่ยนลิงก์จริงตรงนี้
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-2 hover:underline"
>
  <Facebook className="w-5 h-5" />
  <span className="text-sm">Salakchai sae tho</span>
</a>

          <div className="flex items-center justify-center gap-2">
            <Image src="/line-icon.png" alt="LINE" className="w-5 h-5" />
            <span className="text-sm">LINE</span>
          </div>
        </div>

        {/* CENTER: LOGO */}
        <div>
          <img src="/HM1.png" alt="Logo" className="w-24 h-24 mx-auto rounded-full" />
        </div>

        {/* RIGHT: CONTACT */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold">CONTACT & INFORMATION</h3>
          <div className="flex items-center justify-center gap-2">
            <Phone className="w-5 h-5" />
            <span className="text-sm">082-454-7404</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footerpage;
