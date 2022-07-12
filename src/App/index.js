import { useState, useEffect } from "react";
import "./styles.css";
import Filter from "../Filter";
import Card from "../Card";
import Loader from "../Loader";
import { getData } from "../Api";

export default function App() {
  const [data, setData] = useState([]);

  const apiData = async (name) => {
    let res = await getData(name);
    setData(res);
  };

  useEffect(() => {
    apiData();
  }, []);

  const inputHandler = (e) => {
    apiData(e.target.value);
  };

  return (
    <div className="container">
      <Filter onChange={inputHandler} />
      <ul className="user-list">
        {!data.length ? (
          <Loader />
        ) : (
          data.map((user, index) => <Card user={user} key={index} />)
        )}
      </ul>
    </div>
  );
}
