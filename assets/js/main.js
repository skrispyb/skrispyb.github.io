function rmvClass() {
    $("#about_section, #eduction_section, #employment_section, #skill_section, #project_section, #interest_section, #contact_section, #project_1, #project_2").removeClass("highlight");
}

$("#abt").click(function() {
    $("#about_section").addClass("highlight");
    setTimeout(() => {
        $("#about_section").removeClass("highlight");
    }, 2000);
});
$("#edu").click(function() {
    $("#eduction_section").addClass("highlight");
    setTimeout(() => {
        $("#eduction_section").removeClass("highlight");
    }, 2000);
});
$("#emp").click(function() {
    $("#employment_section").addClass("highlight");
    setTimeout(() => {
        $("#employment_section").removeClass("highlight");
    }, 2000);
});
$("#skl").click(function() {
    $("#skill_section").addClass("highlight");
    setTimeout(() => {
        $("#skill_section").removeClass("highlight");
    }, 2000);
});
$("#proj").click(function() {
    $("#project_section").addClass("highlight");
    setTimeout(() => {
        $("#project_section").removeClass("highlight");
    }, 2000);
});
$("#intr").click(function() {
    $("#interest_section").addClass("highlight");
    setTimeout(() => {
        $("#interest_section").removeClass("highlight");
    }, 2000);
});
$("#cont").click(function() {
    $("#contact_section").addClass("highlight");
    setTimeout(() => {
        $("#contact_section").removeClass("highlight");
    }, 2000);
});
$("#proj1").click(function() {
    $("#project_1").addClass("highlight");
    setTimeout(() => {
        $("#project_1").removeClass("highlight");
    }, 2000);
});
$("#proj2").click(function() {
    $("#project_2").addClass("highlight");
    setTimeout(() => {
        $("#project_2").removeClass("highlight");
    }, 2000);
});