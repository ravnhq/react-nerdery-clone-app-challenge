import { Props } from './props';
import { ResultCard } from '../../components/ResultCard';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { Grid } from './Grid.styles';

const ArtistsSearch: React.FC<Props> = ({ q }) => {
    const { data: searchData, lastElement } = useInfiniteScroll({
        q,
        type: ['artist'],
    });

    return (
        <Grid>
            {searchData?.artists?.items?.map((artist, index) => {
                if (searchData?.artists?.items?.length === index + 1) {
                    return (
                        <ResultCard
                            key={artist.id}
                            id={artist.id}
                            name={artist.name}
                            image={artist.image}
                            description={artist.description}
                            ref={lastElement}
                        />
                    );
                } else {
                    return (
                        <ResultCard
                            key={artist.id}
                            id={artist.id}
                            name={artist.name}
                            image={artist.image}
                            description={artist.description}
                        />
                    );
                }
            })}
        </Grid>
    );
};

export default ArtistsSearch;
