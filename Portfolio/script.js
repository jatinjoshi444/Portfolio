let dayNight = document.querySelector(".daynight");
let banner = document.querySelector(".banner");

dayNight.addEventListener("click", ()=>{
    banner.classList.toggle("night");
})

let typeing = new Typed("#text",{
    strings:["Jatin joshi"]
});
