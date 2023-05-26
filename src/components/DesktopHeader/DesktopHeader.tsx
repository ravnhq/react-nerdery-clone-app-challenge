import { StyledFlexContainer } from '../../components/Styles/shared/FlexContainer.styles';
import { useAuthorizationContext } from '../../context/AuthorizationContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
    transparent?: boolean;
}

const StyledHeader = styled.header<Props>`
    width: 100%;
    background-color: ${({ theme, transparent }) =>
        transparent ? 'transparent' : theme.colors.bg};
    color: white;
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;
    height: 50px;

    display: flex;
    justify-content: end;
    align-items: center;

    & > div {
        margin-right: 20px;
    }
`;

const StyledButton = styled(Link)`
    background-color: transparent;
    border-radius: 500px;
    padding: 8px 32px;
    cursor: pointer;
    color: gray;

    &:hover {
        color: white;
    }

    :last-child {
        background-color: white;
        color: black;

        &:hover {
            transform: scale(1.1);
        }
    }
`;

const StyledImg = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
`;

const DesktopHeader = () => {
    const { isAuth, user } = useAuthorizationContext();
    return (
        <StyledHeader transparent={!isAuth}>
            {isAuth ? (
                <StyledFlexContainer alignItems="center" columnGap="12px">
                    <StyledImg
                        src="https://source.unsplash.com/user/wsanter"
                        alt={user?.name}
                    />
                    <span>{user?.name}</span>
                </StyledFlexContainer>
            ) : (
                <div>
                    <StyledButton to="/signup">Sign In</StyledButton>
                    <StyledButton to="/login">Log In</StyledButton>
                </div>
            )}
        </StyledHeader>
    );
};

export default DesktopHeader;
