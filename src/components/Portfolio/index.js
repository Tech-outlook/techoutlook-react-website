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
            <img src={getData[key].Source_code_link} alt={getData[key].title} className="post-image" />
            <div>
              <h4>{getData[key].title}</h4>
              <a
                href={getData[key].Source_code_link}
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <button className="btn btn-success">Source Code</button>
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Portfolio;
