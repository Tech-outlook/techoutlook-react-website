import React from "react";
import "./style.css";
const Portfolio = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(
        "https://peppy-primacy-336610-default-rtdb.firebaseio.com/apidata.json"
      );
      response = await response.json();
      setData(response);
    }
    fetchMyAPI();
  }, []);
  return (
    <div className="Portfolio">
      {data &&
        Object.keys(data).map((key) => (
          <div className="post" key={data[key].id}>
            <img
              className="post-image"
              src={data[key].Image_source_url}
              alt={data[key].title}
            />
            <div>
              <p>{data[key].title}</p>
              <a
                href={data[key].Source_code_link}
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <button>Source Code</button>
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Portfolio;
