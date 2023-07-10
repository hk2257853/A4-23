import React from "react";
import Link from 'next/link'

const Pagination = ({ rowsPerPage, totalRows, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <section className="my-8">
            <ul className="pagination flex justify-center list-none gap-x-2">
                {pageNumbers.map((number) => (
                    <li key={number} className="mb-2">
                        <Link
                            onClick={() => paginate(number)}
                            href="/managepg"
                            className={`border border-cyan-600 rounded py-2 px-4 ${currentPage === number ? "bg-cyan-600 text-white" : "text-gray-700"}`}
                        >
                            {number}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Pagination;