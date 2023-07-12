import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import decode from "jwt-decode";

function Navbar({ handleSidebarToggle }) {
    const [isSidebarHidden, setIsSidebarHidden] = useState(true);

    const toggleSidebarMobile = () => {
        setIsSidebarHidden(!isSidebarHidden);
        handleSidebarToggle(!isSidebarHidden);
    };

    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const token = user?.response.token;

        const storedProfile = window.localStorage.getItem("profile");
        setUser(JSON.parse(storedProfile));

        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) {
                logout();
            }
        }
        setUser(JSON.parse(localStorage.getItem("profile")));
    }, [router.pathname]);

    const logout = () => {
        localStorage.clear();
        setUser(null);
        router.push("/");
    };

    const login = () => {
        router.push("/auth/login");
    };

    return (
        <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                        <button id="toggleSidebarMobile" onClick={toggleSidebarMobile} aria-expanded="true" aria-controls="sidebar" className="mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded">
                            {isSidebarHidden &&
                                <svg id="toggleSidebarMobileHamburger" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                                </svg>
                            }
                            {!isSidebarHidden &&
                                <svg id="toggleSidebarMobileClose" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            }
                        </button>
                        <Link href="/" className="text-xl font-bold flex items-center lg:ml-2.5">
                            <img src="https://demo.themesberg.com/windster/images/logo.svg" className="h-6 mr-2" alt="Windster Logo" />
                            <span className="self-center whitespace-nowrap">RideEasy</span>
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <div className="mb-1">
                                <span className="text-xl font-bold">{user?.response.result.name}</span>
                            </div>
                        </div>
                        <button className="inline-flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3" onClick={user ? logout : login}>
                            {user ? "Logout" : "Login"}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
