const fetchDataButton = document.getElementById("fetchDataButton");
const videoDataElement = document.getElementById("videoData");

fetchDataButton.addEventListener("click", () => {
  videoDataElement.innerHTML = "Loading....."
  // When the button is clicked, fetch the video data from the server
  fetch("http://localhost:8080/api/videos") // Replace with the actual endpoint to fetch video data
    .then((response) => response.json())
    .then((data) => {
      // Once the data is fetched, display it on the page
      showVideoData(data.video);
      // data = JSON.parse(data);
      console.log("clicked")
      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching video data:", error.message);
    });
});
 function showVideoData(videos) {
   videoDataElement.innerHTML = ""; // Clear previous data if any

   videos.forEach((video) => {
     const videoDiv = document.createElement("div");
     videoDiv.classList.add("video");

     const thumbnailImage = document.createElement("img");
     thumbnailImage.src = video.thumbnails.medium.url;
     thumbnailImage.alt = video.title;
     thumbnailImage.classList.add("video-thumbnail");

     const videoContentDiv = document.createElement("div");
     videoContentDiv.classList.add("video-content");

     const titleElement = document.createElement("h2");
     titleElement.textContent = video.title;
     titleElement.classList.add("video-title");

     const descriptionElement = document.createElement("p");
     descriptionElement.textContent = video.description;
     descriptionElement.classList.add("video-description");

     const publishedDateElement = document.createElement("p");
     const publishedDate = new Date(video.publishedDate).toLocaleString(
       "en-IN",
       {
         year: "numeric",
         month: "short",
         day: "numeric",
       }
     );
     publishedDateElement.textContent = "Published Date: " + publishedDate;
     publishedDateElement.classList.add("video-published");

     videoContentDiv.appendChild(titleElement);
     videoContentDiv.appendChild(descriptionElement);
     videoContentDiv.appendChild(publishedDateElement);

     videoDiv.appendChild(thumbnailImage);
     videoDiv.appendChild(videoContentDiv);

     videoDataElement.appendChild(videoDiv);
   });
 }
