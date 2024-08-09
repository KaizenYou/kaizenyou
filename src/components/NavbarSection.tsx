'use client';

import { useState } from 'react';
import { IconHome, IconCalendarEvent, IconUser, IconBriefcase } from "@tabler/icons-react";
import Link from "next/link";
import Button from "./ui/Button";
import { cn } from "@/utils/cn";
import { useSession, signOut } from "next-auth/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const navItems = [
    { name: "Home", link: "/", icon: <IconHome className="h-4 w-4 text-white" /> },
    { name: "Dashboard", link: "/dashboard", icon: <IconUser className="h-4 w-4 text-white" /> },
    { name: "Events", link: "/events", icon: <IconCalendarEvent className="h-4 w-4 text-white" /> },
    { name: "Internships", link: "/internships", icon: <IconBriefcase className="h-4 w-4 text-white" /> },
];

const NavbarSection = ({ className }: { className?: string }) => {
    const { data: session } = useSession();
    const [loggingOut, setLoggingOut] = useState(false);

    const handleSignOut = async () => {
        setLoggingOut(true);
        try {
            await signOut({ redirect: false }); // prevent automatic redirect
            toast.success("Successfully logged out!", {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } catch (error) {
            toast.error("Logout failed. Please try again.", {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } finally {
            setLoggingOut(false);
        }
    };

    return (
        <>
            <div
                className={cn(
                    "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
                    className
                )}
            >
                {navItems.map((navItem, idx) => (
                    <Link
                        key={`link-${idx}`}
                        href={navItem.link}
                        className={cn(
                            "relative text-neutral-50 items-center flex space-x-1 hover:text-blue-500"
                        )}
                    >
                        <span className="block sm:hidden">{navItem.icon}</span>
                        <span className="hidden sm:block text-sm">{navItem.name}</span>
                    </Link>
                ))}
                {session ? (
                    <Button
                        title="Logout"
                        className="px-5"
                        onClick={handleSignOut}
                        disabled={loggingOut}
                    />
                ) : (
                    <Link href={'/login'}>
                        <Button title="Login" className="px-5" />
                    </Link>
                )}
            </div>
            <ToastContainer />
        </>
    );
};

export default NavbarSection;
