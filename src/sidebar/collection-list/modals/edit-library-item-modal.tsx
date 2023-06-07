import styled from 'styled-components';
import { LibraryItem } from '../../../shared/types/library-item';
import { Flex } from '../../../shared/ui/flex';
import { Modal, ModalProps } from '../../../shared/ui/modal';
import { CrossIcon } from '../../../assets/icons';
import { ThemeButton } from '../../../shared/ui/button';
import {
  FormGroup,
  StyledErrorMessage,
  TextInput,
} from '../../../main-view/auth/styles';
import { isNeeded } from '../../../main-view/auth/utils';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

interface EditLibraryItemModalProps extends ModalProps {
  item?: LibraryItem;
  onSave: (payload: LibraryItem) => void;
}

const EditInput = styled(TextInput)`
  background-color: hsla(0, 0%, 100%, 0.1);
  border: none;
  width: 100%;
  box-shadow: none;
  color: white;
`;

const StyledFormGroup = styled(FormGroup)`
  label {
    color: var(--unactive);
  }
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const EditLibraryItemModal = ({
  isOpen,
  toggle,
  item,
  onSave,
}: EditLibraryItemModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LibraryItem>({
    defaultValues: item,
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });

  useEffect(() => {
    reset({
      entity: item?.entity,
      id: item?.id,
    });
  }, [item, reset]);
  return (
    <Modal {...{ isOpen, toggle }} width="50%">
      <Flex
        padding="16px"
        width="100%"
        direction="column"
        justifyItems="center"
        align="center"
        gap="32px"
      >
        <Flex justifyContent="space-between" width="inherit" align="center">
          <h3>Edit details</h3>
          <ThemeButton onClick={toggle}>
            <CrossIcon fill="var(--unactive)" />
          </ThemeButton>
        </Flex>
        <StyledForm
          onSubmit={handleSubmit((data, e) => {
            e?.preventDefault();

            onSave(data);
            toggle();
          })}
        >
          <input
            type="hidden"
            {...register('id', {
              value: item?.id,
            })}
          />
          <StyledFormGroup>
            <label htmlFor="name">Name</label>
            <EditInput
              id="name"
              {...register('entity.name', {
                validate: isNeeded(),
              })}
            />
            <StyledErrorMessage>
              {errors.entity?.name?.message}
            </StyledErrorMessage>
          </StyledFormGroup>
          <Flex width="100%" gap="10px" justifyContent="end">
            <ThemeButton type="submit">
              <span>Save</span>
            </ThemeButton>
          </Flex>
        </StyledForm>
      </Flex>
    </Modal>
  );
};
