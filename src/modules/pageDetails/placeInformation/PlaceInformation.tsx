import { FC } from "react";
import { Star } from "../../../assets";
import {
  PlaceInformationLayout,
  PlaceInformationHeader,
  PlaceInformationH1,
  PlaceInformationStatistics,
  PlaceInformationFeature,
  PlaceInformationFeatureHeader,
  PlaceInformationH2,
  PlaceInformationCardGrid,
  PlaceInformationFeatureCard,
  PlaceInformationList,
  PlaceInformationListItem,
  PlaceInformationListItemTitle,
  PlaceInformationListItemSubtitle,
} from "./styles";

interface PlaceInformation {
  rating: number;
  city: string;
}
export const PlaceInformation: FC<PlaceInformation> = ({ rating, city }) => {
  return (
    <PlaceInformationLayout>
      <PlaceInformationHeader>
        <PlaceInformationH1>
          Cheerful 1-bedroom in a townhouse with parking
        </PlaceInformationH1>
        <PlaceInformationStatistics>
          <div>
            <Star /> <span>{rating}</span>
          </div>
          <div>15 reviews</div>
          <div>{city}</div>
        </PlaceInformationStatistics>
      </PlaceInformationHeader>

      <PlaceInformationFeature>
        <PlaceInformationFeatureHeader>
          <PlaceInformationH2>
            Room in a townhouse hosted by Christi-Anna
          </PlaceInformationH2>
          <div>icon</div>
        </PlaceInformationFeatureHeader>
        <PlaceInformationCardGrid>
          <PlaceInformationFeatureCard>
            <div>icon</div>
            <div>1 bed</div>
          </PlaceInformationFeatureCard>
          <PlaceInformationFeatureCard>
            <div>icon</div>
            <div>Shared bathroom</div>
          </PlaceInformationFeatureCard>
          <PlaceInformationFeatureCard>
            <div>icon</div>
            <div>Host or others may share home</div>
          </PlaceInformationFeatureCard>
        </PlaceInformationCardGrid>
      </PlaceInformationFeature>

      <PlaceInformationList>
        <PlaceInformationListItem>
          <div>icon</div>
          <div>
            <PlaceInformationListItemTitle>
              Room in a townhouse
            </PlaceInformationListItemTitle>
            <PlaceInformationListItemSubtitle>
              Your own room in a home, plus access to shared spaces.
            </PlaceInformationListItemSubtitle>
          </div>
        </PlaceInformationListItem>
        <PlaceInformationListItem>
          <div>icon</div>
          <div>
            <PlaceInformationListItemTitle>
              Dedicated workspace
            </PlaceInformationListItemTitle>
            <PlaceInformationListItemSubtitle>
              A common area with wifi that's well-suited for working.
            </PlaceInformationListItemSubtitle>
          </div>
        </PlaceInformationListItem>
        <PlaceInformationListItem>
          <div>icon</div>
          <div>
            <PlaceInformationListItemTitle>
              Free cancellation before May 31
            </PlaceInformationListItemTitle>
          </div>
        </PlaceInformationListItem>
      </PlaceInformationList>
    </PlaceInformationLayout>
  );
};
