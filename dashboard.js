var arr = [];
document.getElementById("btn").addEventListener('click', function () {
    let input = document.getElementById("input").value.trim();
    let input2 = document.getElementById("input2").value.trim();
    let input3 = document.getElementById("input3").value.trim();
    // console.log(input2, input3 , input);
    if (input=='' || input2== '' || input3 == '') {
        alert("please enter something");
        return;
    }
    const newtasklist = document.createElement('li');
    
    // let obj = {input ,input2 , input3};

    let togglebutton = document.createElement('input');
    togglebutton.type = 'checkbox';
    togglebutton.className = 'toggle';

    const textspan = document.createElement('span');
    textspan.textContent = `${input}`;

    const textspan2 = document.createElement('span');
    textspan2.textContent = input2;

    const textspan3 = document.createElement('span');
    textspan3.textContent = input3;
    


    const deleteButton = document.createElement('button')
    deleteButton.textContent = "Delete";

    togglebutton.addEventListener('change', function () {
        if (togglebutton.checked) {
            let compleeetedtask = document.getElementById('completed');
            compleeetedtask.appendChild(newtasklist);
            newtasklist.classList.add('comp')
        }
        else {
            var incompleeetedtask = document.getElementById("Incompleted");
            incompleeetedtask.appendChild(newtasklist);



        }
    })

    deleteButton.addEventListener('click', function () {
        newtasklist.remove();
    })


    newtasklist.appendChild(togglebutton);
    newtasklist.appendChild(textspan);
    newtasklist.appendChild(textspan2);
    newtasklist.appendChild(textspan3);

    newtasklist.appendChild(deleteButton);


    document.getElementById("Incompleted").appendChild(newtasklist);
    document.getElementById("input").value = '';
// new code

var md = document.getElementById("md");
md.style.display = "none";
});

function navigation() {
    window.location.href = "./location.html"      // location section click krne k liye
}
function showtasksection() {
    window.location.href = "./task.html"          // task section open krne k liyee

}

function showcard() {
    md.style.display = "block";
}

function cancel() {
    md.style.display = "none";
}
function logout() {
    window.location.href= "./figmapro.html";
}