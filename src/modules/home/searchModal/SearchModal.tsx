import { useState, FC } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Close } from "../../../assets";

interface Search {
  search: string;
  adults: number;
}

const SearchModalLayout = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 18px 9px;
  height: 100vh;
  width: 100%;
  z-index: 1;
  background-color: ${({ theme }) => `${theme.colors.neutral02}`};
  top: 0;
`;
const SearchModalClose = styled.button`
  padding: 4px 6px 2px 6px;
  width: 32px;
  height: 32px;
  border-radius: 20px;
  background-color: ${({ theme }) => `${theme.colors.shade01}`};
  border: ${({ theme }) => `1px solid ${theme.colors.shade02}`};
  cursor: pointer;
`;
const SearchModalLink = styled.button`
  font-size: ${({ theme }) => `${theme.fontSize.xl}`};
  color: ${({ theme }) => `${theme.colors.neutral06}`};
  background-color: inherit;
  border: none;
  cursor: pointer;
`;
const SearchModalLinks = styled.div`
  display: flex;
  gap: 8px;
  margin: 0 auto;
`;
const SearchModalHeader = styled.div`
  display: flex;
`;
const SearchModalDropdown = styled.div`
  background-color: ${({ theme }) => `${theme.colors.neutral01}`};
  border-radius: 10px;
  padding: 24px 20px;
  box-shadow: ${({ theme }) => `${theme.elevation.elevation02}`};
`;
const SearchModalDropdownTitle = styled.div`
  font-size: ${({ theme }) => `${theme.fontSize.xxl}`};
  font-weight: ${({ theme }) => `${theme.weight.bold}`};
`;
const SearchModalActions = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 12px;
  background-color: ${({ theme }) => `${theme.colors.neutral01}`};
  display: flex;
  justify-content: space-between;
`;
const SearchModalActionButton = styled.button<{ secondary?: boolean }>`
  padding: 10px;
  font-size: ${({ theme }) => `${theme.fontSize.l}`};
  background: ${({ theme, secondary }) =>
    ` ${
      secondary
        ? "inherit"
        : `linear-gradient(to right, ${theme.colors.gradient03})`
    }`};
  color: ${({ theme, secondary }) =>
    ` ${secondary ? `${theme.colors.shade02}` : `${theme.colors.shade01}`}`};
  border: none;
  text-decoration: ${({ secondary }) =>
    `${secondary ? "underline" : undefined}`};
`;
const SearchModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface SearchModal {
  handleModal: () => void;
}

export const SearchModal: FC<SearchModal> = ({ handleModal }) => {
  const [search, setSearch] = useState<Search>({ search: "", adults: 0 });
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    handleModal();
    navigate(
      `/s/${search.search !== "" ? `${search.search}` : undefined}/?adults=${
        search.adults !== 0 ? `${search.adults}` : undefined
      }`
    );
  };

  const handleChange = (e: React.ChangeEvent) => {
    const a = e.currentTarget as HTMLFormElement;
    setSearch({ ...search, [a.name]: a.value });
  };
  const handleIncrement = () => {
    if (search.adults > 15) {
      return;
    }
    setSearch({ ...search, adults: search?.adults + 1 });
  };
  const handleDecrement = () => {
    if (search.adults <= 0) {
      return;
    }
    setSearch({ ...search, adults: search?.adults - 1 });
  };
  return (
    <SearchModalLayout>
      <SearchModalHeader>
        <SearchModalClose onClick={handleModal}>
          <Close width={12} height={12} />
        </SearchModalClose>
        <SearchModalLinks>
          <SearchModalLink>Stays</SearchModalLink>
          <SearchModalLink>Experiences</SearchModalLink>
        </SearchModalLinks>
      </SearchModalHeader>
      <SearchModalForm onSubmit={handleSearch}>
        <SearchModalDropdown>
          <div>
            {/*this div disappears on dropdown */}
            <span>Where to?</span>
            <span>I'm flexible</span>
          </div>
          {/*every div at this level from this div is a dropdown */}
          <SearchModalDropdownTitle>Where to?</SearchModalDropdownTitle>
          <input
            type="text"
            name="search"
            onChange={handleChange}
            value={search?.search}
          />
          carrousel
        </SearchModalDropdown>
        <SearchModalDropdown>
          {/*this div disappears on dropdown */}
          <div>
            <span>When</span>
            <span>Jul 1 - Oct 1</span>
          </div>
          <h1>When's your trip?</h1>
          <div>
            <button>Dates</button>
            <button>Months</button>
            <button>Flexible</button>
          </div>
          {/* Months or flexible who knows */}
          <div></div>
        </SearchModalDropdown>
        <SearchModalDropdown>
          <div>
            {/*this div disappears on dropdown */}
            <span>Who</span>
            <span>Add guests</span>
          </div>
          <h1>Who's coming?</h1>
          <div>
            <div>
              <p>Adults</p>
              <p>Ages 13 or above</p>
            </div>
            <div>
              <button type="button" onClick={handleDecrement}>
                -
              </button>
              <input type="text" value={search.adults} disabled />
              <button type="button" onClick={handleIncrement}>
                +
              </button>
            </div>
          </div>
          <div>
            <div>
              <p>Children</p>
              <p>Ages 2 - 12</p>
            </div>
            <div>
              <button>-</button>0<button>+</button>
            </div>
          </div>
          <div>
            <div>
              <p>Infants</p>
              <p>Under 2</p>
            </div>
            <div>
              <button>-</button>0<button>+</button>
            </div>
          </div>
          <div>
            <div>
              <p>Pets</p>
              <p>Bringing a service animal?</p>
            </div>
            <div>
              <button>-</button>
              <span> 0 </span>
              <button>+</button>
            </div>
          </div>
        </SearchModalDropdown>
        <SearchModalActions>
          <SearchModalActionButton secondary={true}>
            Clear all
          </SearchModalActionButton>
          <SearchModalActionButton type="submit">
            Search
          </SearchModalActionButton>
        </SearchModalActions>
      </SearchModalForm>
    </SearchModalLayout>
  );
};
