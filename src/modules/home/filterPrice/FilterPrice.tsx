import {
  FilterDiv,
  FilterDivTitle,
  FilterDivContent,
  FilterDivSubtitle,
  FilterDivSwitch,
} from "./styles";
export const FilterPrice = () => {
  return (
    <FilterDiv>
      <FilterDivTitle className="title">Display total price</FilterDivTitle>
      <FilterDivContent className="content">
        <FilterDivSubtitle className="subtitle">
          Includes all fees, before taxes
        </FilterDivSubtitle>
        {/* <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label> */}
        <FilterDivSwitch></FilterDivSwitch>
      </FilterDivContent>
    </FilterDiv>
  );
};
