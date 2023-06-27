import { HomeLayout } from '../../Layout/HomeLayout';
import { useParams } from 'react-router-dom';
import { PlaylistInformation } from '../../components/PlaylistInformation';
import { PlaylistTracklist } from '../../components/PlaylistTracklist';

const Playlist = () => {
    const { playlistId } = useParams();
    const id = parseInt(playlistId || '');

    return (
        <HomeLayout>
            <PlaylistInformation playlistId={id} />
            <PlaylistTracklist playlistId={id} />
        </HomeLayout>
    );
};

export default Playlist;
