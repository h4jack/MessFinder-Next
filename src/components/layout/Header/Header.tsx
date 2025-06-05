import Logo from "@/components/logo/Logo"
import Link from "next/link";

const Header = () => {
    const user = false;
    return (
        <header className="bg-white/50 backdrop-blur-sm text-gray-800 shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <Logo />
                <nav className="hidden md:flex items-center gap-6 ml-auto mr-6">
                    <Link href="/info/about" className="text-gray-600 hover:text-gray-800 transition">About</Link>
                    <Link href="/info/contact" className="text-gray-600 hover:text-gray-800 transition">Contact Us</Link>
                </nav>

                <div className="flex items-center gap-4 relative">
                    {!user ? (
                        <>
                            <Link href="/auth/login" className="hidden sm:block">
                                <button className="bg-blue-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-md font-medium hover:bg-blue-700 transition">
                                    Login
                                </button>
                            </Link>
                            <Link href="/owner/submit-pg">
                                <button className="bg-gray-800 text-white px-4 py-2 md:px-6 md:py-3 rounded-md font-medium hover:bg-gray-900 transition">
                                    Submit PG
                                </button>
                            </Link>
                        </>
                    ) : (
                        <>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
