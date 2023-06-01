import { Props } from './props';
import { ResultCard } from '../../components/ResultCard';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { Grid } from './Grid.styles';

const PlaylistsSearch: React.FC<Props> = ({ q }) => {
    const { data: searchData, lastElement } = useInfiniteScroll({
        q,
        type: ['playlist'],
    });

    return (
        <Grid>
            {searchData?.playlists?.items?.map((playlist, index) => {
                if (searchData?.playlists?.items?.length === index + 1) {
                    return (
                        <ResultCard
                            key={playlist.id}
                            id={playlist.id}
                            name={playlist.name}
                            image={playlist.image}
                            description={playlist.description}
                            ref={lastElement}
                        />
                    );
                } else {
                    return (
                        <ResultCard
                            key={playlist.id}
                            id={playlist.id}
                            name={playlist.name}
                            image={playlist.image}
                            description={playlist.description}
                        />
                    );
                }
            })}
        </Grid>
    );
};

export default PlaylistsSearch;
