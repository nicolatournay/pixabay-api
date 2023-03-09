// sélectionner main
const gallery = document.querySelector('.gallery');

// sélectionner le submit
const submit = document.querySelector('[type="submit"]');

// sélectionner photo
const photo = document.querySelector('[value="photo"]');

// sélectionner photo
const video = document.querySelector('[value="video"]');

// sélectionner champ de mot clé
const keyword = document.querySelector('[name="keyword"]');

// fonction submit
submit.addEventListener("click", () => {
    if (photo.checked) {
        fetchPic(keyword.value);
    } else {
        fetchVid(keyword.value);
    }
    keyword.value = "";
    event.preventDefault();
});

// fonction chercher photo
function fetchPic(keyword) {
    fetch(`https://pixabay.com/api/?key=34262484-9de7ff969e8bde64f0dad8c7a&q=${keyword}&image_type=photo`)
    .then(response => response.json())
    .then(data => {
        console.log(data);    
        displayImg(data);
    })  
    .catch(error => {
        console.error("Erreur lors de la récupération des données :", error);
    });
}

// afficher les images
function displayImg(images) {
    gallery.innerHTML = "";
    images.hits.forEach(image => {
        let template = `
        <div class="image">
            <a href="${image.pageURL}" target="_blank">
                <i class="fa-solid fa-up-right-from-square"></i>
            </a>
            <img src="${image.webformatURL}" alt="${image.tags}">
        </div>
        `;
        gallery.innerHTML += template;
    });
}

// afficher les vidéos
function displayVid(videos) {
    gallery.innerHTML = "";
    videos.hits.forEach(video => {
        let template = `
        <video controls>
            <source src="${video.videos.small.url}" type="video/mp4">
            <source src="maVideo.webm" type="video/webm">
            <p>Votre navigateur ne prend pas en charge les vidéos HTML5. Voici <a href="${video.pageURL}">un lien pour télécharger la vidéo</a>.</p>
        </video>
        `;
        gallery.innerHTML += template;
    });
}

// fonction video ❗à modifier
function fetchVid(keyword) {
    fetch(`https://pixabay.com/api/videos/?key=34262484-9de7ff969e8bde64f0dad8c7a&q=${keyword}&image_type=photo`)
    .then(response => response.json())
    .then(data => {
        console.log(data);    
        displayVid(data);
    })  
    .catch(error => {
        console.error("Erreur lors de la récupération des données :", error);
    });
}


// affichage par défaut
function jellyFish() {
    fetch("https://pixabay.com/api/?key=34262484-9de7ff969e8bde64f0dad8c7a&q=meduse&image_type=photo")
    .then(response => response.json())
    .then(data => {
        console.log(data);    
        displayImg(data);
    })  
    .catch(error => {
        console.error("Erreur lors de la récupération des données :", error);
    });
}



