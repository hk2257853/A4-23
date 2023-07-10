import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { loginBackground } from "../../assets"
import { useRouter } from "next/router"
import * as api from "../../api/index"
import { toast } from 'react-toastify';
import LoginSchema from "../../schema/LoginSchema"
import { Formik, Form, Field, ErrorMessage } from "formik";

function SignIn() {
    const router = useRouter()

    const handleSubmit = (values) => {
        console.log(values)
        signin(values);
    }

    const signin = (formData) => {
        api.signIn(formData)
            .then((res) => {
                const response = res.data;

                localStorage.setItem("profile", JSON.stringify({ response }));
                toast.success("Logged in successfully!");
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
                <title>Sign In</title>
            </Head>
            <div className="min-h-screen flex">
                <div className="items-center flex flex-col w-full md:w-1/2 mt-32">
                    <h3 className="font-extrabold text-3xl uppercase font-serif tracking-widest">Welcome back</h3>
                    <p className="font-serif tracking-wider mt-4">Welcome back! Please enter your details</p>
                    <Formik
                        initialValues={{ email: "", password: "", utype: "" }}
                        validationSchema={LoginSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched }) => (
                            <Form className="mt-8">
                                <div className="w-full px-3 mb-8">
                                    <label className="block uppercase tracking-wide font-serif text-xs font-bold mb-2" htmlFor="email">
                                        Email
                                    </label>
                                    <Field className="block w-72 md:w-96 border-b border-black focus:border-blue-700 focus:rounded py-2 px-4 mb-3 leading-tight focus:border focus:outline-none focus:bg-white focus:shadow" id="email" type="email" placeholder="johndoe@gmail.com" name='email' autoComplete="username"/>
                                    <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                                </div>
                                <div className="w-full px-3 mb-2">
                                    <label className="block uppercase tracking-wide font-serif text-xs font-bold mb-2" htmlFor="email">
                                        Password
                                    </label>
                                    <Field className="block w-72 md:w-96 border-b border-black focus:border-blue-700 focus:rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:shadow focus:border" id="password" type="password" name='password' autoComplete="current-password" />
                                    <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
                                </div>                                
                                <button className="w-full hover:bg-black hover:text-white p-3 rounded mt-8 uppercase border border-black tracking-widest font-serif" type="submit">Login</button>
                            </Form>
                        )}
                    </Formik>
                    <div className="flex flex-col md:flex-row gap-1 justify-center items-center mt-4 text-sm font-serif ">
                        <p className="tracking-widest">Don't have an account yet?</p>
                        <Link href="/auth/register" className="font-bold underline-offset-4 underline uppercase">Sign up for free</Link>
                    </div>
                </div>
                <div className="hidden md:w-1/2 md:block">
                    <Image src={loginBackground} className="w-full max-h-screen" alt="Background" priority />
                </div>
            </div>
        </>
    )
}

export default SignIn