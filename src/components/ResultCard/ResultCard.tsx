import {
    StyledCardBody,
    StyledCardContainer,
    StyledPlayButton,
    StyledCardHeader,
} from './ResultCard.styles';

interface Props {
    id: string;
    description: string;
    name: string;
    image: string;
}

const ResultCard: React.FunctionComponent<Props> = ({
    id,
    description,
    name,
    image,
}) => (
    <StyledCardContainer>
        <StyledCardHeader>
            <img src={image} alt={`${name} cover`} />
            <StyledPlayButton>
                <svg
                    role="img"
                    height="24"
                    width="24"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-encore-id="icon"
                >
                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                </svg>
            </StyledPlayButton>
        </StyledCardHeader>
        <StyledCardBody>
            <p>{name}y</p>
            <span>{description}</span>
        </StyledCardBody>
    </StyledCardContainer>
);

export default ResultCard;
