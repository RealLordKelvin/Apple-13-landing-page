// Responsive NavSlide
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".overall-nav-links");
    const navLinks = document.querySelectorAll(".overall-nav-links a");

    // Toggle Nav
    burger.addEventListener("click", () =>{
        nav.classList.toggle("nav-active")

        navLinks.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation = ""
            }
            else{
                link.style.animation = "navLinkFade 0.5s ease forwards " + (index/ 5 + 0.5) + "s";
            }
        });
        //Burger animation
        burger.classList.toggle("change");
    });
}

navSlide();