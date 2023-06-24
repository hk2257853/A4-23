function SearchInput({ value, onChange }) {
    return (
      <div className="pt-2 my-4 flex justify-center">
        <input
          type="text"
          placeholder="Search by name"
          className="border border-gray-300 px-4 py-2 rounded-md"
          value={value}
          onChange={onChange}
        />
      </div>
    );
}

export default SearchInput;
  