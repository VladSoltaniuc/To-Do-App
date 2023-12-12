const createCheckbox = document.querySelector(".input-createCheckbox");
const insertCheckboxHere = document.getElementById("checkboxes");

createCheckbox.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        AddCheckbox();
    }
});

function AddCheckbox() {
    if (createCheckbox.value != "") {
        const newDiv = document.createElement("div");

        const newInput = document.createElement("input");
        newInput.setAttribute("class", "createdInput");
        newInput.value = createCheckbox.value;
        createCheckbox.value = "";

        const newCheckbox = document.createElement("i");
        newCheckbox.setAttribute("class", "fa-sharp fa-solid fa-circle-xmark fa-lg");

        const newLine = document.createElement("br");
        insertCheckboxHere.appendChild(newDiv);
        newDiv.appendChild(newInput);
        newDiv.appendChild(newCheckbox);
        newDiv.appendChild(newLine);

        newCheckbox.addEventListener("click", () => {
            insertCheckboxHere.removeChild(newDiv);
        })

        console.log("add");
    }
}