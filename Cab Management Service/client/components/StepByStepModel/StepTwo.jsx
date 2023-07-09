import React, { useState,useEffect } from 'react';

function StepTwo({ data, onPrev, onComplete }) {
    const [cabs, setCabs] = useState([
        { registrationNo: 'ABC123', color: 'Red', model: 'Toyota Corolla' },
        { registrationNo: 'DEF456', color: 'Blue', model: 'Honda Civic' },
        { registrationNo: 'GHI789', color: 'Green', model: 'Nissan Altima' },
        { registrationNo: 'JKL012', color: 'Black', model: 'Ford Mustang' },
        { registrationNo: 'MNO345', color: 'White', model: 'Chevrolet Camaro' },
        { registrationNo: 'PQR678', color: 'Silver', model: 'BMW 3 Series' },
        { registrationNo: 'STU901', color: 'Gray', model: 'Mercedes-Benz C-Class' },
        { registrationNo: 'VWX234', color: 'Yellow', model: 'Audi A4' },
        { registrationNo: 'YZA567', color: 'Orange', model: 'Lexus ES' },
        { registrationNo: 'BCD890', color: 'Purple', model: 'Tesla Model S' },
    ])
    const [selectedCab, setSelectedCab] = useState({ "registrationNo": "", "model": "", "color": "" })

    const handleChange = (e) => {
        const selectedCab = cabs.find((cab) => cab.registrationNo === e.target.value);
        if (selectedCab) {
            setSelectedCab({
                registrationNo: selectedCab.registrationNo,
                color: selectedCab.color,
                model: selectedCab.model,
            });
        }
    };

    const handlePrev = () => {
        localStorage.setItem('cab', JSON.stringify(selectedCab));
        onPrev();
    };

    const handleComplete = (e) => {
        e.preventDefault();
        localStorage.removeItem('cab');
        localStorage.removeItem('driver');
        onComplete({ ...data, selectedCab });
    };

    useEffect(() => {
        const cab = localStorage.getItem('cab');
        if (cab) {
            setSelectedCab(JSON.parse(cab));
        }
    }, []);

    return (
        <section className="min-h-screen bg-[#f7f7f7]">
            <div className="mx-auto w-3/4 md:w-2/5">
                <div className="flex items-center justify-center mb-16 pt-20">
                    <span className='bg-cyan-600 text-white px-2 rounded-full'>1</span>
                    <span className="border h-[3px] w-40 md:w-72 border-cyan-600 bg-white"></span>
                    <span className='bg-cyan-600 text-white rounded-full px-2 '>2</span>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-center font-bold uppercase text-2xl tracking-wider mb-6">Select Cab</h2>
                    <form className="mx-auto">
                        <div className="w-full mb-6">
                            <label className="block uppercase tracking-wide font-bold text-xs mb-2 ml-1" htmlFor="driver">
                                Select Cab
                            </label>
                            <select
                                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                name="name"
                                onChange={handleChange}
                                value={selectedCab.registrationNo}
                            >
                                {selectedCab.registrationNo === "" && <option value="">Select an option</option>}
                                {cabs.map((cab, index) => (
                                    <option key={index} value={cab.registrationNo}>
                                        {cab.registrationNo}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-6 w-full">
                            <label className="block uppercase tracking-wide font-bold text-xs mb-2 ml-1" htmlFor="name">
                                Registration Number
                            </label>
                            <input className="block w-full border-b border-black focus:border-blue-700 focus:rounded py-2 px-4 mb-3 leading-tight focus:border focus:outline-none focus:bg-white focus:shadow" id="id" name='id' readOnly value={selectedCab.registrationNo} />
                        </div>
                        <div className="mb-6 w-full">
                            <label className="block uppercase tracking-wide font-bold text-xs mb-2 ml-1" htmlFor="name">
                                Model
                            </label>
                            <input className="block w-full border-b border-black focus:border-blue-700 focus:rounded py-2 px-4 mb-3 leading-tight focus:border focus:outline-none focus:bg-white focus:shadow" id="email" name='email' readOnly onChange={handleChange} value={selectedCab.model} />
                        </div>
                        <div className="mb-6 w-full">
                            <label className="block uppercase tracking-wide font-bold text-xs mb-2 ml-1" htmlFor="contact">
                                Color
                            </label>
                            <input className="block w-full border-b border-black focus:border-blue-700 focus:rounded py-2 px-4 mb-3 leading-tight focus:border focus:outline-none focus:bg-white focus:shadow" id="contact" name='contact' readOnly onChange={handleChange} value={selectedCab.color} />
                        </div>
                        <div className="flex justify-end gap-x-2">
                            <button className="bg-cyan-600 border text-white px-4 py-2 rounded uppercase tracking-widest font-bold hover:bg-white hover:text-cyan-600 hover:border-cyan-600 text-sm" onClick={handlePrev}>Previous</button>
                            <button className="bg-cyan-600 border text-white px-4 py-2 rounded uppercase tracking-widest font-bold hover:bg-white hover:text-cyan-600 hover:border-cyan-600 text-sm" onClick={handleComplete} disabled={!selectedCab.registrationNo}>Submit</button>

                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default StepTwo;