
function fetchdata(){
    fetch("data.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.buttons.forEach(element => {
            console.log(element.text);
            let btnlist = document.getElementById("btnlist");
            btnlist.insertAdjacentHTML("afterbegin", `<button onclick="location.href='${element.url}';">${element.text}</button>`)
        });
    })
}

function init() {
    fetchdata();
}

window.onload = init;