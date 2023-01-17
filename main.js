let submit = document.querySelector(".add");
let input = document.querySelector(".input");
let task = document.querySelector(".tasks");

let arr = JSON.parse(window.localStorage.getItem("indexs")) || [];
if (window.localStorage.getItem) {
    for (let index = 0; index < arr.length; index++) {
        let taskDiv = document.createElement("div");
        taskDiv.style.cssText = "background-color:pink; color: black; font-weight:bold; display: flex; justify-content: space-between;"
        let button = document.createElement("button");  
        button.textContent = "delete";
        button.className = ("but");
        button.style.cssText = "background-color: #cb5151; font-size: 15px; color: white; border-radius: 7px;"
        let textNode = document.createTextNode(`${arr[index]}`);
        let textSpan = document.createElement("span");
        textSpan.appendChild(textNode);
        
        input.value = "";
        taskDiv.appendChild(textSpan);
        taskDiv.appendChild(button);
        task.appendChild(taskDiv);
    }  
};

document.forms[0].onsubmit = function (ev) {
    ev.preventDefault();
}

    submit.addEventListener("click", () => {
        let taskDiv = document.createElement("div");
        taskDiv.style.cssText = "background-color:pink; color: black; font-weight:bold; display: flex; justify-content: space-between;"
        let button = document.createElement("button");   
        button.textContent = "delete";
        button.className = ("but");
        button.style.cssText = "background-color: #cb5151; font-size: 15px; color: white; border-radius: 7px;"
        let textNode = document.createTextNode(`${input.value}`);
        let textSpan = document.createElement("span");
        textSpan.appendChild(textNode);
       
        arr.push(input.value);
         window.localStorage.setItem("indexs", JSON.stringify(arr));
         input.value = "";
       
         taskDiv.appendChild(textSpan);
        taskDiv.appendChild(button);
        task.appendChild(taskDiv);
    })

    let button2 = document.querySelector("button");

    task.addEventListener("click",(ev)=>{
        console.log(ev.target);
        console.log(ev.target.className);
        console.log(ev.target.parentElement.firstCildNode);
        if(ev.target.className === "but"){
            for (let index = 0; index < arr.length; index++) 
         {
            if(ev.target.parentElement.firstChild.textContent === arr[index])   
            {          
                 arr.splice(index,1);
                 window.localStorage.setItem("indexs", JSON.stringify(arr));
                 ev.target.parentElement.remove();  
            }
          }
       }
    } )












    // task.addEventListener("click",(ev)=>{
    //     if(ev.target.className === "but"){
    //        console.log(ev.target.parentElement.textContent.slice(0,-6));

    //        let storageValue = ev.target.parentElement.textContent.slice(0,-6);
    //       let key = localStorage.key(storageValue);
    //       console.log(`key is ${key}`);

    //    for (let index = 0; index < arr.length; index++) {
    //    if(ev.target.parentElement.textContent.slice(0,-6) === arr[index])            
    //      {        arr.splice(index,1);
    //              console.log(`index is ${index}`);
    //            let localStorageRemovedItem =  localStorage.removeItem(key);
    //            console.log(`removed item is ${localStorageRemovedItem}`);
    //      }
    //    }
    //     ev.target.parentElement.remove();  
    // }
    // })




// console.log(input.value);