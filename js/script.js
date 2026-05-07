const btns = document.querySelectorAll(".stage .btn");
const stages = document.querySelectorAll(".stage");
const main = document.querySelector("main"); 

//Måske skal denne her del med//
const updateUI = (h2Text) => {
    const section = document.createElement("section");
    section.classList.add ("stage");
    section.classList.add ("active");

    const h2 =document.createElement ("h2");
    h2.textContent = "h2Text" ;
    section.append (h2) ;

    //Sæt ny section ind i main//
    main.replaceChildren ("section");
}
//Måske skal denne her del med//


const nextStage = (e) => {
    console.log(e.target.textContent);
    switch(e.target.textContent) {
        case "Start":
            stages[0].classList.remove("active");
            stages[1].classList.add("active");
        break;

        case "Åbner mailen for at blive klogere":
            stages[1].classList.remove("active");
            stages[2].classList.add("active");
        break;

        case "Sletter mailen og går i stedet på borger.dk for at tjekke Digital Post":
            stages[1].classList.remove("active");
            stages[5].classList.add("active");
        break;

        case "Klikker på linket":
            stages[2].classList.remove("active");
            stages[3].classList.add("active");
        break;

        case "Sletter mailen og går til borger.dk for at tjekke Digital Post":
            stages[2].classList.remove("active");
            stages[4].classList.add("active");
        break;

        case "Start forfra":
            stages.forEach(stage => stage.classList.remove("active"));
            stages[0].classList.add("active");
        break;

         default:
            console.log("Error");
    }
}

for(const btn of btns) {
    btn.addEventListener("click", nextStage)
}