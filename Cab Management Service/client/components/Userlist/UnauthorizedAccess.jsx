import Link from 'next/link';

function UnauthorizedAccessPage() {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50"></div>
            <div className="bg-white p-6 rounded-lg w-[90%] shadow-md md:w-auto z-10 mx-auto">
                <h2 className="text-xl font-bold mb-2 text-gray-600 text-center tracking-wider">
                    You are not authorized to access this page
                </h2>
                <p className="text-gray-600 mb-4 text-xs md:text-sm text-center">
                    You need to sign in to access this page
                </p>
                <div className="flex items-center justify-center gap-x-2">
                    <Link
                        href="http://localhost:3000/auth/login"
                        className="border text-cyan-600 border-cyan-600  hover:bg-cyan-600 hover:text-white font-semibold py-2 px-4 rounded uppercase text-xs ease-in-out duration-150 hover:scale-105 md:text-sm"
                    >
                        Sign In
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default UnauthorizedAccessPage;