import { useState, useEffect } from "react";

function Table() {
    const [data, setData] = useState([]);
    const [selectedRowId, setSelectedRowId] = useState(null);
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);    
    const [searchQuery, setSearchQuery] = useState("");
  
    useEffect(() => {
        const hardcodedData = [
          { id: 1, name: 'John Doe', email: 'johndoe@example.com', contactNo: '1234567890'},
          { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', contactNo: '9876543210'},
          { id: 3, name: 'John Doe1', email: 'johndoe@example.com', contactNo: '1234567890'},
          { id: 4, name: 'Jane Smith2', email: 'janesmith@example.com', contactNo: '9876543210'},
          { id: 12, name: 'John Doe3', email: 'johndoe@example.com', contactNo: '1234567890'},
          { id: 23, name: 'Jane Smith4', email: 'janesmith@example.com', contactNo: '9876543210'},
        ];
      
        setData(hardcodedData);
    }, []);

    const handleButtonClick = (id) => {
      setSelectedRowId(id);
      setIsConfirmationOpen(true);
    };
    
    const handleConfirmDeletion = () => {
      const updatedData = data.filter((row) => row.id !== selectedRowId);
      setData(updatedData);
    
      setIsConfirmationOpen(false);
    };


    function closeModal() {
      setIsConfirmationOpen(false);
    }  

    const handleSearch = (event) => {
      setSearchQuery(event.target.value);
    };

    const filteredData = data.filter((row) =>
    row.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
    
    return (
      <>
      <div className="pt-2 my-4 flex justify-center">
        <input
          type="text"
          placeholder="Search by name"
          className="border border-gray-300 px-4 py-2 rounded-md"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      
      <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
          <th className="py-2 text-center px-4">ID</th>
          <th className="py-2 text-center px-4">Name</th>
          <th className="py-2 text-center px-4">Email</th>
          <th className="py-2 text-center px-4">Contact No</th>
          <th className="py-2 text-center px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row) => (
            <tr key={row.id} className="divide-y">
              <td className="py-2 text-center px-4">{row.id}</td>
              <td className="py-2 text-center px-4">{row.name}</td>
              <td className="py-2 text-center px-4">{row.email}</td>
              <td className="py-2 text-center px-4">{row.contactNo}</td>
              <td className="py-2 text-center px-4">
              <div className="flex items-center justify-center px-4">
                <button className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center" onClick={() => handleButtonClick(row.id)}>
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
            </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isConfirmationOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <p>Are you sure you want to delete {data.find((row) => row.id === selectedRowId)?.name}?</p>
            <div className="mt-4 flex justify-end">
              <button className="mr-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-md" onClick={closeModal}>
                Cancel
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded-md" onClick={handleConfirmDeletion}>
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
    );
  }
  
export default Table;