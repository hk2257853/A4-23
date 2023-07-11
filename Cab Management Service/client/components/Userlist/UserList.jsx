import { useState, useEffect } from "react";
import TableRow from "./TableRow";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import SearchBar from "./SearchBar";
import { useRouter } from "next/router"
import * as api from '../../api'
import UnauthorizedAccessPage from "./UnauthorizedAccess";
import Pagination from "./Pagination";
import Head from 'next/head'
import Model from "../StepByStepModel/Model";

// TODO: put features like dashboard, pagination and sort table option

function Table() {
  const [data, setData] = useState([]);
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isModalOpen, setisModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortOrder, setSortOrder] = useState("none");
  const [sortKey, setSortKey] = useState(null);
  const [count, setCount] = useState(0)
  const router = useRouter()

  useEffect(() => {
    api.getManagerDatas()
      .then((res) => {
        setData(res.data);
      })
      .catch(error => {
        console.log(error)
      });

    const user = JSON.parse(localStorage.getItem("profile"));
    if (!user) {
      // router.push("/auth/login"); // TODO: should I put this in navbar?
    }
    else {
      setIsLoggedIn(true)
    }
        
  }, [isLoggedIn, count]); // TODO: any improvements can be done here?

  // For Delete Modal
  const handleButtonClick = (id) => {
    setSelectedRowId(id);
    setIsConfirmationOpen(true);
  };

  const handleConfirmDeletion = () => {
    const updatedData = data.filter((row) => row._id !== selectedRowId);

    api.deleteManagerData(selectedRowId)
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

  const handleEdit = (id) => {
    setSelectedRowId(id)
    setisModalOpen(true)
  }

  const handleSort = (key) => {
    let newSortOrder;
    if (count == 0) {
      setCount(1)
      newSortOrder = "asc";
    }
    else if (count == 1) {
      setCount(2)
      newSortOrder = "desc";
    }
    else {
      setCount(0)
      newSortOrder = "none";
    }
    // if (sortKey === key) {
    //   // If the same key is clicked again, toggle the sort order
    //   newSortOrder = sortOrder === "asc" ? (sortOrder == "desc" ? "none" : "desc") : "asc";
    // } else {
    //   // If a new key is clicked, sort in ascending order
    //   newSortOrder = "asc";
    // }
    setSortOrder(newSortOrder);
    setSortKey(key);
  };

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const filteredData = data.filter((row) => {
    const regno = row.regno || ''; // Set regno to an empty string if it is undefined
    return regno.toLowerCase().includes(searchQuery.toLowerCase());
  });  

  let sortedData = filteredData;
  if (sortOrder !== "none" && sortKey !== null) {
    sortedData = filteredData.sort((a, b) => {
      if (sortOrder === "asc") {
        return a[sortKey].localeCompare(b[sortKey]);
      } else if (sortOrder === "desc") {
        return b[sortKey].localeCompare(a[sortKey]);
      }
    });
  }

  const currentRows = sortedData.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    !isLoggedIn ?
      (
        <UnauthorizedAccessPage />
      ) : (
        <>
          <Head>
            <title>Cab Management</title>
          </Head>
          <section className="min-h-screen">
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
                    <th className="py-2 text-center px-4" onClick={() => handleSort("regno")}>
                      Driverame {sortKey === "regno" && (sortOrder === "asc" ? "↑" : (sortOrder === "desc" ? "↓" : "↑↓"))}
                      {sortKey !== "regno" && "↑↓"}
                    </th>
                    <th className="py-2 text-center px-4" onClick={() => handleSort("model")}>
                      Email {sortKey === "model" && (sortOrder === "asc" ? "↑" : (sortOrder === "desc" ? "↓" : "↑↓"))}
                      {sortKey !== "model" && "↑↓"}
                    </th>
                    <th className="py-2 text-center px-4" onClick={() => handleSort("colour")}>
                      RegNo {sortKey === "colour" && (sortOrder === "asc" ? "↑" : (sortOrder === "desc" ? "↓" : "↑↓"))}
                      {sortKey !== "colour" && "↑↓"}
                    </th>
                    <th className="py-2 text-center px-4" onClick={() => handleSort("colour")}>
                      Model {sortKey === "colour" && (sortOrder === "asc" ? "↑" : (sortOrder === "desc" ? "↓" : "↑↓"))}
                      {sortKey !== "colour" && "↑↓"}
                    </th>
                    <th className="py-2 text-center px-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentRows.map((row) => (
                    <TableRow key={row._id} row={row} handleButtonClick={handleButtonClick} handleEdit={handleEdit} />
                  ))}
                </tbody>
              </table>
              <div className="pagination">
                <Pagination
                  rowsPerPage={rowsPerPage}
                  totalRows={filteredData.length}
                  paginate={paginate}
                  currentPage={currentPage}
                />
              </div>

              {isConfirmationOpen && (
                <DeleteConfirmationModal
                  selectedRowName={data.find((row) => row._id === selectedRowId)?.regno}
                  closeModal={closeModal}
                  handleConfirmDeletion={handleConfirmDeletion}
                />
              )}
            </div>
            {
              isModalOpen && (
                <Model setisModalOpen={setisModalOpen} heading="Add" setData={setData} data={data} selectedRow={data.find((row) => row._id === selectedRowId)} setSelectedRowId={setSelectedRowId} />
              )
            }
          </section>
        </>
      )
  );
}

export default Table;