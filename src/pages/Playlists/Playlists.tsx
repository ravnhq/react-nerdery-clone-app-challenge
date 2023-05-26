import { HomeLayout } from '../../Layout/HomeLayout';
import { useParams } from 'react-router-dom';
const Playlist = () => {
    const { playlistId } = useParams<{ playlistId: string }>();

    console.log(playlistId);

    return (
        <HomeLayout loading={false}>
            <h1>Playlist</h1>
        </HomeLayout>
    );
};

export default Playlist;
