function DeleteConfirmationModal({ selectedRowName, closeModal, handleConfirmDeletion }) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-10">
        <div className="bg-white p-6 rounded-md shadow-lg">
          <p>Are you sure you want to delete <span className="font-bold">{selectedRowName}'s </span> data?</p>
          <div className="mt-4 flex justify-center">
            <button className="mr-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-md" onClick={closeModal}>
              Cancel
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-md" onClick={handleConfirmDeletion}>
              Yes
            </button>
          </div>
        </div>
      </div>
    );
}

export default DeleteConfirmationModal;
  