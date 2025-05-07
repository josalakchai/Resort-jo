import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="relative min-h-screen">
      {/* ปุ่ม Login ด้านขวาบน */}
      <div className="absolute top-5 right-5 z-10">
      <Link href="/documents/login">
        <button className="bg-blue-500 text-white text-1xl px-6 py-3 rounded-3xl font-bold">
          log in
        </button>
      </Link>
      </div>

      {/* ภาพ 1 + ข้อความ */}
      <div className="relative w-full h-[300px]">
        <Image
          src="/image1.jpg"
          alt="beach"
          fill
          className="object-cover"
        />
        <h1 className="absolute bottom-6 left-1/2 -translate-x-1/2 text-2xl font-bold text-orange-300 drop-shadow-lg top-12">
          ที่พักที่คุณต้องการ
        </h1>
      </div>

      {/* ภาพ 2 */}
      <div className="relative w-full h-[300px]">
        <Image
          src="/image2.jpg"
          alt="camp"
          fill
          className="object-cover"
        />
      </div>

      {/* ภาพ 3 */}
      <div className="relative w-full h-[300px]">
        <Image
          src="/image3.jpg"
          alt="mountain"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
