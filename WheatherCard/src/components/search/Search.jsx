export default function Search({search, setSearch, handleChange}) {
  return (
    <div className="search-engin">
      <input
      className="input-bx"
        type="text"
        name=""
        id=""
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <button className="search-btn" onClick={handleChange}> Search </button>
    </div>
  );
}
