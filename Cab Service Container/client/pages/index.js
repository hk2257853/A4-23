import Head from 'next/head'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cab_mobile_app, loginBackground } from '../assets';
import work from '../data/HowBostonWorks';

export default function Home() {
  const [works, setWorks] = useState(work)
  const [cost,setCost] = useState(0)
  const [places,setPlaces] = useState({source:"",destination:"",})

  const handleChange = (e) => {
    setPlaces({...places,[e.target.name]:e.target.value})
  }

  const handleEstimateCost = () => {
      // TODO: Not necessary => Basically calculate distance b/w two points and for first 10 km cost/km = 10 and beyond 10 km cost/km increases to 15
  }
  return (
    <div>
      <Head>
        <title>Microfrontends Demo</title>
        <meta name="description" content="Demo for Microfrontends using Module Federation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-[#f7f7f7] min-h-screen'>
        <div className="py-20 container mx-auto p-4 w-4/5 md:w-2/3">
          {/* First section */}
          <section className="flex flex-col-reverse md:flex-row md:flex-wrap md:justify-around items-center justify-center">
            <div className='md:w-1/3'>
              <h1 className="text-xl md:text-3xl font-bold">Find a ride when you want at the right price</h1>
              <p className='text-xs md:text-sm text-gray-600 mt-2 md:mt-6'>With Boston, Know the rate you are paying. Feel ease with an authorized driver and vehicle. Enjoy the convenience</p>
            </div>
            <div className='md:w-3/5 flex justify-center items-center'>
              <Image src={loginBackground} className="w-full" />
            </div>
          </section>
          {/* About section */}
          <section className='flex flex-col md:flex-row gap-3 md:justify-evenly md:items-center'>
            <div className='flex items-center justify-center'>
              <Image src={cab_mobile_app} className="w-full" />
            </div>
            <div className='md:w-1/2 mx-auto'>
              <h3 className='uppercase text-lg md:text-2xl font-bold tracking-widest text-center md:text-left'>About Boston</h3>
              <p className='text-xs text-gray-600 mt-4'>
                Boston is a cab services web app that makes it easy, convenient, and affordable to book a taxi.We're committed to providing our customers with the best possible experience. That's why we're always looking for ways to improve our service. If you have any feedback, please don't hesitate to contact us.
              </p>
              <p className='text-xs text-gray-600 mt-4 hidden md:block'>
                We offer a wide range of features to make your ride as smooth and convenient as possible, including:
              </p>
              <ul className='list-disc mt-1 text-xs text-gray-600 mx-4 hidden md:block'>
                <li className='mx-2'>Real-time tracking of your ride</li>
                <li className='mx-2'>Secure payment options</li>
                <li className='mx-2'>24/7 customer support</li>
                <li className='mx-2'>A variety of vehicle options to suit your needs</li>
                <li className='mx-2'>Competitive fares</li>
              </ul>
              <p className='text-xs text-gray-600 mt-4 hidden md:block'>
                Thank you for choosing Boston. We hope you have a safe and enjoyable ride.
              </p>
              <button className='flex items-center justify-center mx-auto mt-6'>
                <Link href="/auth/register" className='text-white bg-[#fbb72e] hover:scale-110 px-3 py-2 rounded-xl text-xs'>Sign up to Boston</Link>
              </button>
            </div>
          </section>
          {/* How Boston Works */}
          <section className='mt-8'>
            <h3 className="text-xl md:text-2xl font-bold tracking-widest text-center">How Boston Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-y-6">
              {works.map(work => {
                return (
                  <div className="flex gap-x-8 items-center justify-center">
                    <div className="flex justify-center items-center w-1/5">
                      <Image src={work.image} className="w-full" />
                    </div>
                    <div>
                      <h5 className='text-gray-600 font-bold text-sm md:text-lg'>{work.title}</h5>
                      <ul className="list-none mx-4">
                        {work.desc.map(feature => {
                          return (
                            <li className="flex items-center">
                              <span className="block w-2 h-2 mx-2 bg-yellow-500"></span>
                              <span className="text-xs text-gray-600">{feature}</span>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
          {/* Get a Fare Estimate */}
          <section className="mt-16 text-gray-600">
            <h3 className="text-xl tracking-wider font-bold uppercase text-center">Get A Fare Estimate</h3>
            <p className="text-xs mt-4 text-center mx-auto md:w-2/3">How much will riding with Boston cost? Simply enter your pick up location and destination and our fare calculator will provide you will an estimate of your total fare</p>
            <form className='md:w-2/5 mx-auto mt-8'>
              <div className="flex flex-col mb-4">
                <label htmlFor="pickup" className="text-xs tracking-wider mb-2">Pickup Location</label>
                <input type="text" id="pickup" className="border-b bg-[#f7f7f7] border-gray-400 rounded py-2 px-3 w-full" name="source" onChange={handleChange}/>
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="destination" className="text-xs tracking-wider mb-2">Destination Location</label>
                <input type="text" id="destination" className="border-b bg-[#f7f7f7] border-gray-400 rounded py-2 px-3 w-full" name="destination" onChange={handleChange}/>
              </div>
              <div className="flex justify-center">
                <button className="text-[#f7f7f7] bg-black hover:border-black hover:shadow-lg hover:border hover:scale-x-105 hover:text-black hover:bg-[#f7f7f7] font-bold py-2 px-4 rounded uppercase" onClick={handleEstimateCost}>Estimate</button>
              </div>
            </form>
          </section>
        </div>
        <footer className="mb-8 bottom-0 w-full text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Boston Company S.I. | All rights reserved.</p>
        </footer>
      </main>
    </div>
  )
}
