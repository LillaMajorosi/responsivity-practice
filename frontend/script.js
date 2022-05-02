let headerComponent = function(title){
    return `
    <header>${title}</header>
    `
}

let sectionComponent = function (id, buttonText, h2Text){
    return `
    <section id="${id}">
        <h2>${h2Text} <span>Hello</span> </h2>
        <button>${buttonText} </button>
    </section>
    `
}

let footerComponent = function() {
    return `
        <footer> </footer>
    `
}

const loadEvent = function (){
    const rootElement = document.getElementById("root");

    rootElement.insertAdjacentHTML("beforebegin", headerComponent("Responsivity practice"))

    let sections = ""
    for (let index = 1; index < 5; index++) {
        sections += sectionComponent(`id-${index}`, `Button ${index}`, `Subtitle ${index}`) //ezek a stringek amiket kiír
    }

    rootElement.insertAdjacentHTML("beforeend", sections);

    rootElement.insertAdjacentHTML("afterend", footerComponent());

}

window.addEventListener("load", loadEvent) 