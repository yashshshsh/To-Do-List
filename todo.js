const input = document.querySelector(".input-box input");
const main = document.querySelector(".main");

addToContainer = (value) => {
    const newdiv = document.createElement("div");
    newdiv.className = "hero";
    newdiv.innerHTML = `
    ${value}
    <button class="fa-solid fa-xmark"></button>`;
    main.appendChild(newdiv);

    newdiv.addEventListener("click",()=>{
        newdiv.classList.toggle("line-through");
    })
    const cross = newdiv.querySelector(".fa-xmark");
    cross.addEventListener("click",()=>{
        main.removeChild(newdiv);
    })
}

input.addEventListener("keyup",(event)=>{
    if(event.key === "Enter"){
        addToContainer(input.value);
        input.value = "";
    }
})


