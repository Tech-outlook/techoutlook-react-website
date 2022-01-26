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
          <div className="cards" key={getData[key].id}>
            <img
              src={getData[key].Image_source_url}
              className="content"
              alt={getData[key].title}
            />
            <div>
              <h1>{getData[key].title}</h1>
              <a href={getData[key].Source_code_link}>
                <button>Source Code</button>
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Portfolio;
