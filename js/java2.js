window.onload = function () {
    var button = document.querySelector("#testbutton");
    var element = document.querySelector("#testdiv");

    button.addEventListener("click", function () {
        element.classList.toggle("yes");
    });
};
