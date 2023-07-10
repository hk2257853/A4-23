import { useState, useEffect } from 'react';

function StepOne({ onNext, setisModalOpen }) {
    const [driver, setDriver] = useState({ "name": "", "email": "", "phone": "" });
    const [drivers, setDrivers] = useState([
        { name: 'John Doe', email: 'johndoe@example.com', phone: '555-555-5555' },
        { name: 'Jane Smith', email: 'janesmith@example.com', phone: '555-555-5555' },
        { name: 'Bob Johnson', email: 'bobjohnson@example.com', phone: '555-555-5555' },
    ]);

    const handleChange = (e) => {
        const selectedDriver = drivers.find((driver) => driver.name === e.target.value);
        setDriver({
            ...driver,
            name: e.target.value,
            email: selectedDriver.email,
            contact: selectedDriver.phone,
        });
    };

    const handleNext = () => {
        localStorage.setItem('driver', JSON.stringify(driver));
        onNext(driver);
    };

    useEffect(() => {
        const driver = localStorage.getItem('driver');
        if (driver) {
            setDriver(JSON.parse(driver));
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
                Select Driver
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
                    htmlFor="driver"
                >
                    Select Driver
                </label>
                <select
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    name="name"
                    value={driver.name}
                    onChange={handleChange}
                >
                    {driver.name === '' && <option value="">Select an option</option>}
                    {drivers.map((driver, index) => (
                    <option key={index} value={driver.name}>
                        {driver.name}
                    </option>
                    ))}
                </select>
                </div>
                <div className="mb-6">
                <label
                    className="block uppercase tracking-wide font-bold text-xs mb-2 ml-1"
                    htmlFor="name"
                >
                    Email
                </label>
                <input
                    className="block w-full border-b border-black focus:border-blue-700 focus:rounded py-2 px-4 mb-3 leading-tight focus:border focus:outline-none focus:bg-white focus:shadow"
                    id="email"
                    name="email"
                    readOnly
                    onChange={handleChange}
                    value={driver.email}
                />
                </div>
                <div className="mb-6">
                <label
                    className="block uppercase tracking-wide font-bold text-xs mb-2 ml-1"
                    htmlFor="contact"
                >
                    Contact Number
                </label>
                <input
                    className="block w-full border-b border-black focus:border-blue-700 focus:rounded py-2 px-4 mb-3 leading-tight focus:border focus:outline-none focus:bg-white focus:shadow"
                    id="contact"
                    name="contact"
                    readOnly
                    onChange={handleChange}
                    value={driver.contact}
                />
                </div>
                <div className="flex justify-end">
                <button
                    className={`bg-cyan-600 border text-white px-4 py-2 rounded uppercase tracking-widest font-bold hover:bg-white hover:text-cyan-600 hover:border-cyan-600 text-sm ${
                    driver.name === '' ? 'cursor-not-allowed' : 'cursor-pointer'
                    }`}
                    onClick={handleNext}
                    disabled={!driver.name}
                >
                    Next
                </button>
                </div>
            </form>
            </div>
            </div>
        </div>
        </div>
    );
}

export default StepOne;