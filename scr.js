let editMode = false;

function checkPassword(){
    const password = document.getElementById("password").value;
    if(password === "1407"){
        document.getElementById("addHs").classList.remove("hidden");
        document.getElementById("Save").classList.remove("hidden");
        enableEditing(true);
        editMode = true;
    }
     else {
        alert("Sai mật khẩu!");
     }
}
function enableEditing(state) {
    document.querySelectorAll(".editable").forEach(td => {
        td.contentEditable = state;
    });
}
function addStudent() {
    if (!editMode) return;
    const table = document.getElementById("scoreTable").getElementsByTagName("tbody")[0];
    const row = table.insertRow();
    row.innerHTML = `<td contenteditable="true">Tên mới</td>
                     <td class="editable" contenteditable="true">0</td>
                     <td class="editable" contenteditable="true">0</td>
                     <td class="editable" contenteditable="true">0</td>
                     <td class="editable" contenteditable="true">0</td>
                     <td class="editable" contenteditable="true">0</td>
                     <td class="editable" contenteditable="true">0</td>
                     <td class="editable" contenteditable="true">0</td>
                     <td class="editable" contenteditable="true">0</td>
                     <td class="editable" contenteditable="true">0</td>`;
}
function saveData() {
    enableEditing(false);
    editMode = false;
}

