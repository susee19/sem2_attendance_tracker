
$(".m").click(() => localStorage.setItem("tot", 39));
$(".c").click(() => localStorage.setItem("tot", 42));
$(".ct").click(() => localStorage.setItem("tot", 71));
$(".e").click(() => localStorage.setItem("tot", 37));
$(".i").click(() => localStorage.setItem("tot", 34));
$(".eg").click(() => localStorage.setItem("tot", 19));
$(".cl").click(() => localStorage.setItem("tot", 15));
$(".el").click(() => localStorage.setItem("tot", 19));

$(".sub").click(() => {
    let mc = Number($("#mcInput").val());
    localStorage.setItem("mc", mc);
});

// RESULT PAGE (result.html)
$(document).ready(function () {

    let tot = Number(localStorage.getItem("tot"));
    let mc = Number(localStorage.getItem("mc"));

    if (!tot || mc < 0 || mc > tot) return;

    let ap = Math.round(((tot - mc) / tot) * 100 * 100) / 100;
    $("#h1").html(ap + "%");
});
