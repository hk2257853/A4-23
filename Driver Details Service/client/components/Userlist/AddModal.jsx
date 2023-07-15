import { useState, useEffect } from 'react';
import * as api from "../../api"
import { toast } from 'react-toastify';

// exposing mongodb id can cause security issues? not an issue it seems https://www.reddit.com/r/mongodb/comments/hmav7b/is_it_safe_to_use_mongodbs_id_on_the_frontend/

function AddModal(props) {
    let { setisModalOpen, heading, setData, data, selectedDriver, setSelectedRowId } = props;
    const [driverDetails, setDriverDetails,] = useState({ name: "", email: "", contact: "" })
    const [title, setTitle] = useState(heading)

    useEffect(() => {
        if (selectedDriver) {
            setDriverDetails(selectedDriver);
            setTitle("Edit");
            setSelectedRowId(null)
        }
    }, []);

    const handleChange = (e) => {
        setDriverDetails({ ...driverDetails, [e.target.name]: e.target.value })
    }

    const addDriver = () => {
        
        // Add the data to backend
        api.createDriverData(driverDetails)
        .then((res) => {
            toast.success("Driver details added successfully!");
            const newDriverDetails = res.data.newData;
            console.log(newDriverDetails)
            setData([...data, newDriverDetails])
            })
            .catch(error => {
                console.log(error)
                if(error.response.data.message) toast.error(error.response.data.message);
                else toast.error("Something went wrong, Please try again later");
        });


        setisModalOpen(false)
    }

    const editDriver = () => {
        const newUpdatedData = data.map((driver) => {
            if (driver._id === driverDetails._id) {
                return driverDetails;
            } else {
                return driver;
            }
        });

        // Add the updated data to backend
        api.updateDriverData(driverDetails._id, driverDetails)
        .then((res) => {
            toast.success("Driver details updated successfully!");            
            setData(newUpdatedData);
        })
        .catch(error => {
            console.log(error)
            if(error.response.data.message) toast.error(error.response.data.message);
            else toast.error("Something went wrong, Please try again later");
        });

        setisModalOpen(false)

    }


    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen mt-12 md:mt-0 md:pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                {/* This element is to trick the browser into centering the modal contents. */}
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                {/* This element is to trick the browser into centering the modal contents. */}
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <div className="flex justify-between items-center">
                                    <h3 className="md:text-2xl leading-6 font-medium text-gray-900" id="modal-headline text-sm">
                                        {title} Driver
                                    </h3>
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
                                <div className="mt-8">
                                    <form className="w-full max-w-lg">
                                        <div className="flex flex-wrap -mx-3 mb-4">
                                            <div className="w-full px-3 mb-6">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="driver-name">
                                                    Driver Name
                                                </label>
                                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="driver-name" type="text" placeholder="John Doe" onChange={handleChange} name="name" value={driverDetails.name} />
                                            </div>
                                            <div className="w-full px-3 mb-6">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                                                    Email
                                                </label>
                                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="email" placeholder="example@example.com" onChange={handleChange} name="email" value={driverDetails.email} />
                                            </div>
                                            <div className="w-full px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="contact-no">
                                                    Contact Number
                                                </label>
                                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="contact-no" type="tel" placeholder="1234567890" onChange={handleChange} name='contact' value={driverDetails.contact} />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse mb-8">
                        <button className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={title === 'Add' ? addDriver : editDriver}>
                            {title} Driver
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddModal;
