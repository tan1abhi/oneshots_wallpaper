let page = 1;
const imagesPerPage = 50;
let loadingImages = false;

async function fetchImages() {
    try {
        loadingImages = true;
        const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${imagesPerPage}`);
        const data = await response.json();
        page++;
        loadingImages = false;
        return data;
    } catch (error) {
        console.error('Error fetching images from Lorem Picsum:', error);
        loadingImages = false;
    }
}

function generateFixedImage() {
    const width = 300;
    const height = 400;

    // Use the Picsum API to generate a fixed size image URL
    return `https://picsum.photos/${width}/${height}/?random=${Math.random()}`;
}

function displayImages(images) {
    const container = document.getElementById('imageContainer');
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = generateFixedImage();
        imgElement.alt = `Lorem Picsum Image ${image.id}`;
        imgElement.classList.add('image');
        container.appendChild(imgElement);
    });
}

function handleScroll() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement || document.body;
    if (scrollTop + clientHeight >= scrollHeight - 100 && !loadingImages) {
        fetchImages().then(images => displayImages(images));
    }
}

// Initial load
fetchImages().then(images => displayImages(images));

// Add scroll event listener
window.addEventListener('scroll', handleScroll);


function handleSearch() {
    const searchInput = document.getElementById('inp-box').value.toLowerCase();
    const navbarLinks = document.querySelectorAll('.navbar a');

    // Loop through navbar links and check if the search input matches
    for (const link of navbarLinks) {
        const linkText = link.innerText.toLowerCase();

        if (linkText.includes(searchInput)) {
            // Redirect to the matched link
            window.location.href = link.href;
            return;
        }
    }

    // If no match found, you can handle it accordingly (e.g., display a message)
    alert('No matching element found.');
}


//login and create an account

function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'block';
}

function login() {

    var name1 = document.getElementById('name1').value;
    if(name1==""){
        alert("please enter the name");
    }
    var name2 = document.getElementById('name2').value;
    if(name2==""){
        alert("please enter the password");
    }

    if(name1!="" && name2!=""){
        const loged=document.getElementById('loginPopup');
        loged.style.display="none";
        alert('Login clicked');
    }
}


function createAccount() {



    var acc1=document.getElementById("acc1").value;
    if(acc1==""){
        alert("please enter the name")
    }

    var acc2=document.getElementById("acc2").value;
    if(acc1==""){
        alert("please enter the mobile no")
    }

    var acc3=document.getElementById("acc3").value;
    if(acc1==""){
        alert("please enter the email")
    }

    var acc4=document.getElementById("acc4").value;
    if(acc1==""){
        alert("please enter the password")
    }
    // Add your create account logic here

    if(acc1!="" && acc2!="" && acc3!="" && acc4!=""){
        const loged=document.getElementById('createAccountPopup');
        loged.style.display="none";

        const loged1=document.getElementById('loginPopup');
        loged1.style.display="none";

        alert('Create Account clicked');
    }
}

function closepopup(popupid){
    const loged=document.getElementById(popupid);
    loged.style.display="none";
}

function cross(popupid) {
    const cross = document.getElementById(popupid);
    cross.style.display="none";
}