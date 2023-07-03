import Link from 'next/link'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import decode from "jwt-decode";

// TODO: add sidebar

function Navbar() {   
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
    },[router.pathname]);

    const logout = () => {
        localStorage.clear();
        router.push("/");
    };

    return(
    <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-start">
                <div className="text-xl font-bold flex items-center lg:ml-2.5">                                    
                    <span className="self-center whitespace-nowrap">{ user?.response.result.name } </span>
                </div> 
                <a href="#" className="text-xl font-bold flex items-center lg:ml-2.5">
                <img src="https://demo.themesberg.com/windster/images/logo.svg" className="h-6 mr-2" alt="Logo"/>
                <span className="self-center whitespace-nowrap">Logo</span>
                </a>                
                </div>
                <div className="flex items-center">
                <div className="hidden lg:flex items-center">                    
                    <div className="-mb-1">
                        <Link href="/cabpg" className="github-button" data-color-scheme="no-preference: dark; light: light; dark: light;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star themesberg/windster-tailwind-css-dashboard on GitHub">Load Cabpg</Link>
                    </div>
                </div>
                <a href="/driverpg" className="hidden sm:inline-flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3">
                    Load Driverpg
                </a>
                </div>
            </div>
        </div>
        </nav>
    )
}

export default Navbar;
