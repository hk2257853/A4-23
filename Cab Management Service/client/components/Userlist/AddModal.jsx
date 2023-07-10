import { useState, useEffect } from 'react';
import * as api from "../../api"
import { toast } from 'react-toastify';

function AddModal(props) {
    let { setisModalOpen, heading, setData, data, selectedCab, setSelectedRowId } = props;
    const [cabDetails, setCabDetails,] = useState({ regno: "", model: "", colour: "" })
    const [title, setTitle] = useState(heading)

    useEffect(() => {
        if (selectedCab) {
            setCabDetails(selectedCab);
            setTitle("Edit");
            setSelectedRowId(null)
        }
    }, []);

    const handleChange = (e) => {
        setCabDetails({ ...cabDetails, [e.target.name]: e.target.value })
    }

    const addCab = () => {
        
        // Add the data to backend
        api.createCabData(cabDetails)
        .then((res) => {
            toast.success("Cab details added successfully!");
            setData([...data, cabDetails])
            })
            .catch(error => {
                console.log(error)
                if(error.response.data.message) toast.error(error.response.data.message);
                else toast.error("Something went wrong, Please try again later");
        });


        setisModalOpen(false)
    }

    const editCab = () => {
        const newUpdatedData = data.map((cab) => {
            if (cab._id === cabDetails._id) {
                return cabDetails;
            } else {
                return cab;
            }
        });

        // Add the updated data to backend
        api.updateCabData(cabDetails._id, cabDetails)
        .then((res) => {
            toast.success("Cab details updated successfully!");            
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
                                        {title} Cab
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
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="cab-regno">
                                                    Cab Name
                                                </label>
                                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="cab-regno" type="text" placeholder="John Doe" onChange={handleChange} name="regno" value={cabDetails.regno} />
                                            </div>
                                            <div className="w-full px-3 mb-6">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="model">
                                                    Model
                                                </label>
                                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="model" type="model" placeholder="example@example.com" onChange={handleChange} name="model" value={cabDetails.model} />
                                            </div>
                                            <div className="w-full px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="colour-no">
                                                    Colour
                                                </label>
                                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="colour-no" type="tel" placeholder="1234567890" onChange={handleChange} name='colour' value={cabDetails.colour} />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse mb-8">
                        <button className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={title === 'Add' ? addCab : editCab}>
                            {title} Cab
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddModal;
