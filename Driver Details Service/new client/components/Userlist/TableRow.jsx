function TableRow({ row, handleButtonClick, handleEdit }) {
  return (
    <tr key={row.id} className="divide-y">
      <td className="py-2 text-center px-4">{row.id}</td>
      <td className="py-2 text-center px-4">{row.name}</td>
      <td className="py-2 text-center px-4">{row.email}</td>
      <td className="py-2 text-center px-4">{row.contactNo}</td>
      <td className="py-2 text-center px-4">
        <div className="flex items-center justify-center px-4 gap-x-2">
          <button
            className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center"
            onClick={() => handleButtonClick(row.id)}
          >
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
          <button
            className="w-6 h-6 rounded-full text-white flex items-center justify-center"
            onClick={() => handleEdit(row.id)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24">
              <path d="M 19.171875 2 C 18.448125 2 17.724375 2.275625 17.171875 2.828125 L 16 4 L 20 8 L 21.171875 6.828125 C 22.275875 5.724125 22.275875 3.933125 21.171875 2.828125 C 20.619375 2.275625 19.895625 2 19.171875 2 z M 14.5 5.5 L 3 17 L 3 21 L 7 21 L 18.5 9.5 L 14.5 5.5 z"></path>
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
}

export default TableRow;