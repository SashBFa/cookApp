import { useState } from "react";
import Receipts from "./components/Receipts";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <h1 className="App__h1">React Cooking App</h1>
      <input
        className="App__searchBar"
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <Receipts search={searchTerm} />
    </div>
  );
}

export default App;
