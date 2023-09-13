const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-card-container]")

fetch("https://jsonplaceholder.typicode.com/photos")
.then(res => res.json())
.then(data => {
    data.forEach(user => {
        const card = userCardTemplate.content.cloneNode(true).children[0]
        const header = card.querySelector("[data-header]")
        const body = card.querySelector("[data-body]")

        header.textContent = url
        body.textContent = user.email
    
    userCardContainer .append(card)
})
})

