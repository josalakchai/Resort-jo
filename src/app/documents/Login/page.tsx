'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

function Loginpage() {
    const router = useRouter();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const VALID_USER = 'jo';
    const VALID_PASS = '123';

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === VALID_USER && password === VALID_PASS) {
            router.push('/resort');
        } else {
            setError('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
        }
    };

    return (
        <div className="min-h-screen bg-cover bg-center flex items-center justify-center bg-[url('/462554607_963347112319380_1591295771978777457_n.jpg')]">
            <div className="bg-gray-200/80 backdrop-blur-md w-[400px] p-8 rounded-[30px] shadow-xl text-white">
                <div className="relative w-24 h-24 mx-auto mb-6">
                    <Image
                        src="/HM1.png"
                        alt="Logo"
                        fill
                        className="rounded-full object-cover"
                    />
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block font-semibold mb-1 text-black">User</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-2 rounded-full text-black focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block font-semibold mb-1 text-black">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 rounded-full text-black focus:outline-none"
                        />
                    </div>

                    {error && <p className="text-red-600 text-sm font-medium">{error}</p>}

                    <div className="flex items-center mt-4 text-black">
                        <input type="checkbox" id="remember" className="mr-2" />
                        <label htmlFor="remember" className="text-sm font-medium">Remember username</label>
                    </div>

                    <p className="text-sm mt-1 underline cursor-pointer text-black">
                        Forgotten your username or password
                    </p>

                    <div className="flex justify-between w-full mt-6">
                        <Link href="/documents/registration">
                            <button
                                type="button"
                                className="bg-red-600 text-white px-6 py-2 rounded-full font-bold"
                            >
                                สมัครสมาชิก
                            </button>
                        </Link>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-6 py-2 rounded-full font-bold"
                        >
                            ตกลง
                        </button>
                    </div>
                </form>

                {/* ปุ่มสมัครผ่าน Google / Facebook */}
                <div className="mt-6 space-y-3">
                    <button
                        onClick={() => signIn('google')}
                        className="w-full bg-white text-black border border-gray-300 rounded-full py-2 flex items-center justify-center gap-2 hover:bg-gray-100"
                    >
                        <Image src="/google.svg" alt="Logo" fill className="w-5 h-5" />
                        <span className="font-medium">สมัครด้วย Google</span>
                    </button>

                    <button
                        onClick={() => signIn('facebook')}
                        className="w-full bg-[#1877f2] text-white rounded-full py-2 flex items-center justify-center gap-2 hover:bg-[#145dbf]"
                    >
                        <Image src="/facebook.svg" alt="Logo" fill className="w-5 h-5" />
                        <span className="font-medium">สมัครด้วย Facebook</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Loginpage;
