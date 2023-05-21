import { LeftArrowIcon, RightArrowIcon } from '../assets/icons';
import { Flex } from '../shared/ui/flex';

import {
  HeaderWrapper,
  HistoryButtonContainer,
  LoginButton,
  RegisterButton,
  StyledHeader,
} from './styles';

export const Header = () => {
  return (
    <HeaderWrapper>
      <StyledHeader>
        <Flex direction="row" gap="8px">
          <HistoryButtonContainer disabled>
            <LeftArrowIcon />
          </HistoryButtonContainer>

          <HistoryButtonContainer>
            <RightArrowIcon />
          </HistoryButtonContainer>
        </Flex>
        <div>
          <RegisterButton>Registrarse</RegisterButton>
          <LoginButton>
            <span>Iniciar Sesión</span>
          </LoginButton>
        </div>
      </StyledHeader>
    </HeaderWrapper>
  );
};
