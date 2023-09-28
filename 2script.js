var tableRef = $("#projects");
var projectForm = $("#project-form");
var projectsList = localStorage.getItem("projects") || [];


function renderTime() {
    $("#current-time").text(dayjs().format("MMM DD, YYYY [at] hh:mm:ss a"));
}
renderTime();
setInterval(renderTime, 1000);

// projectForm.on("submit", function (event) {
//     event.preventDefault();
//     console.log($("#projectName").val());
//     var newProject = {
//         name:$("projectName").val()
//         // type:
//         // dueDate:
//     }
//     console.log(newProject);
//     projectsList.push(newProject)
//     console.log(newProject);
//     localStorage.setItem("projects", JSON.stringify)
// });

// function addProject(projName, projType, projDate) {
//     var projRow = $("<tr>");
//     var nameCell = $("<td>");
//     nameCell.text(projName);
//     var typeCell = $("<td>");
//     typeCell.text(projType);
//     var dateCell = $("<td>");
//     dateCell.text(dayjs(projDate).format("MM/DD/YYYY"));
//     projRow.append(nameCell);
//     projRow.append(typeCell);
//     projRow.append(dateCell);
//     tableRef.append(projRow)
// }
