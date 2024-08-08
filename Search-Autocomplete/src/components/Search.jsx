import { useEffect, useState } from "react";
import { Suggestion } from "./suggestion";
import "./style.css"

export default function SearchAutocomplete() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchParams, setSearchParams] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(event) {
    const query = event.target.value;
    setSearchParams(query);

    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  async function fetchData() {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((item) => item.firstName));
        setLoading(false);
        setError(null);
      }
      console.log(users);
    } catch (e) {
      setLoading(false);
      setError(e);
      console.log(e);
    }
  }
  function handleClick(event){
    setSearchParams(event.target.innerText)
    setShowDropdown(false)
    setFilteredUsers([])
  }

  useEffect(() => {
    fetchData();
  }, []);
  console.log(users, filteredUsers);

  return (
    <div className="container">
      {loading ? (
        <h1>please wait loading</h1>
      ) : (
        <input
          type="text"
          placeholder="Enter "
          value={searchParams}
          onChange={handleChange}
        />
      )}

      {showDropdown && <Suggestion handelClick={handleClick} data={filteredUsers} />}
    </div>
  );
}
