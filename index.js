const reviews = [
    {
        id: 1,
        n: "Maya",
        image: "https://www.google.com/search?q=pessoas&tbm=isch&ved=2ahUKEwj3nunF9uz3AhUPR7gEHaCwDZ8Q2-cCegQIABAA&oq=pessoas&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyBAgAEEMyBAgAEEMyCAgAEIAEELEDMggIABCABBCxAzIICAAQgAQQsQMyCAgAEIAEELEDMgsIABCABBCxAxCDATIICAAQgAQQsQMyCAgAEIAEELEDOgcIIxDqAhAnOgQIIxAnOgUIABCABDoHCAAQsQMQQ1AoWNAHYLgJaAFwAHgBgAF0iAHhBpIBAzEuN5gBAKABAaoBC2d3cy13aXotaW1nsAEKwAEB&sclient=img&ei=w-6GYrexDY-O4dUPoOG2-Ak&bih=937&biw=1920&rlz=1C1GCEA_enBR944BR944#imgrc=th7orKTTFITv5M",

        job: "Web dev",
        review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore esse excepturi neque porro mollitia nostrum error illum. Soluta autem doloribus voluptatibus voluptas maiores repellendus sunt architecto delectus! Voluptates, ullam commodi."
    },
    {
        id: 2,
        n: "Igor",
        image: "www.pexels.com/pt-br/foto/homem-sorrindo-atras-da-parede-220453/",

        job: "Game dev | web designer",
        review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore esse excepturi neque porro mollitia nostrum error illum. Soluta autem doloribus voluptatibus voluptas maiores repellendus sunt architecto delectus! Voluptates, ullam commodi."
    },
    {
        id: 3,
        n: "Victor",
        image: "https://www.pexels.com/pt-br/foto/fotografia-de-um-cara-vestindo-uma-camisa-verde-1222271/",

        job: "C# developer",
        review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore esse excepturi neque porro mollitia nostrum error illum. Soluta autem doloribus voluptatibus voluptas maiores repellendus sunt architecto delectus! Voluptates, ullam commodi."
    },
    {
        id: 4,
        n: "Jhonnathan",
        image: "https://www.pexels.com/pt-br/foto/homem-de-jaqueta-vermelha-1681010/",

        job: "React js expert",
        review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore esse excepturi neque porro mollitia nostrum error illum. Soluta autem doloribus voluptatibus voluptas maiores repellendus sunt architecto delectus! Voluptates, ullam commodi."
    },
    {
        id: 5,
        n: "Jessica",
        image: "https://www.pexels.com/pt-br/foto/foto-aproximada-de-mulher-com-casaco-marrom-e-blusa-cinza-733872/",

        job: "Tech lead",
        review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore esse excepturi neque porro mollitia nostrum error illum. Soluta autem doloribus voluptatibus voluptas maiores repellendus sunt architecto delectus! Voluptates, ullam commodi."
    },
]

const nextButton = document.getElementById("next-button")
const prevButton =  document.getElementById("prev-button")
const image = document.getElementById("image")
const job = document.getElementById("job")
const review = document.getElementById("review")
const n = document.getElementById("name")

let currentItem = 0

window.addEventListener("DOMContentLoaded", () => {
    showPerson(currentItem)
})

function showPerson(person){
    const item = reviews[person]
    image.src = item.img
    n.textContent = item.n
    job.textContent = item.job
    review.textContent = item.review
}


nextButton.addEventListener("click", () => {
    currentItem++
    if(currentItem > reviews.length - 1){
        currentItem = 0
    }
    showPerson(currentItem)
})


prevButton.addEventListener("click", () => {
    currentItem--
    if(currentItem < 0){
        currentItem = reviews.length - 1
    }
    showPerson(currentItem)
})