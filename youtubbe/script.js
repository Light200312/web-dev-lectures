function playVideo(src, title) {
    const videoPlayer = document.getElementById('video-player');
    const videoSource = document.getElementById('video-source');
    const videoTitle = document.getElementById('video-title');
    const player = document.getElementById('player');

    videoSource.src = src;
    videoTitle.textContent = title;
    player.load();
    videoPlayer.style.display = 'flex';
}

function closePlayer() {
    const videoPlayer = document.getElementById('video-player');
    videoPlayer.style.display = 'none';
}

function searchVideos() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const videos = document.querySelectorAll('.video');

    videos.forEach(video => {
        const title = video.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchInput)) {
            video.style.display = 'block';
        } else {
            video.style.display = 'none';
        }
    });
}