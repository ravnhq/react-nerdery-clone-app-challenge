import styled from "styled-components";
import {
  Airbnb2,
  Hamburger,
  Search,
  World,
  AirbnbText,
  Avatar,
} from "../../../assets";
import useModal from "../../../hooks/useModal";
import { UserModal } from "../userModal/UserModal";
import { useNavigate } from "react-router";
import { useState } from "react";

const DesktopHeaderLogoText = styled(AirbnbText)`
  height: 30px;
  width: 110px;
  position: relative;
  left: -30px;
  fill: ${({ theme }) => `${theme.colors.primary02}`};
  display: none;
  @media (min-width: 1127px) {
    display: block;
  }
`;

const DesktopHeaderLayout = styled.div`
  display: none;
  padding: 24px 12px;
  outline: ${({ theme }) => `1px solid ${theme.colors.neutral02}`};
  justify-content: space-between;
  align-items: center;
  @media (min-width: 740px) {
    display: flex;
  }
`;
const DesktopHeaderLogo = styled(Airbnb2)`
  fill: ${({ theme }) => `${theme.colors.primary02}`};
`;

const DesktopHeaderSearch = styled.div`
  display: flex;
  padding: 12px 5px 12px 0;
  min-width: 350px;
  box-shadow: ${({ theme }) => `${theme.elevation.elevation02}`};
  border-radius: 20px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  div:not(:last-child) {
    border-right: ${({ theme }) => `1px solid ${theme.colors.neutral06}`};
  }
  div:nth-child(3) {
    font-weight: ${({ theme }) => `${theme.weight.light}`};
    color: ${({ theme }) => `${theme.colors.neutral06}`};
  }
`;
const DesktopHeaderSearchElement = styled.div`
  padding: 0px 12px;
`;

const DesktopHeaderSearchIconContainer = styled.div`
  background-color: ${({ theme }) => `${theme.colors.primary01}`};
  border-radius: 15px;
  padding: 4px 7px;
`;

const DesktopHeaderSearchIcon = styled(Search)`
  fill: ${({ theme }) => `${theme.colors.shade01}`};
`;
const DesktopHeaderLink = styled.a``;
const DesktopHeaderButton = styled.button`
  text-decoration: none;
  background-color: ${({ theme }) => `${theme.colors.shade01}`};
  border: none;
  box-shadow: ${({ theme }) => `${theme.elevation.elevation02}`};
  padding: 6px 10px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;
const DesktopHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (min-width: 950px) {
    width: 70%;
    justify-content: space-between;
  }
`;
const DesktopHeaderRight = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  gap: 20px;
`;
const DesktopHeaderLogos = styled.div`
  display: flex;
  cursor: pointer;
`;
const DesktopHeaderAvatar = styled(Avatar)`
  fill: ${({ theme }) => `${theme.colors.neutral08}`};
`;

const DesktopHeaderSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const DesktopHeaderSearchInput = styled.input<{ modal: boolean }>`
  width: 100%;
  border-radius: 12px;
  padding: 8px;
  display: ${({ modal }) => `${modal ? "block" : "none"}`};
`;
interface Search {
  search: string;
  adults: number;
}

export const DesktopHeader = () => {
  const { modal, handleModal } = useModal();
  const { modal: modalSearch, handleModal: handleModalSearch } = useModal();
  const [search, setSearch] = useState<Search>({ search: "", adults: 0 });
  const navigate = useNavigate();
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    handleModalSearch();
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
  return (
    <DesktopHeaderLayout>
      <DesktopHeaderLeft>
        <DesktopHeaderLogos onClick={() => navigate("/")}>
          <DesktopHeaderLogo />
          <DesktopHeaderLogoText />
        </DesktopHeaderLogos>
        <DesktopHeaderSearchContainer>
          <DesktopHeaderSearch onClick={handleModalSearch}>
            <DesktopHeaderSearchElement>Anywhere</DesktopHeaderSearchElement>
            <DesktopHeaderSearchElement>Any week</DesktopHeaderSearchElement>
            <DesktopHeaderSearchElement>add guests</DesktopHeaderSearchElement>
            <DesktopHeaderSearchIconContainer>
              <DesktopHeaderSearchIcon width={13} height={13} />
            </DesktopHeaderSearchIconContainer>
          </DesktopHeaderSearch>
          <form onSubmit={handleSearch}>
            <DesktopHeaderSearchInput
              type="text"
              name="search"
              modal={modalSearch}
              value={search.search}
              onChange={handleChange}
            />
          </form>
        </DesktopHeaderSearchContainer>
      </DesktopHeaderLeft>
      <DesktopHeaderRight>
        <DesktopHeaderLink>
          <div>Airbnb your Home</div>
        </DesktopHeaderLink>

        <World width={15} height={15} />
        <DesktopHeaderButton onClick={handleModal}>
          <Hamburger width={12} height={12} />
          <DesktopHeaderAvatar width={25} height={25} />
        </DesktopHeaderButton>
        {modal ? (
          <UserModal modal={modal} handleModal={handleModal}></UserModal>
        ) : null}
      </DesktopHeaderRight>
    </DesktopHeaderLayout>
  );
};
