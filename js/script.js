const RESULTS = 20
const KEY = '&key=AIzaSyDcT-AmQZZ5jbBWZcHziTGjFCBc1H1wsk4'
const API = 'https://www.googleapis.com/youtube/v3/search?&part=snippet&maxResults=' + RESULTS + '&type=video' + KEY + '&q='
const form = document.getElementById('form')
const input = document.getElementById('inp')
const output = document.getElementById('output')
const output2 = document.getElementById('output2')

const getVideo = async () => {
    const request = await fetch(API + input.value)
    const response = await request.json()
    return response.items
}
const renderVideos = (outType) => {
    outType.innerHTML = ''
    const videos = getVideo()
    videos.then(response => {
        response.map(video => {
            console.log(video);
            const card = document.createElement('div')
            card.classList.add('card')
            const img = document.createElement('img')
            img.src = video.snippet.thumbnails.medium.url
            const title = document.createElement('h2')
            title.textContent = video.snippet.title
            const channeIName = document.createElement('h5')
            channeIName.textContent = video.snippet.channelTitle
            channeIName.addEventListener('click', () => document.location.href = 'https://youtube.com/channel/' + video.snippet.channelId)


            card.append(img, title, channeIName)
            outType.append(card)
            card.addEventListener('click', () => renderVideoById(video))
        })
    })
}

const renderVideoById = (videoById) => {
    console.log(videobyId);
    output.innerHTML = ''
    const card2 = document.createElement('div')
    const card3 = document.createElement('div')
    const iframe = document.createElement('div')
    const title = document.createElement('h2')
    iframe.innerHTML = `
    <iframe width="640" height="480" src="https://www.youtube.com/embed/${videoById.id.videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    title.textContent = videobyId.snippet.title
    card2.append(iframe, title)
    outType.append(card2)
    renderVideos(output2)




}


form.addEventListener('submit', (e) => {
    e.preventDefault()
    renderVideos(output)
})

renderVideos(output)
getVideo()


























const cards = gsap.utils.toArray('.card')

cards.forEach(card => {
    const anim = gsap.fromTo(
        card,
        {
            autoAlpha: 0,
            y: 100,
            x: -100,
            rotate: -20
        },
        {
            duration: 0.6,
            autoAlpha: 1,
            y: 0,
            x: 0,
            rotate: 0
        }
    );
    ScrollTrigger.create({
        trigger: card,
        animation: anim,
    })
});