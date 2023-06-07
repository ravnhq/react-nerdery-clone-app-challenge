import styled from 'styled-components';
import { SimpleComponent } from '../types/simple-component';
import { Flex } from './flex';

interface Tag {
  name: string;
  value: string;
}

interface TagGroupProps {
  items: Tag[];
  action: (item: string) => void;
  selected: string;
}

const StyledTag = styled.button`
  background-color: transparent;
  border: 1px solid white;
  border-radius: 20px;
  color: white;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 0.8rem;

  transition: 300ms;

  &.active {
    background-color: white;
    color: black;
  }
`;

export const TagGroup = ({
  items,
  action,
  selected,
}: TagGroupProps & SimpleComponent) => {
  return (
    <Flex gap="15px" margin="8px 0px 16px">
      {items.map(item => (
        <StyledTag
          key={item.value}
          role="checkbox"
          aria-checked
          className={selected === item.value ? 'active' : ''}
          onClick={() => {
            action(item.value);
          }}
        >
          {item.name}
        </StyledTag>
      ))}
    </Flex>
  );
};
