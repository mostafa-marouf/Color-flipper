let btn = document.getElementById("btn");
let main = document.getElementById("root");

let elements = ["a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let colorId = "";

let chinageBg = () => {
    for (let i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * elements.length)
        colorId += elements[randomNumber];
    }
    main.style.backgroundColor = `#${colorId}`;
}





btn.addEventListener("click", () => {
    colorId = ""
    chinageBg();
});
