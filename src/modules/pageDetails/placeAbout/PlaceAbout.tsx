import { FC } from "react";
import {
  PlaceAboutLayout,
  PlaceAboutIntroduction,
  PlaceAboutSubtitle,
  PlaceAboutParagraph,
  PlaceAboutFeatures,
  PlaceAboutFeaturesItems,
} from "./styles";

interface PlaceAbout {
  description: string;
}
export const PlaceAbout: FC<PlaceAbout> = ({ description }) => {
  return (
    <PlaceAboutLayout>
      <PlaceAboutIntroduction>
        <PlaceAboutSubtitle>About this place</PlaceAboutSubtitle>
        <PlaceAboutParagraph>
          {description}
          {/* This unique place has a style all its own. A very quiet homely house
          with a modern contemporary style. 25 mins to downtown Ottawa. <br />
          The antidote to hotel rooms and sterile Airbnb rentals. Aesthetic and
          comfort abound in the charming and well furnished unit. Spacious and
          drenched in natural light. Take a look around, we'd love to host you */}
        </PlaceAboutParagraph>
      </PlaceAboutIntroduction>
      <PlaceAboutFeatures>
        <PlaceAboutSubtitle>What this place offers</PlaceAboutSubtitle>
        <PlaceAboutFeaturesItems>
          <div>icon</div>
          <div>Lock on bedroom door</div>
        </PlaceAboutFeaturesItems>
        <PlaceAboutFeaturesItems>
          <div>icon</div>
          <div>Kitchen</div>
        </PlaceAboutFeaturesItems>
        <PlaceAboutFeaturesItems>
          <div>icon</div>
          <div>Wifi</div>
        </PlaceAboutFeaturesItems>
        <PlaceAboutFeaturesItems>
          <div>icon</div>
          <div>Dedicated workspace</div>
        </PlaceAboutFeaturesItems>
        <PlaceAboutFeaturesItems>
          <div>icon</div>
          <div>Free parking on premises</div>
        </PlaceAboutFeaturesItems>
      </PlaceAboutFeatures>
    </PlaceAboutLayout>
  );
};
