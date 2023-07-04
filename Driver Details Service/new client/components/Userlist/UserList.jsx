import { useState, useEffect } from "react";
import TableRow from "./TableRow";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import SearchBar from "./SearchBar";
import AddModal from "./AddModal";
import { useRouter } from "next/router"
import * as api from '../../api'

// TODO: put features like dashboard, pagination and sort table option

function Table() {
  const [data, setData] = useState([]);
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isModalOpen, setisModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  useEffect(() => {
    api.getDriverDatas()
        .then((res) => {
            setData(res.data);
      })
      .catch(error => {
        console.log(error)          
      });

    const user = JSON.parse(localStorage.getItem("profile"));
    if(!user)
    {
      router.push("/auth/login"); // TODO: should I put this in navbar?
    }
  }, []);

  // For Delete Modal
  const handleButtonClick = (id) => {
    setSelectedRowId(id);
    setIsConfirmationOpen(true);
  };

  const handleConfirmDeletion = () => {
    const updatedData = data.filter((row) => row._id !== selectedRowId);
    
    api.deleteDriverData(selectedRowId)
    .then((res) => {
      setData(updatedData);
    })
    .catch(error => {
      console.log(error)
    }); 

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

  // For selecting row for edit operation
  const handleEdit = (id) => {
    setSelectedRowId(id)
    setisModalOpen(true)
  }

  return (
    <>
      <div className="pt-20 px-5 flex items-center justify-between">
        <SearchBar value={searchQuery} onChange={handleSearch} />
        <button className="flex items-center justify-center gap-x-2 p-3" onClick={() => setisModalOpen(true)}>
          Add
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" stroke="black" viewBox="0 0 16 16" className="border border-black rounded-full bi bi-plus">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </button>
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
              <TableRow key={row._id} row={row} handleButtonClick={handleButtonClick} handleEdit={handleEdit} />
            ))}
          </tbody>
        </table>

        {isConfirmationOpen && (
          <DeleteConfirmationModal
            selectedRowName={data.find((row) => row._id === selectedRowId)?.name}
            closeModal={closeModal}
            handleConfirmDeletion={handleConfirmDeletion}
          />
        )}
      </div>
      {
        isModalOpen && (
          <AddModal setisModalOpen={setisModalOpen} heading="Add" setData={setData} data={data} selectedDriver={data.find((row) => row._id === selectedRowId)} setSelectedRowId={setSelectedRowId}/>
        )
      }
    </>
  );
}

export default Table;