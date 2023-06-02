import { TrackCard } from '../../components/TrackCard';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { Props } from './props';

const TracksSearch: React.FC<Props> = ({ q }) => {
    // TODO: rename to lastElementRef
    const { data: searchData, lastElement } = useInfiniteScroll({
        q,
        type: ['track'],
    });

    // TODO: make variable for search length
    // TODO: Make a variable to check if falsy or truthy
    return (
        <>
            {searchData?.tracks?.items?.map((track, index) => {
                // TODO: Make this not a conditonal
                if (searchData?.tracks?.items?.length === index + 1) {
                    return (
                        <TrackCard
                            key={track.id}
                            track={track}
                            ref={lastElement}
                        />
                    );
                } else {
                    return <TrackCard key={track.id} track={track} />;
                }
            })}
        </>
    );
};

export default TracksSearch;
