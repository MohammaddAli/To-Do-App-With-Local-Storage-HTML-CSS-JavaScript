let submit = document.querySelector(".add");
let input = document.querySelector(".input");
let task = document.querySelector(".tasks");

// if (window.localStorage.getItem) {
//     let taskDiv = document.createElement("div");
//     taskDiv.style.cssText = "background-color:pink; color: black; font-weight:bold; display: flex; justify-content: space-between;"
//     let button = document.createElement("button");   // try the text in button
//     button.textContent = "delete";
//     button.style.cssText = "background-color: #cb5151; font-size: 15px; color: white; border-radius: 7px;"
//     let textNode = document.createTextNode(`${input.value}`);

//     taskDiv.appendChild(textNode);
//     taskDiv.appendChild(button);
//     task.appendChild(taskDiv);
//     // console.log(input.value);
//     // task.textContent = `${input.value}`;
//     window.localStorage.getItem.toArray().forEach(element => {
//         window.localStorage.getItem[0]
//     });
let arr = [];

document.forms[0].onsubmit = function (ev) {
    ev.preventDefault();
}


    submit.addEventListener("click", () => {
        // let inputValue = input.value;
        let taskDiv = document.createElement("div");
        taskDiv.style.cssText = "background-color:pink; color: black; font-weight:bold; display: flex; justify-content: space-between;"
        let button = document.createElement("button");   // try the text in button
        button.textContent = "delete";
        button.className = ("but");
        button.style.cssText = "background-color: #cb5151; font-size: 15px; color: white; border-radius: 7px;"
        let textNode = document.createTextNode(`${input.value}`);
        arr.push(input.value);
        for (let index = 0; index < arr.length; index++) {
            window.localStorage.setItem(index, arr[index]);
        }
        input.value = "";
        taskDiv.appendChild(textNode);
        taskDiv.appendChild(button);
        task.appendChild(taskDiv);
        // console.log(input.value);
        // task.textContent = `${input.value}`;
        // window.localStorage.setItem("the task", taskDiv);
    })
    let button2 = document.querySelector("button");

    task.addEventListener("click",(ev)=>{
        if(ev.target.className === "but")
        ev.target.parentElement.remove();
    })






// console.log(input.value);