import './VideosFeed.css';
import { videos } from '../../data/data';
import VideoCard from '../VideoCard/VideoCard';
import { Switch } from '@mui/material';
export default function VideosFeed() {
    return (
    <section class="recommended-videos">
        <div class="recommended-videos__header">
            <h2 class="recommended-videos__title">Next</h2>
            <div className='recommended-videos__control-block'>
                <p className='recommended-videos__control-title'>Autoplay</p>
                <Switch defaultChecked/>
            </div>
        </div>
        <div class="recommended-videos__content">
            {videos.map(card => (
                <VideoCard key={card.id} {...card} />
            ))}
        </div>
    </section>
    )
}