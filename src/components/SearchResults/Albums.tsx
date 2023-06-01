import { Props } from './props';
import { ResultCard } from '../../components/ResultCard';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { Grid } from './Grid.styles';

const AlbumsSearch: React.FC<Props> = ({ q }) => {
    const { data: searchData, lastElement } = useInfiniteScroll({
        q,
        type: ['album'],
    });

    return (
        <Grid>
            {searchData?.albums?.items?.map((album, index) => {
                if (searchData?.albums?.items?.length === index + 1) {
                    return (
                        <ResultCard
                            key={album.id}
                            id={album.id}
                            name={album.name}
                            image={album.image}
                            description={album.description}
                            ref={lastElement}
                        />
                    );
                } else {
                    return (
                        <ResultCard
                            key={album.id}
                            id={album.id}
                            name={album.name}
                            image={album.image}
                            description={album.description}
                        />
                    );
                }
            })}
        </Grid>
    );
};

export default AlbumsSearch;
