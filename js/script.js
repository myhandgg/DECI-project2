const ul = document.querySelector("ul");
const sections = document.querySelectorAll("section");

let num = 1;

// looping over sections and put the title in the nav bar
for (let i = 0; i < sections.length; i++) {
  const list = document.createElement("li");
  const link = document.createElement("a");

  link.href = `#${sections[i].children[0].children[0].textContent
    .split(" ")[0]
    .toLocaleLowerCase()}-${num}`;
  link.textContent = sections[i].children[0].children[0].textContent;

  list.appendChild(link);

  ul.appendChild(list);
  num++;
}

// handling active section
window.onscroll = () => {
  if (window.scrollY >= 0 && window.scrollY < 800) {
    removeActive();
    sections[0].classList.add("active");
  } else if (window.scrollY >= 769 && window.scrollY < 1472) {
    removeActive();
    sections[1].classList.add("active");
  } else if (window.scrollY >= 1800 && window.scrollY < 2400) {
    removeActive();
    sections[2].classList.add("active");
  } else if (window.scrollY >= 2600 && window.scrollY < 3340) {
    removeActive();
    sections[3].classList.add("active");
  } else if (window.scrollY >= 3540 && window.scrollY < 4330) {
    removeActive();
    sections[4].classList.add("active");
  } else {
    for (let i = 0; i < sections.length; i++) {
      sections[i].classList.remove("active");
    }
  }
};

// removing active class from others and add it to the current one
function removeActive() {
  sections.forEach((e) => {
    e.classList.remove("active");
  });
}

// Comment functionality

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const commentInput = document.querySelector("#comment");
const commentDiv = document.querySelector("#comments-6 .user-comment");

const form = document.querySelector("form");

const nameInputError = document.querySelector(".name-error");
const emailInputError = document.querySelector(".email-error");
const commentInputError = document.querySelector(".comment-error");

const emailValidation = /\w+@/

// handling submitting the comment
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // handling if one of the inputs not valid
  if (!nameInput.value.trim()) {
    nameInputError.classList.remove("hide");
  } else {
    nameInputError.classList.add("hide");
  }
  if (!emailInput.value.trim()) {
    emailInputError.classList.remove("hide");
  } else {
    emailInputError.classList.add("hide");
  }
  if (!commentInput.value.trim()) {
    commentInputError.classList.remove("hide");
    return;
  } else {
    commentInputError.classList.add("hide");
  }
  if (!emailValidation.test(emailInput.value)) {
    emailInputError.classList.remove("hide")
  }
  // handling when all the inputs are valid
  if (nameInput.value !== "" && emailInput.value !== "" && emailValidation.test(emailInput.value) && commentInput.value !== "") {
    createComment();
  }
});

// function that creates user comment
function createComment() {
  const commentContainer = document.createElement("div");
  commentContainer.classList.add("comment");

  commentContainer.innerHTML = `
  <p><em>${commentInput.value}</em></p>
  <div class="email">
    <h4>${nameInput.value}</h4>
    <p>${emailInput.value}</p>
  </div>`

  commentDiv.prepend(commentContainer);

  nameInput.value = "";
  emailInput.value = "";
  commentInput.value = "";
}
