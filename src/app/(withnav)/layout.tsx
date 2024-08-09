
import FooterSection from "@/components/FooterSection";
import NavbarSection from "@/components/NavbarSection";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <NavbarSection />
            {children}
            <FooterSection />
        </>
    );
};

export default HomeLayout;
