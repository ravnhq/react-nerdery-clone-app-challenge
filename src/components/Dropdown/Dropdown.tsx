import { StyledDropdown } from '../../components/Styles/Dropdown/Dropdown.styles';
import React from 'react';

interface Props {
    options: {
        value: string;
        label: string;
    }[];
    backgroundColor?: string;
    flexGrow?: string;
    width?: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown: React.FunctionComponent<Props> = ({
    options,
    backgroundColor,
    flexGrow,
    width,
    onChange,
}) => (
    <StyledDropdown
        backgroundColor={backgroundColor}
        flexGrow={flexGrow}
        width={width}
        onChange={onChange}
        defaultValue={options[0].value}
    >
        {options.map((option, index) => (
            <option key={index} value={option.value} disabled={index === 0}>
                {option.label}
            </option>
        ))}
    </StyledDropdown>
);

export default Dropdown;
