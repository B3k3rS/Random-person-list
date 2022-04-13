const cardList = document.querySelector('.card-list')
const moreBut = document.querySelector('.more-but')

let card = ``

const loadPerson = (res) => {
    card += `    
        <div class="card">
            <img src="${res.picture.large}" alt="${res.name.first}">
            <h2>${res.name.first} ${res.name.last}</h1>
            <p>${res.email}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa praesentium soluta inventore, odio autem placeat. Iusto modi consequuntur nulla dolore labore quos quae aliquam fugiat adipisci mollitia ipsa eos saepe nam molestias commodi repellendus necessitatibus nemo officiis sapiente, nihil quia blanditiis deleniti quibusdam! Facere ullam tempore sit architecto hic eius.</p>
        </div>
    `
    cardList.innerHTML = card;
}

const newPerson = (count) => {
    for (let i = 0 ; i < count; i++) {
        fetch(`https://randomuser.me/api/`)
            .then(res => res.json())
            .then(data => {
                console.log(data.results[0])
                //  достаёт инфу
                loadPerson(data.results[0])
            })
    }
}

newPerson(5)

moreBut.addEventListener('click', () => {
    newPerson(15)
})