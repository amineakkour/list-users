const url = 'https://randomuser.me/api/?results=30'
const container = document.querySelector(".container")
const listItem = document.querySelector(".container ul")
const input = document.querySelector(".container header input")

async function getRandomUsers(){
    const response = await fetch(url);
    
    JSONDATA = await response.json();
    const data = await JSONDATA.results
    
    function createUsers(){
        input.focus()
        listItem.innerHTML = ""
        data.forEach(user => {
            const list = document.createElement("li")

            list.innerHTML = `
                <img src = "${user.picture.large}" alt = "${user.name.first} ${user.name.last}">
                <h4>${user.name.title}. ${user.name.first} ${user.name.last}</h4>
            `
            listItem.appendChild(list)
        });
    }

    createUsers()
}

getRandomUsers()



input.addEventListener("input", e => {
    const items = document.querySelectorAll("ul li")

    items.forEach(item => {
        if(item.innerHTML.toLowerCase().includes(e.target.value.toLowerCase())){
            item.classList.remove("hide")
        }else{
            item.classList.add("hide")
        }
    });
})