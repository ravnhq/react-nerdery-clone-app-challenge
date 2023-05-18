//import { createBrowserRouter } from "react-router-dom";

import Header from "./header/Header";
import Card from "./card/Card";
import CardGridContainter from "./cardGridContainer/cardGridContainer";
import Content from "./content/Content";
import FilterPrice from "./filterPrice/FilterPrice";
import Footer from "./footer/Footer";
import Layout from "./layout/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { place } from "./card/type";

function App() {
  const [placeData, setPlaceData] = useState<{ places: place[] } | null>();
  //memoize placeData to be a stable variable
  const URL = "http://localhost:3030/places";
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(URL);
      const data = response.data;
      if (data) {
        setPlaceData(data);
        console.log(placeData, "entre");
      }
    };
    fetch();
  }, [URL]);

  return (
    <>
      <Layout display={"flex"} direction={"column"}>
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
          }}
        >
          <Header />
        </div>
        <div>
          <Content>
            <FilterPrice />
            <CardGridContainter>
              {placeData &&
                placeData.places?.map((place) => (
                  <Card
                    key={place.ownerId}
                    image={place.image}
                    ownerId={place.ownerId}
                    description={place.description}
                    iconUser={place.iconUser}
                    country={place.country}
                    city={place.city}
                    rating={place.rating}
                    priceDay={place.priceDay}
                    wished={place.wished}
                  />
                ))}
            </CardGridContainter>
          </Content>
        </div>
        <Footer />

        <div
          style={{
            position: "fixed",
            bottom: 0,
            backgroundColor: "blue",
            width: "100%",
          }}
        >
          bottom navbar
        </div>
      </Layout>
    </>
  );
}

export default App;
