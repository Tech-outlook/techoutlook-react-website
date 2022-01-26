import { useState, useEffect } from "react";
import database from "../../firebase";
import "./style.css";

const Portfolio = () => {
  const [getData, setGetData] = useState({});

  useEffect(() => {
    database.child("apidata").on("value", (details) => {
      setGetData(details.val());
    });
  }, []);

  console.log(getData);

  return (
    <div className="Portfolio">
      {getData &&
        Object.keys(getData).map((key) => (
          <div className="post" key={getData[key].id}>
            <img
              src={getData[key].Image_source_url}
              alt={getData[key].title}
            />
          </div>
        ))}
    </div>
  );
};

export default Portfolio;
