import styled from "styled-components";

export const FilterDivTitle = styled.p`
  font-size: ${(props) => `${props.theme.fontSize.l}`};
  width: 35%;
  font-weight: 590;
  color: ${(props) => `${props.theme.colors.shade02}`};
  border-right: ${(props) => `1px solid ${props.theme.colors.neutral08}`};
  padding-right: 15px;
`;

export const FilterDivContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const FilterDivSubtitle = styled.p`
  color: ${(props) => `${props.theme.colors.neutral08}`};
`;
export const FilterDivSwitch = styled.label`
  position: absolute;
  display: inline-block;
  top: 12px;
  right: 10px;
  width: 48px;
  height: 32px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;
export const FilterDivSwitchInput = styled.label`
  opacity: 0;
  width: 0;
  height: 0;
`;
export const FilterDivSwitchSlider = styled.label`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => `${theme.colors.neutral06}`};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
  &::before {
    border-radius: 50%;
  }
`;

export const FilterDiv = styled.div`
  border-radius: 10px;
  border: 1px solid black;
  padding: 20px 15px;
  position: relative;
  display: flex;
  gap: 15px;
  width: 100%;
  > .content {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  > .content > .subtitle {
    color: ${(props) => `${props.theme.colors.neutral08}`};
  }
  > .content > .switch {
    position: absolute;
    display: inline-block;
    top: 12px;
    right: 10px;
    width: 48px;
    height: 32px;
  }
  > .content > .switch > input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  > .content > .switch > .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => `${theme.colors.neutral06}`};
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  > .content > .switch > .slider::before {
    position: absolute;
    content: "";
    height: 24px;
    width: 24px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  > .content > .switch > input:checked + .slider {
    background-color: ${({ theme }) => `${theme.colors.shade02}`};
  }
  > .content > .switch > input:checked + .slider:before {
    -webkit-transform: translateX(17px);
    -ms-transform: translateX(17px);
    transform: translateX(17px);
  }
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
