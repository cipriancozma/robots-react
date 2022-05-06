import { useEffect, useState, ChangeEvent } from "react";
import { API_USERS } from "./api";
import "./App.css";
import CardList from "./components/CardList.tsx";
import InputBox from "./components/InputBox.tsx";
import Scroll from "./components/Scroll";
import Title from "./components/Title";
import { getData } from './utils/data.ts';


export interface Robots {
  id: string;
  name: string;
  email: string;
}

function App() {
  const [robots, setRobots] = useState<Robots[]>([]);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const data = await getData<Robots[]>(API_USERS);
    setRobots(data);
    
  }

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(search);
  })


  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value.toLowerCase());
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Title title={"React Robots"}/>
      <InputBox handleChange={handleChange} className="search-box" />
      <Scroll>
        <CardList robots={filteredRobots}/>
      </Scroll>
    </div>
  );
}

export default App;
