import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { loginBackground } from "../../../assets"
import { useRouter } from "next/router"


function SignUp() {
    const [formData, setFormData] = useState({ email: "", password: "", cpassword: "", type: "" })
    const router = useRouter();
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        router.push("/")

    }

    return (
        <>
            <Head>
                <title>Sign In</title>
            </Head>
            <div className="min-h-screen flex">
                <div className="items-center flex flex-col w-full md:w-1/2 my-20 md:mt-20">
                    <h3 className="font-extrabold text-3xl uppercase font-serif tracking-widest">Welcome</h3>
                    <p className="font-serif tracking-wider mt-4 w-4/5 md:w-1/2 text-sm">Register as a driver or passenger on our cab management website to enjoy convenient and reliable transportation services.</p>
                    <form className="mt-8">
                        <div className="w-full px-3 mb-8">
                            <label className="block uppercase tracking-wide font-serif text-xs font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input className="block w-72 md:w-96 border-b border-black focus:border-blue-700 focus:rounded py-2 px-4 mb-3 leading-tight focus:border focus:outline-none focus:bg-white focus:shadow" id="email" type="email" placeholder="johndoe@gmail.com" onChange={handleChange} name='email' />
                        </div>
                        <div className="w-full px-3 mb-8">
                            <label className="block uppercase tracking-wide font-serif text-xs font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input className="block w-72 md:w-96 border-b border-black focus:border-blue-700 focus:rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:shadow focus:border" id="password" type="password" onChange={handleChange} name='password' />
                        </div>
                        <div className="w-full px-3 mb-8">
                            <label className="block uppercase tracking-wide font-serif text-xs font-bold mb-2" htmlFor="cpassword">
                                Confirm Password
                            </label>
                            <input className="block w-72 md:w-96 border-b border-black focus:border-blue-700 focus:rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:shadow focus:border" id="cpassword" type="password" onChange={handleChange} name='cpassword' />
                        </div>
                        <div className="w-full px-3 mb-6">
                            <label className="block uppercase tracking-wide font-serif text-xs font-bold mb-2" htmlFor="type">
                                Select Account Type
                            </label>
                            <select onChange={handleChange} className="appearance-none bg-white border-b border-black focus:border-blue-700  rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:shadow-outline" name="type" defaultValue="">
                                <option value="">Select an option</option>
                                <option value="driver">Driver</option>
                                <option value="passenger">Passenger</option>
                            </select>
                        </div>
                        <button className="w-full hover:bg-black hover:text-white px-3 py-2 rounded uppercase border border-black tracking-widest font-serif" onClick={handleSubmit}>Register</button>
                    </form>
                    <p className="text-sm mt-4 font-serif tracking-widest">Already have an account? <Link href="/auth/login" className="font-bold font-serif underline-offset-4 underline uppercase">Sign in</Link></p>
                </div>
                <div className="hidden md:w-1/2 md:block">
                    <Image src={loginBackground} className="w-full max-h-screen" alt="Background" priority />
                </div>
            </div>
        </>
    )
}

export default SignUp