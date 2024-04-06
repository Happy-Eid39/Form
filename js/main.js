
const Name = document.getElementById("myInput");
const Agree = document.getElementById("flexCheckDefault");
const answer = document.getElementById("flexRadioDefault1");
const q1 = document.querySelector(".q1");
const q2 = document.querySelector(".q2");
const message = document.querySelector(".message");
const appear_message = document.querySelector(".appear_message");



function clear() {
    setTimeout(() => {
        message.classList.replace("d-block", "d-none",);
    }, 3000)
}
function vaild() {
    if (Name.value == "") {
        appear_message.innerHTML = "برجاء ادخال الاسم ";
        message.classList.replace("d-none", "d-block");
        clear();
    }
    else if (Agree.checked == false) {
        appear_message.innerHTML = "يرجى تأكيد الموافقة على الشروط ";
        message.classList.replace("d-none", "d-block");
        clear();
    }
    else {
        switch_btn();
    }
}
function switch_btn() {
    q1.classList.replace("d-flex", "d-none");
    q2.classList.replace("d-none", "d-block");
}
function print() {
    const radioButtons = document.querySelectorAll('input[type="radio"][name="flexRadioDefault"]');
    radioButtons.forEach(function (radioButton) {
        if (radioButton.checked) {
            const selectedLabel = document.querySelector(`label[for="${radioButton.id}"]`).textContent;
            console.log(selectedLabel.trim());
        }
    });
}


