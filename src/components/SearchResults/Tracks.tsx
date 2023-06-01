import { TrackCard } from '../../components/TrackCard';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { Props } from './props';

const TracksSearch: React.FC<Props> = ({ q }) => {
    const { data: searchData, lastElement } = useInfiniteScroll({
        q,
        type: ['track'],
    });

    return (
        <>
            {searchData?.tracks?.items?.map((track, index) => {
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
