'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';


const UserProfilePage = () => {
    const { data: session } = useSession();

    if (!session) {
        return <div>Loading...</div>;
    }

    const user = session.user;

    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center p-4 w-full">
                <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 pb-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl my-6 z-50">
                    Welcome
                </h1>
                <div className="max-w-md w-full bg-white dark:bg-black rounded-lg shadow-md p-6">
                    <div className="flex flex-col items-center">
                        {user?.image ? (
                            <Image
                                src={user.image}
                                alt="Profile Picture"
                                width={96}
                                height={96}
                                className="w-24 h-24 rounded-full mb-4"
                            />
                        ) : (
                            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                                <span className="text-gray-600 text-xl">No Image</span>
                            </div>
                        )}
                        <h2 className="text-2xl font-bold text-center mb-2">
                            {user?.name || 'User'}
                        </h2>
                        <p className="text-gray-600 text-center">
                            {user?.email || 'No email available'}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserProfilePage;
