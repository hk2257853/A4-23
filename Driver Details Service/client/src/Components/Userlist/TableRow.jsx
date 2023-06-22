function TableRow({ row, handleButtonClick }) {
    return (
      <tr key={row.id} className="divide-y">
        <td className="py-2 text-center px-4">{row.id}</td>
        <td className="py-2 text-center px-4">{row.name}</td>
        <td className="py-2 text-center px-4">{row.email}</td>
        <td className="py-2 text-center px-4">{row.contactNo}</td>
        <td className="py-2 text-center px-4">
          <div className="flex items-center justify-center px-4">
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
          </div>
        </td>
      </tr>
    );
}

export default TableRow;