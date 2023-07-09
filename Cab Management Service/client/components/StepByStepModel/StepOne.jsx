import { useState, useEffect } from 'react';

function StepOne({ onNext }) {
    const [driver, setDriver] = useState({ "name": "", "email": "", "phone": "" });
    const [drivers, setDrivers] = useState([
        { name: 'John Doe', email: 'johndoe@example.com', phone: '555-555-5555' },
        { name: 'Jane Smith', email: 'janesmith@example.com', phone: '555-555-5555' },
        { name: 'Bob Johnson', email: 'bobjohnson@example.com', phone: '555-555-5555' },
        { name: 'Sara Lee', email: 'saralee@example.com', phone: '555-555-5555' },
        { name: 'Mike Brown', email: 'mikebrown@example.com', phone: '555-555-5555' },
        { name: 'Emily Davis', email: 'emilydavis@example.com', phone: '555-555-5555' },
        { name: 'Tom Wilson', email: 'tomwilson@example.com', phone: '555-555-5555' },
        { name: 'Amy Lee', email: 'amylee@example.com', phone: '555-555-5555' },
        { name: 'David Kim', email: 'davidkim@example.com', phone: '555-555-5555' },
        { name: 'Lisa Chen', email: 'lisachen@example.com', phone: '555-555-5155' },
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
        <section className="min-h-screen bg-[#f7f7f7]">
            <div className="mx-auto w-3/4 md:w-2/5">
                <div className="flex items-center justify-center mb-16 pt-20">
                    <span className='bg-cyan-600 text-white px-2 rounded-full'>1</span>
                    <span className="border h-[3px] w-40 md:w-72 border-cyan-600 bg-white"></span>
                    <span className='bg-white border-cyan-600 border text-cyan-600 px-2 rounded-full'>2</span>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-center font-bold uppercase text-2xl tracking-wider mb-6">Select Driver</h2>
                    <form className="mx-auto">
                        <div className="w-full mb-6">
                            <label className="block uppercase tracking-wide font-bold text-xs mb-2 ml-1" htmlFor="driver">
                                Select Driver
                            </label>
                            <select
                                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                name="name"
                                value={driver.name}
                                onChange={handleChange}
                            >
                                {driver.name == "" && <option value="">Select an option</option>}
                                {drivers.map((driver, index) => (
                                    <option key={index} value={driver.name}>
                                        {driver.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {/* <div className="mb-6 w-full">
                            <label className="block uppercase tracking-wide font-bold text-xs mb-2 ml-1" htmlFor="name">
                                ID
                            </label>
                            <input className="block w-full border-b border-black focus:border-blue-700 focus:rounded py-2 px-4 mb-3 leading-tight focus:border focus:outline-none focus:bg-white focus:shadow" id="id" name='id' readOnly value={driver.id}/>
                        </div> */}
                        <div className="mb-6 w-full">
                            <label className="block uppercase tracking-wide font-bold text-xs mb-2 ml-1" htmlFor="name">
                                Email
                            </label>
                            <input className="block w-full border-b border-black focus:border-blue-700 focus:rounded py-2 px-4 mb-3 leading-tight focus:border focus:outline-none focus:bg-white focus:shadow" id="email" name='email' readOnly onChange={handleChange} value={driver.email} />
                        </div>
                        <div className="mb-6 w-full">
                            <label className="block uppercase tracking-wide font-bold text-xs mb-2 ml-1" htmlFor="contact">
                                Contact Number
                            </label>
                            <input className="block w-full border-b border-black focus:border-blue-700 focus:rounded py-2 px-4 mb-3 leading-tight focus:border focus:outline-none focus:bg-white focus:shadow" id="contact" name='contact' readOnly onChange={handleChange} value={driver.contact} />
                        </div>
                        <div className="flex justify-end">
                            <button
                                className={`bg-cyan-600 border text-white px-4 py-2 rounded uppercase tracking-widest font-bold hover:bg-white hover:text-cyan-600 hover:border-cyan-600 text-sm ${driver.name === '' ? "cursor-not-allowed" : "cursor-pointer"}`}
                                onClick={handleNext}
                                disabled={!driver.name}
                            >
                                Next
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default StepOne;