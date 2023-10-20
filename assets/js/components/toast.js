let toastTrigger = document.getElementById("boton-trigger");
    var toastLiveExample = document.getElementById("liveToast");
    if (toastTrigger) {
    toastTrigger.addEventListener("click", function () {
        var toast = new bootstrap.Toast(toastLiveExample);

        toast.show();
    });
}


let toasts_documents = document.getElementById("button-upload");
    var toastLiveExample2 = document.getElementById("toasts_documents");
    if (toasts_documents) {
    toasts_documents.addEventListener("click", function () {
        var toast = new bootstrap.Toast(toastLiveExample2);

        toast.show();
    });
}

let toasts_error = document.getElementById("btn_toast_error");
    var toastLiveExample1 = document.getElementById("toasts_error");
    if (toasts_error) {
    toasts_error.addEventListener("click", function () {
        var toast = new bootstrap.Toast(toastLiveExample1);

        toast.show();
    });
}