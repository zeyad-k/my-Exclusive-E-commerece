import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SearchInput = () => {
  const [apiUsers, setApiUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchItem, setSearchItem] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isInputActive, setInputActive] = useState(false); // new state variable

  let blurTimeout = null; // variable to hold the timeout

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setApiUsers(data);
        setFilteredUsers(data);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredItems = apiUsers.filter((user) =>
      user.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    setFilteredUsers(filteredItems);
  };

  return (
    <div className="relative flex flex-col">
      <div className="flex gap-3  rounded-lg bg-[#F5F5F5] px-3 py-2 font-poppins ">
        <input
          className=" w-full rounded-lg border-none bg-transparent font-poppins text-base font-normal leading-6 text-black outline-none"
          type="text"
          value={searchItem}
          onChange={handleInputChange}
          onFocus={() => {
            clearTimeout(blurTimeout); // clear the timeout when the input is focused
            setInputActive(true);
          }}
          onBlur={() => {
            // set a timeout to hide the search results
            blurTimeout = setTimeout(() => setInputActive(false), 200);
          }}
          placeholder="What are you looking for?"
        />
        <div>
          <Search />
        </div>
      </div>

      {isInputActive && ( // only show the search results when the input is active
        <span className=" absolute top-12 z-50 flex w-full  rounded-md bg-gray-200 px-4 py-3 ">
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}

          {!loading && !error && filteredUsers.length === 0 ? (
            <p>No products found</p>
          ) : (
            <ul className="flex-col flex gap-1">
              {filteredUsers.slice(0, 5).map((user) => (
                <li className="  py-1 px-2 hover:shadow-xl rounded"  key={user.id}>
                  <Link to={`/${user.id}`}>{user.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </span>
      )}
    </div>
  );
};

export default SearchInput;
