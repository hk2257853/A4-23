"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFoundImage } from "../assets";
import Head from "next/head";

function Custom404() {
    return (
        <>
            <Head>
                <title>Page Not Found</title>
            </Head>
            <section className="flex flex-col items-center justify-center min-h-screen py-12 bg-[#f7f7f7]">
                <div className="max-w-md px-4">
                    <div>
                        <Image
                            src={notFoundImage}
                            alt="Not Found Image"
                            width={500}
                            height={300}
                            className="rounded-lg"
                            priority
                        />
                    </div>
                    <h1 className="text-2xl font-bold mb-4 text-center">
                        Whoops, that page is gone.
                    </h1>
                    <p className="text-gray-600 text-sm mb-6 text-center">
                        We couldn't find the page you're looking for.
                    </p>
                    <div className="flex justify-center items-center">
                        <Link href="/" passHref className="inline-block border-black border hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded uppercase transform transition duration-500 ease-in-out hover:scale-110">
                            Go back to Homepage
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Custom404;
