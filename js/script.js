
function fetchdata(){
    fetch("data.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.buttons.forEach(element => {
            console.log(element.text);
            let btnlist = document.getElementById("btnlist");
            btnlist.insertAdjacentHTML("afterbegin", `<button onclick="location.href='${element.url}';">${element.text}</button>`);
            let footer = document.getElementById("footer");
            footer.innerHTML = "Made by &copy; Ewoutdc";
            footer.onclick = ()=> window.location.href = "https://github.com/EwoutDeCoster/Linktree"
            footer.title = "Github repository";
        });
    })
}

function init() {
    fetchdata();
}

window.onload = init;