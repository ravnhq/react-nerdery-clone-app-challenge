import { useParams } from "react-router-dom";
import {
  PlaceHeader,
  PlaceDate,
  PlaceAbout,
  PlaceHost,
  PlaceInformation,
} from ".";
import { Footer } from "../shared/";
import { FixedBottomNav } from "./styles";
import useAsync from "../../hooks/useAsync";
import axios from "axios";
import { ENDPOINT, PLACE } from "../shared/API";
import { Place } from "../shared/types/types";

export const PlaceDetails = () => {
  const { id } = useParams();
  const getPlaceId = async () => {
    const response = await axios.get<Place>(`${ENDPOINT}${PLACE}/${id}`);
    return response.data;
  };
  const { data, loading } = useAsync(getPlaceId);
  if (loading) {
    return <>loading</>;
  }
  return (
    <div>
      {data ? (
        <>
          <PlaceHeader />
          <img src={data.image} />
          <PlaceInformation city={data.city} rating={data.rating} />
          <PlaceHost avatar={data.iconUser} />
          <PlaceAbout description={data.description} />
          <FixedBottomNav>
            <PlaceDate price={data.priceDay} />
          </FixedBottomNav>
          <Footer />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
