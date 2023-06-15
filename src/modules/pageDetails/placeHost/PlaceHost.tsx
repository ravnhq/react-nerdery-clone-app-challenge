import { FC } from "react";
import { Star } from "../../../assets";
import {
  PlaceHostLayout,
  PlaceHostTitle,
  HostCard,
  HostInformation,
  HostStatistics,
  HostStatisticsItem,
  PlaceHostSpan,
  HostName,
  PlaceHostFact,
  MessageButton,
  UserIcon,
} from "./styles";
interface PlaceHost {
  avatar: string;
}

export const PlaceHost: FC<PlaceHost> = ({ avatar }) => {
  return (
    <PlaceHostLayout>
      <PlaceHostTitle>Meet your host</PlaceHostTitle>
      <HostCard>
        <HostInformation>
          <UserIcon src={avatar} />
          <HostName>Christi-Anna</HostName>
          <div>Superhost</div>
        </HostInformation>
        <HostStatistics>
          <HostStatisticsItem>
            <PlaceHostSpan>29</PlaceHostSpan> reviews
          </HostStatisticsItem>
          <HostStatisticsItem>
            <PlaceHostSpan>
              4.9 <Star />
            </PlaceHostSpan>
            rating
          </HostStatisticsItem>
          <HostStatisticsItem>
            <PlaceHostSpan>1</PlaceHostSpan> year hosting
          </HostStatisticsItem>
        </HostStatistics>
      </HostCard>
      {/* here goes a map of items */}
      <div>
        <PlaceHostFact>
          <span>icon</span>
          <p>Born in the 80s</p>
        </PlaceHostFact>
        <PlaceHostFact>
          <span>icon</span>
          <p>Where i went to school: Carleton University</p>
        </PlaceHostFact>
        <PlaceHostFact>
          <span>icon</span>
          <p>My work : carleton University</p>
        </PlaceHostFact>
        <PlaceHostFact>
          <span>icon</span>
          <p>Fun fact: Born on Christmas Day</p>
        </PlaceHostFact>
      </div>
      {/*  ends a map of items */}
      <MessageButton>Message Host</MessageButton>
    </PlaceHostLayout>
  );
};
