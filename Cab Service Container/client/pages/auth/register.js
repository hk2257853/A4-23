import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { loginBackground } from "../../assets"
import { useRouter } from "next/router"
import * as api from "../../api/index"
import { toast } from 'react-toastify';
import { Formik, Form, Field, ErrorMessage } from "formik";
import SignUpSchema from "../../schema/SignUpSchema"

function SignUp() {
    const router = useRouter();

    const handleSubmit = (values) => {
        console.log(values)
        signup(values);
    }

    const signup = (formData) => {
        api.signUp(formData)
            .then((res) => {
                const response = res.data;

                localStorage.setItem("profile", JSON.stringify({ response }));
                toast.success("Account created successfully!");
                router.push("/driverpg");
            })
            .catch(error => {
                console.log(error)
                toast.error(error.response.data.message);
            });
    };

    return (
        <>
            <Head>
                <title>Sign Up</title>
            </Head>
            <div className="min-h-screen flex bg-[#f7f7f7]">
                <div className="items-center flex flex-col w-full md:w-1/2 my-20 md:mt-20">
                    <h3 className="font-extrabold text-3xl uppercase font-serif tracking-widest">Welcome</h3>
                    <p className="font-serif tracking-wider mt-4 w-4/5 md:w-1/2 text-sm">Register as a driver or passenger on our cab management website to enjoy convenient and reliable transportation services.</p>
                    <Formik
                        initialValues={{ name: "", email: "", password: "", cpassword: "", utype: "" }}
                        validationSchema={SignUpSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched }) => (
                            <Form className="mt-8">
                                <div className="w-full px-3 mb-8">
                                    <label className="block uppercase tracking-wide font-serif text-xs font-bold mb-2" htmlFor="text">
                                        Name
                                    </label>
                                    <Field className="bg-[#f7f7f7] block w-72 md:w-96 border-b border-black focus:border-blue-700 focus:rounded py-2 px-4 mb-3 leading-tight focus:border focus:outline-none focus:bg-white focus:shadow" id="name" type="text" placeholder="John Doe" name='name' />
                                    <ErrorMessage name="name" component="div" className="text-red-500 text-xs mt-1" />
                                </div>
                                <div className="w-full px-3 mb-8">
                                    <label className="block uppercase tracking-wide font-serif text-xs font-bold mb-2" htmlFor="email">
                                        Email
                                    </label>
                                    <Field className="bg-[#f7f7f7] block w-72 md:w-96 border-b border-black focus:border-blue-700 focus:rounded py-2 px-4 mb-3 leading-tight focus:border focus:outline-none focus:bg-white focus:shadow" id="email" type="email" placeholder="johndoe@gmail.com" name='email' autoComplete="username"/>
                                    <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                                </div>
                                <div className="w-full px-3 mb-8">
                                    <label className="block uppercase tracking-wide font-serif text-xs font-bold mb-2" htmlFor="password">
                                        Password
                                    </label>
                                    <Field className="bg-[#f7f7f7] block w-72 md:w-96 border-b border-black focus:border-blue-700 focus:rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:shadow focus:border" id="password" type="password" name='password' autoComplete="new-password"/>
                                    <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
                                </div>
                                <div className="w-full px-3 mb-8">
                                    <label className="block uppercase tracking-wide font-serif text-xs font-bold mb-2" htmlFor="cpassword">
                                        Confirm Password
                                    </label>
                                    <Field className="bg-[#f7f7f7] block w-72 md:w-96 border-b border-black focus:border-blue-700 focus:rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:shadow focus:border" id="cpassword" type="password" name='cpassword' autoComplete="new-password"/>
                                    <ErrorMessage name="cpassword" component="div" className="text-red-500 text-xs mt-1" />
                                </div>                                
                                <button className="w-full hover:bg-black hover:text-white px-3 py-2 rounded uppercase border border-black tracking-widest font-serif" type="submit">Register</button>
                            </Form>
                        )}
                    </Formik>
                    <p className="text-sm mt-4 font-serif tracking-widest">Already have an account? <Link href="/auth/login" className="font-bold font-serif underline-offset-4 underline uppercase">Sign in</Link></p>
                </div>
                <div className="hidden md:w-1/2 md:flex md:justify-center md:items-center bg-[#f7f7f7]">
                    <Image src={loginBackground} className="w-full max-h-screen" alt="Background" priority />
                </div>
            </div>
        </>
    )
}

export default SignUp