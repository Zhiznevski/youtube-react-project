import './VideoCard.css';
export default function VideoCard({title, videoUrl, duration, views, author}) {
    return (
            <div class="recommended-videos__card">
                <div class="recommended-videos__video-container">
                    <img class="recommended-videos__video-image" src={videoUrl} alt="recommended video"></img>
                    <div class="recommended-videos__video-time-background"></div>
                    <div class="recommended-videos__video-time">{duration}</div>
                </div>
                <h3 class="recommended-videos__video-title">{title}</h3>
                <div class="recommended-videos__info">
                    <div class="recommended-videos__views-count">{views} views</div>
                    <div class="recommended-videos__author">{author}</div>
                </div>
            </div>

    )
}