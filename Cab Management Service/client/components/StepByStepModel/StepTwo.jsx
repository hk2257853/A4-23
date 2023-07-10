import React, { useState,useEffect } from 'react';

function StepTwo({ data, onPrev, onComplete, setisModalOpen }) {
    const [cabs, setCabs] = useState([
        { registrationNo: 'ABC123', color: 'Red', model: 'Toyota Corolla' },
        { registrationNo: 'DEF456', color: 'Blue', model: 'Honda Civic' },
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
        <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block bg-white align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white mx-auto rounded-lg shadow-lg p-8">
            <div className="flex justify-between items-center">
            <h2 className="text-center font-bold uppercase text-2xl tracking-wider mb-6">
                Select Cab
            </h2>
            <button className="p-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm mt-3 inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-gray-700 hover:bg-gray-50" onClick={() => setisModalOpen(false)}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-4 h-4"
                                        >
                                            <line x1="18" y1="6" x2="6" y2="18" />
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </button>
                                </div>
            <form>
                <div className="mb-6">
                <label
                    className="block uppercase tracking-wide font-bold text-xs mb-2 ml-1"
                    htmlFor="cab"
                >
                    Select Cab
                </label>
                <select
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    value={selectedCab.registrationNo}
                >
                    {selectedCab.registrationNo === '' && (
                    <option value="">Select an option</option>
                    )}
                    {cabs.map((cab, index) => (
                    <option key={index} value={cab.registrationNo}>
                        {cab.registrationNo}
                    </option>
                    ))}
                </select>
                </div>
                <div className="mb-6">
                <label
                    className="block uppercase tracking-wide font-bold text-xs mb-2 ml-1"
                    htmlFor="registrationNo"
                >
                    Registration Number
                </label>
                <input
                    className="block w-full border-b border-black focus:border-blue-700 focus:rounded py-2 px-4 mb-3 leading-tight focus:border focus:outline-none focus:bg-white focus:shadow"
                    id="registrationNo"
                    name="registrationNo"
                    readOnly
                    value={selectedCab.registrationNo}
                />
                </div>
                <div className="mb-6">
                <label
                    className="block uppercase tracking-wide font-bold text-xs mb-2 ml-1"
                    htmlFor="model"
                >
                    Model
                </label>
                <input
                    className="block w-full border-b border-black focus:border-blue-700 focus:rounded py-2 px-4 mb-3 leading-tight focus:border focus:outline-none focus:bg-white focus:shadow"
                    id="model"
                    name="model"
                    readOnly
                    onChange={handleChange}
                    value={selectedCab.model}
                />
                </div>
                <div className="mb-6">
                <label
                    className="block uppercase tracking-wide font-bold text-xs mb-2 ml-1"
                    htmlFor="color"
                >
                    Color
                </label>
                <input
                    className="block w-full border-b border-black focus:border-blue-700 focus:rounded py-2 px-4 mb-3 leading-tight focus:border focus:outline-none focus:bg-white focus:shadow"
                    id="color"
                    name="color"
                    readOnly
                    onChange={handleChange}
                    value={selectedCab.color}
                />
                </div>
                <div className="flex justify-end gap-x-2">
                <button className="bg-cyan-600 border text-white px-4 py-2 rounded uppercase tracking-widest font-bold hover:bg-white hover:text-cyan-600 hover:border-cyan-600 text-sm" onClick={handlePrev}>
                    Previous
                </button>
                <button
                    className={`bg-cyan-600 border text-white px-4 py-2 rounded uppercase tracking-widest font-bold hover:bg-white hover:text-cyan-600 hover:border-cyan-600 text-sm ${
                    !selectedCab.registrationNo ? 'cursor-not-allowed' : ''
                    }`}
                    onClick={handleComplete}
                    disabled={!selectedCab.registrationNo}
                >
                    Submit
                </button>
                </div>
            </form>
            </div>
            </div>
        </div>
        </div>
    );
}

export default StepTwo;