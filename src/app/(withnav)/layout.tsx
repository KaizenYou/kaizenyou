import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const HomeLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default HomeLayout
