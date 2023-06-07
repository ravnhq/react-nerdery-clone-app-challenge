import styled from 'styled-components';
import { ThemeButton } from '../../shared/ui/button';
import { Flex } from '../../shared/ui/flex';
import { AuthCollectionListContainer } from './styles';
import { useLibrary } from '../../hooks/useLibrary';
import { AuthCollectionItem } from './collection-item/collection-item';
import { LibraryContextMenu } from '../../context-menu';
import { useRef } from 'react';
import { useContextMenu } from '../../hooks/useContextMenu';
import { LibraryItem } from '../../shared/types/library-item';
import { useModal } from '../../hooks/useModal';
import { EditLibraryItemModal } from './modals/edit-library-item-modal';

const OnboardingButton = styled(ThemeButton)`
  span {
    font-size: 0.85rem;
    font-weight: 700;
    padding-inline: 10px;
    padding: 8px 15px;
    min-block-size: 0px;
  }
`;

const StyledCollectionItem = styled(AuthCollectionItem)``;

export const AuthCollectionList = () => {
  const { addOwnPlaylist, libraryItems, edit } = useLibrary();
  const contextMenuRef = useRef<HTMLElement>(null);
  const { toggle: toggleEditModal, isOpen } = useModal();

  const { context, onContextMenu } = useContextMenu<LibraryItem>(true);

  return (
    <AuthCollectionListContainer>
      <LibraryContextMenu
        menuRef={contextMenuRef}
        isToggled={context.isToggled}
        positionX={context.x}
        positionY={context.y}
        targetedItem={context.extraData}
        editAction={toggleEditModal}
      />

      <EditLibraryItemModal
        isOpen={isOpen}
        toggle={toggleEditModal}
        item={context.extraData}
        onSave={edit}
      />

      <Flex padding="0 8px 8px" width="100%">
        {libraryItems.length === 0 ? (
          <Flex
            background="var(--elevated-base)"
            padding="16px 20px"
            margin="8px 0"
            width="100%"
            borderRadius="8px"
            gap="20px"
          >
            <div>
              <div>Create your first Playlist</div>
              <span>It's easy, we'll help you</span>
              <OnboardingButton onClick={() => addOwnPlaylist()}>
                <span>Create Playlist</span>
              </OnboardingButton>
            </div>
          </Flex>
        ) : (
          <Flex direction="column" width="100%" gap="5px">
            {libraryItems.map(item => (
              <StyledCollectionItem
                key={item.id}
                {...item}
                onContextMenu={e => onContextMenu(e, item)}
              />
            ))}
          </Flex>
        )}
      </Flex>
    </AuthCollectionListContainer>
  );
};
