import { useState, useEffect } from "react";
import TableRow from "./TableRow";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import SearchBar from "./SearchBar";

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
      <SearchBar value={searchQuery} onChange={handleSearch} />
      
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
            <TableRow key={row.id} row={row} handleButtonClick={handleButtonClick} />
          ))}
        </tbody>
      </table>

      {isConfirmationOpen && (
        <DeleteConfirmationModal
        selectedRowName={data.find((row) => row.id === selectedRowId)?.name}
        closeModal={closeModal}
        handleConfirmDeletion={handleConfirmDeletion}
        />
      )}
      </div>
    </>
    );
  }
  
export default Table;