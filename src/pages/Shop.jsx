import React, { useEffect, useState } from "react";
import Card from "../components/Card";

function Shop() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setData(data.products));
  }, []);

  return (
    <div className="container pt-[100px]">
      <div className="flex gap-[40px] flex-wrap items-center justify-center">
        {data.map((e) => {
          return <Card key={e.id} imagUrl={e.images[0]} title={e.title} />;
        })}
      </div>
    </div>
  );
}

export default Shop;
