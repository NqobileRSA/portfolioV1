const apiKey = "API-key";
const displayer = document.getElementById("display");
const searchButton = document.getElementById("searchButton");
let search = document.getElementById("search");
let nextPageToken = null;

async function requestData(query, pageToken = null) {
  let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&maxResults=10&key=${apiKey}`;
  if (pageToken) {
    url += `&pageToken=${pageToken}`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if (data.items.length === 0) {
      console.log("No videos found.");
      return;
    }

    nextPageToken = data.nextPageToken;

    data.items.forEach((element) => {
      // video frame
      const videoId = element.id.videoId;
      const videoDisplay = document.createElement("iframe");
      videoDisplay.src = `https://www.youtube.com/embed/${videoId}`;
      videoDisplay.setAttribute("allowfullscreen", "");
      const frame = document.createElement("div");
      frame.classList.add("frame");
      frame.appendChild(videoDisplay);
      // icon
      const iconSRC = element.snippet.thumbnails.high.url;
      const icon = document.createElement("img");
      icon.style.width = "50px";
      icon.style.height = "50px";
      icon.src = iconSRC;
      // title
      const videoTitle = element.snippet.title;
      // description
      const description = element.snippet.channelTitle;
      // video
      const video = document.createElement("div");
      video.classList.add("video");
      video.innerHTML = `
      <div class="card bg-dark text-light" style='height: 300px; id='card '>
      <div class="frame card-img-top">${frame.innerHTML}</div>
      <div class="descriptionContainer card-body">
        <div class="channelIcon">
          <img src="${iconSRC}" class="rounded-circle" style="width: 50px; height: 50px;">
        </div>
        <div class="description">
          <h6 class="videoTitle card-title">${videoTitle}</h6>
          <p class="channel card-text">${description}</p>
        </div>
      </div>
    </div>
    `;
      displayer.appendChild(video);
      console.log(video);
    });
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

const userInput = "most recent";
window.addEventListener("load", () => {
  requestData(userInput);
});

searchButton.addEventListener("click", () => {
  const userInput = search.value.trim();
  if (userInput !== "") {
    displayer.innerHTML = "";
    nextPageToken = null;
    requestData(userInput);
  }
});

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight && nextPageToken) {
    requestData(userInput, nextPageToken);
  }
});
