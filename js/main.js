
const Name = document.getElementById("myInput");
const Agree = document.getElementById("flexCheckDefault");
const answer = document.getElementById("flexRadioDefault1");
const message = document.querySelector(".message");
const name_section = document.querySelector(".name_section");
const q1 = document.querySelector(".q1");
const appear_message = document.querySelector(".appear_message");
const no_answer = document.querySelector(".message_no_answer");
let collect_data = [];

function clear() {
    setTimeout(() => {
        message.classList.replace("d-block", "d-none",);
        no_answer.classList.replace("d-block", "d-none",);
    }, 1500)
}
function vaild() {
    if (Name.value == "") {
        appear_message.innerHTML = "برجاء ادخال الاسم ";
        message.classList.replace("d-none", "d-block");
        clear();
        // celebrate();

    }
    else if (Agree.checked == false) {
        appear_message.innerHTML = "يرجى تأكيد الموافقة على الشروط ";
        message.classList.replace("d-none", "d-block");
        clear();
    }
    else {
        collect_data.push(Name.value)
        switch_frist_page();

        // console.log(collect_data)
    }
}
function switch_frist_page() {
    name_section.classList.replace("d-flex", "d-none");
    q1.classList.replace("d-none", "d-block");
}
let num_last = 0;
let num_next = 1;
function switch_number_section(page) {
    checkRadio(page);
    // console.log(num_last)
    // console.log(num_next)
}

let correct_answer = ['صوت انفاس الخيل اذا اسرع.', 'كأسا من الخمر.', 'جميع ما سبق .', 'مختلط .', 'الفرش المنقوشه  .', 'اعتيادهم للنعم .', 'عين ماء شديده الحرارة .', 'جميع ما سبق .', 'الحمل الثقيل .']
let result = 0;
function checkRadio(page) {
    let page_section = document.querySelector(`.${page}`);
    var radios = page_section.querySelectorAll('input[type="radio"][name="flexRadioDefault"]');
    let checkedValue = true;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            checkedValue = false;
            // console.log("Option " + checkedValue + " is checked");
            num_last += 1
            num_next += 1
            switch_btn();
            break; // Exit the loop once a checked radio is found
        }
    }
    if (checkedValue) {
        // console.log("No option is checked");
        const no_answer = document.querySelector(".message_no_answer");
        no_answer.classList.replace("d-none", "d-block");
        // console.log(no_answer)
        // alert("Please select")
        clear();
    }
}

function switch_btn() {
    let last_section = document.querySelector(`.q${num_last}`);
    let next_section = document.querySelector(`.q${num_next}`);
    get_answer(last_section);
    last_section.classList.replace("d-block", "d-none");
    next_section.classList.replace("d-none", "d-block");
}

function get_answer(page) {
    const radioButtons = page.querySelectorAll('input[type="radio"][name="flexRadioDefault"]');
    let checkedRadioButton = null;

    radioButtons.forEach(function (radioButton) {
        if (radioButton.checked) {
            checkedRadioButton = radioButton;
        }
    });

    if (checkedRadioButton) {
        // console.log(checkedRadioButton)
        const selectedLabel = page.querySelector(`label[for="${checkedRadioButton.id}"]`).textContent;
        let value = selectedLabel.trim();
        if (correct_answer.includes(value)) {
            result += 1;
            console.log(result);
        }
        collect_data.push(value);
        // console.log(value);
        // console.log(typeof(value));
        // console.log(collect_data);
    }
}
function q10() {
    var textArea = document.getElementById("exampleFormControlTextarea1");
    if (textArea.value.trim() === "") {
        const no_answer = document.querySelector(".message_no_answer");
        no_answer.innerHTML = "برجاء كتابه اجابه ";
        no_answer.classList.replace("d-none", "d-block");
        clear();
    }
    else {
        collect_data.push(textArea.value);
        result += 1;
        let last_section = document.querySelector(".q10");
        let next_section = document.querySelector(".q11");
        last_section.classList.replace("d-block", "d-none");
        next_section.classList.replace("d-none", "d-block");
    }
};
function q11() {
    var textArea = document.getElementById("exampleFormControlTextarea1");
    collect_data.push(textArea.value);
    let last_section = document.querySelector(".q11");
    let next_section = document.querySelector(".finish_message");
    last_section.classList.replace("d-block", "d-none");
    next_section.classList.replace("d-none", "d-block");
    sendData();
    celebrate();
    // console.log(result);
    // console.log(collect_data);


};

function sendData() {
    const scriptURL = "https://script.google.com/macros/s/AKfycbxB67oZ04qYy4rAuim7BD3QV8IEECHR2uy2Flw_uQmpFj4E5sZUYwhKemfcdi3gRXTf/exec";
    // console.log(collect_data)
    let dataList = [
        { field1: collect_data[0], field2: collect_data[1], field3: collect_data[2], field4: collect_data[3], field5: collect_data[4], field6: collect_data[5], field7: collect_data[6], field8: collect_data[7], field9: collect_data[8], field10: collect_data[9], field11: collect_data[10] }
    ];
    // console.log(dataList)
    fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(dataList)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            // console.log(data); // Log the response from the server
            // Optionally, you can redirect the user or show a success message here
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}




const play = document.getElementById("frist_btn");

const svgContainer = document.getElementById('svg');
const animItem = bodymovin.loadAnimation({
    wrapper: svgContainer,
    animType: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://lottie.host/7f9125ab-d58a-47f0-9f4e-f06900091111/qRgw3Yrv0n.json'
});

// play.addEventListener('click', () => {

// })

function celebrate() {
    svgContainer.classList.remove('hide1');
    animItem.goToAndPlay(0, true);
}

animItem.addEventListener('complete', () => {
    svgContainer.classList.add('hide1');

})

function show_result(){
    const finish_message = document.querySelector(".finish_message");
    const result_page = document.querySelector(".result");
    const result_num = document.getElementById("result_num");
    finish_message.classList.replace("d-block", "d-none");
    result_page.classList.replace("d-none","d-block");
    result_num.innerHTML=`10 \\ ${result}`

    // console.log(finish_message)
    // alert("تم التقييم بنجاح")
    clear();
}

function end(){
    window.location.href = 'index.html';
}
