// unsplash API
const apiKey = "WVBllTIFGwQGnKbtaDwnio0m0N1GeBgvyj-eszYh-ms";

// variables for getting elements from the DOM
const form = document.getElementById('form');
const textInput = document.getElementById('textInput');
const button = document.getElementById('searchButton');
const imagesElement = document.querySelector(".images");
const modalElement = document.getElementById("modal")
const closeButton = document.getElementById("close_button");
const prev = document.getElementById("previous");
const next = document.getElementById("next");

// const image0 = document.getElementById('image0');

let page = 1;
let textInputValue = "";




// async function to get pictures from unsplash
async function getImageData() {
    try {
        textInputValue = textInput.value;
        const response = await fetch(`https://api.unsplash.com/search/photos?=${page}&query=${textInputValue}%20art&client_id=${apiKey}`);
        const data = await response.json();
        console.log(data)
        if (page === 1){
            imagesElement.innerHTML = "";
        } 
        const results = data.results;

        results.map((result) => {
            // create a div to place image in
            const imageContainer = document.createElement("div");
            imageContainer.classList.add("search-result");

            // create image element
            const image = document.createElement("img");
            image.src = result.urls.small;
            image.alt = result.alt_description;
            image.classList.add("image");

            // appending elements to the DOM
            imageContainer.appendChild(image);
            imagesElement.appendChild(imageContainer);
            imageContainer.classList.add("imageContainer");
            
            // discription container
            const discriptionContainer = document.createElement("div")
            discriptionContainer.classList.add("discriptionContainer")

            // discription
            const imageText = document.createElement("p");
            imageText.classList.add("bio");
            imageText.style.fontWeight = 800;
            imageText.textContent = "By: " + result.user.first_name;
            imageContainer.appendChild(discriptionContainer);
            discriptionContainer.appendChild(imageText);

            // user link
            const userLink = result.links.html;
            const userAnchor = document.createElement("a");
            userAnchor.classList.add("bio");
            userAnchor.href = userLink;
            userAnchor.innerHTML = '<i class="fa-solid fa-arrow-up-right-from-square"></i>';
            discriptionContainer.appendChild(userAnchor)

            // dowload button
            const downloadLink = result.links.download + "&force=true";
            const downloadID = result.id;
            const downloadAnchor = document.createElement("a");
            downloadAnchor.href = downloadLink ;
            downloadAnchor.download = downloadID;
            downloadAnchor.innerHTML = '<i class="fa-solid fa-download"></i>';
            discriptionContainer.appendChild(downloadAnchor);
            const test = downloadLink
            
            console.log(discriptionContainer)
            console.log(imagesElement)

            // modal
            const modalDiv = document.createElement("div");
            const modalImage = document.createElement("img");
            modalImage.src = result.urls.full;
            modalImage.classList.add("modalImage");
            modalElement.appendChild(modalDiv);
            modalDiv.appendChild(modalImage);

            console.log(modalElement);

            // open image on modal function
            function openModal () {
                document.getElementById("modal").style.display = "block";
            }
            function closeModal() {
                document.getElementById("modal").style.display = "none";
            }

            image.addEventListener("click", (event) => {
                openModal()
            })
            closeButton.addEventListener("click", (event) =>{
                closeModal()
            })

            // control buttons

            // declaring array
            // const imageArray = [];
            // // getting images from the DOM by class
            // const arrayImages = document.getElementsByClassName("modalImage");
            // // creating a loop to collect links from the DOM
            // for ( let i = 0; i < arrayImages.length; i++ ) {
            //     const aImage = arrayImages[i];
            //     imageArray.push(result.urls.full)
            // }
            // match link to current image and set current image
            
            // console.log(imageArray)

        })
        
        console.log(data)
        
    } catch (error) {
    }
}

// adding event listener on the form
form.addEventListener('submit', (event) => {
    event.preventDefault();
    page = 1;
    getImageData()
})