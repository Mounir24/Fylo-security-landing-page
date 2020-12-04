$(".testimonials-cards-slider").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
    autoplay: true,
    cssEase: "linear",
    draggable: true,
    swipeToSlide: true,
});

// Scroll Animation for Header section

/*window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});*/

// The progress bar (Scroll indicator)
//When the user scrolls the page , excute this function

function scrollIndicator() {
    let winScroll = document.documentElement.scrollTop;
    let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("sc-bar").style.width = `${scrolled}%`;
}

window.onscroll = function() {
    scrollIndicator();
};

// Box Modal

function ValidatEmail() {
    // Get Modal
    const modal = document.getElementById("bx-modal");
    // Get output DOM
    const userEm = document.getElementById("userEm");
    // Get user E-mail value
    const userEmail = document.getElementById("emailIn").value;
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Check if the user e-mail is Validate 100%
    if (userEmail.match(pattern)) {
        userEm.append(userEmail);
        modal.style.display = "block";
        modal.style.top = 50 + "%";
        console.log(userEmail);
    } else {
        alert("Something was wrong :(");
    }
}

// Titl.js Animation
$(".tilt-anim").tilt({
    glare: true,
    maxGlare: 0.5,
});

$(".btn").tilt({
    glare: true,
    maxGlare: 0.5,
});

// Function to cose box modal

function closeBx() {
    // Get Modal
    const modal = document.getElementById("bx-modal");
    modal.style.display = "none";
    window.location.reload(true);
}