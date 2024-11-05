
let input = document.getElementById("input");
let button = document.querySelector("#button");
let text = document.querySelector(".text");
let deleteSelectedButton = document.getElementById("deleteSelected");
deleteSelectedButton.addEventListener("click", deleteSelected);
function add() {
    if (input.value=="") {
        alert("pleaaaase enter text");
    }
    else{
        let newEle = document.createElement("ul");
        newEle.innerHTML = `<input type="checkbox" class="toggle"> ${input.value} <i class="fa-solid fa-trash"></i>` ;
        text.appendChild(newEle);
        input.value="";
        newEle.querySelector("i").addEventListener("click" , removee);
        newEle.querySelector(".toggle").addEventListener("change", toggleComplete);
        function toggleComplete() {
            newEle.classList.toggle("completed");
        }
        function removee() {
            newEle.remove();
        }
        
    }
}
function deleteSelected() {
    let checkboxes = document.querySelectorAll(".toggle:checked");
    checkboxes.forEach(checkbox => {
        checkbox.closest("ul").remove();
    });
}
