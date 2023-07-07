function SearchInput({ value, onChange }) {
    return (
        <input
          type="text"
          placeholder="Search by name"
          className="border border-gray-300 px-4 py-2 rounded-md"
          value={value}
          onChange={onChange}
        />
    );
}

export default SearchInput;
  