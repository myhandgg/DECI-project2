const ul = document.querySelector("ul")
const sections = document.querySelectorAll("section")

let num = 1

for (let i = 0; i < sections.length; i++) {
    const list = document.createElement("li")
    const link = document.createElement("a")
    
    link.href = `#${sections[i].children[0].children[0].textContent.split(" ")[0].toLocaleLowerCase()}-${num}`
    link.textContent = sections[i].children[0].children[0].textContent
    
    list.appendChild(link)
    
    ul.appendChild(list)
    num++
}
 
window.onscroll = () => {
    if(window.scrollY >= 0 && window.scrollY < 800) {
        removeActive()
        sections[0].classList.add("active")
    } else if (window.scrollY >= 769 && window.scrollY < 1472) {
        removeActive()
        sections[1].classList.add("active")
    } else if (window.scrollY >= 1800 && window.scrollY < 2400) {
        removeActive()
        sections[2].classList.add('active')
    } else if (window.scrollY >= 2600 && window.scrollY < 3340){
        removeActive()
        sections[3].classList.add("active")
    } else if (window.scrollY >= 3540 && window.scrollY < 4330){
        removeActive()
        sections[4].classList.add("active")
    }
     else {
        for (let i = 0; i < sections.length; i++) {
            sections[i].classList.remove("active")
        }
    }
}

function removeActive() {
    sections.forEach(e => {
        e.classList.remove("active")
    })
}

// Comment functionality

const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const commentInput = document.querySelector("#comment")
const commentDiv = document.querySelector("#comments-6 .user-comment")

const btn = document.querySelector(".submit-btn")

btn.addEventListener("click" , function() {
    if (!nameInput.value || !emailInput.value || !commentInput.value) return
    createComment()
})

function createComment() {
    const commentContainer = document.createElement("div")
    commentContainer.classList.add("comment")
    
    const comment = document.createElement("p")
    
    const em = document.createElement("em")
    em.textContent = commentInput.value
    
    comment.appendChild(em)

    const emailContainer = document.createElement("div")
    emailContainer.classList.add("email")

    const userName = document.createElement("h4")
    userName.textContent = nameInput.value

    const userEmail = document.createElement("p")
    userEmail.textContent = emailInput.value

    emailContainer.appendChild(userName)
    emailContainer.appendChild(userEmail)

    commentContainer.appendChild(comment)
    commentContainer.appendChild(emailContainer)    

    commentDiv.prepend(commentContainer)

    nameInput.value = ""
    emailInput.value = ""
    commentInput.value = ""
}
