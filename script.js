document.addEventListener('DOMContentLoaded', function() {
    const videoListItems = document.querySelectorAll('#video-list li');
    const mainVideo = document.getElementById('main-video');

    videoListItems.forEach(item => {
        item.addEventListener('click', function() {
            const videoId = item.getAttribute('data-video-id');
            mainVideo.src = `https://www.youtube.com/embed/${videoId}`;
            videoListItems.forEach(li => li.classList.remove('active'));
            item.classList.add('active');
        });
    });
});
