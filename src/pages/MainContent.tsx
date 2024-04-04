import { useEffect, useState } from "react";
import Card from "../components/card/Card";

function MainContent() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div className="mainContentWrapper">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {data.map((e) => {
              return <Card>{e}</Card>;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainContent;
