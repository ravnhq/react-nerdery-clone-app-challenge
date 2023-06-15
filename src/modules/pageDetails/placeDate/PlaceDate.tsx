import { FC } from "react";
import {
  PlaceDateLayout,
  PlaceDateText,
  PlaceDateRange,
  PlaceDateButton,
} from "./styles";
interface PlaceDate {
  price: number;
}
export const PlaceDate: FC<PlaceDate> = ({ price }) => {
  return (
    <PlaceDateLayout>
      <PlaceDateText>
        <div>
          <span>${price} </span>night
        </div>
        <PlaceDateRange>Jun 1 - 6</PlaceDateRange>
      </PlaceDateText>
      <PlaceDateButton>Change Dates</PlaceDateButton>
    </PlaceDateLayout>
  );
};
