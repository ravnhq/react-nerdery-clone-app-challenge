import { Share, Heart } from "../../../assets";
import { useNavigate } from "react-router-dom";
import { PlaceHeaderLayout, BackIcon } from "./styles";

export const PlaceHeader = () => {
  const navigate = useNavigate();
  const getBack = () => {
    navigate(-1);
  };
  return (
    <PlaceHeaderLayout>
      <div>
        <BackIcon onClick={getBack} />
      </div>
      <div>
        <Share />
        <Heart />
      </div>
    </PlaceHeaderLayout>
  );
};
