import { useEffect, useState } from "react";
import { API_USERS } from "./api";
import "./App.css";
import CardList from "./components/CardList";
import InputBox from "./components/InputBox";
import Title from "./components/Title";

function App() {
  const [robots, setRobots] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const response = await fetch(API_USERS);
    const data = await response.json();
    setRobots(data);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(search);
  })


  const handleChange = (event) => {
    setSearch(event.target.value.toLowerCase());
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Title title={"React Robots"}/>
      <InputBox handleChange={handleChange} className="search-box" />
      <CardList robots={filteredRobots}/>
    </div>
  );
}

export default App;
