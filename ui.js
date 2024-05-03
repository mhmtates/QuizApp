function UI(){
    this.btn_start = document.querySelector(".btn_start"),
    this.btn_next = document.querySelector
    (".btn_next"),
    this.quiz_box = document.querySelector
    (".quiz_box"),
    this.option_list = document.querySelector(".option_list"),
    this.correctIcon = '<div class="icon"><i class="fa-solid fa-check"></i></div>',
    this.incorrectIcon = '<div class="icon"><i class="fa-solid fa-times"></i></div>';
}


UI.prototype.showQuestion = function showQuestion(soru) {
    let question = `<span>${soru.questionText}</span>`;
    let option = '';

    for (let answer in soru.answerOptions) {
        option +=
            `
       <div class="option">
          <span><b>${answer}</b> ${soru.answerOptions[answer]}</span>
       </div>
      `;
    }

    document.querySelector(".question_text").innerHTML = question;
    this.option_list.innerHTML = option;
    const options = this.option_list.querySelectorAll(".option");

    for (let opt of options) {
        opt.setAttribute("onclick", "optionSelected(this)")
    }
}

UI.prototype.showTheNumberOfQuestions = function showTheNumberOfQuestions(questionOrder,totalQuestion){
    let tag = `<span class="badge bg-warning text-dark"><b>${questionOrder} / ${totalQuestion}</b></span>`;
    document.querySelector(".quiz_box .question_index").innerHTML = tag;
}
