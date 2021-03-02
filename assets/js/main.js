function rmvClass() {
    $("#about_section, #eduction_section, #employment_section, #skill_section, #project_section, #interest_section, #contact_section").removeClass("highlight");
}

$("#abt").click(function() {
    $("#about_section").addClass("highlight");
    setTimeout(rmvClass, 2000);
});
$("#edu").click(function() {
    $("#eduction_section").addClass("highlight");
    setTimeout(rmvClass, 2000);
});
$("#emp").click(function() {
    $("#employment_section").addClass("highlight");
    setTimeout(rmvClass, 2000);
});
$("#skl").click(function() {
    $("#skill_section").addClass("highlight");
    setTimeout(rmvClass, 2000);
});
$("#proj").click(function() {
    $("#project_section").addClass("highlight");
    setTimeout(rmvClass, 2000);
});
$("#intr").click(function() {
    $("#interest_section").addClass("highlight");
    setTimeout(rmvClass, 2000);
});
$("#cont").click(function() {
    $("#contact_section").addClass("highlight");
    setTimeout(rmvClass, 2000);
});