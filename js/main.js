const handleClick = () => {
    const buttons = document.querySelectorAll(".button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", (e) => {
            console.log(e.target.innerText);
        });
    }
};