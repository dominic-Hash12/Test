const button = document.querySelector("button");

button.addEventListener("click", () => {

    document.querySelector(".places").scrollIntoView({

        behavior:"smooth"

    });

});