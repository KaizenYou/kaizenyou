'use client'
import { SessionProvider } from "next-auth/react"
import FooterSection from "@/components/FooterSection";
import NavbarSection from "@/components/NavbarSection";

const HomeLayout = ({
    children,
    session
}: {
    children: React.ReactNode;
    session: any;
}) => {
    return (
        <SessionProvider session={session}>
            <NavbarSection />
            {children}
            <FooterSection />
        </SessionProvider>
    )
}

export default HomeLayout
