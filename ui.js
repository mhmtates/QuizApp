function UI(){
    this.btn_start = document.querySelector(".btn_start"),
    this.btn_next = document.querySelector
    (".btn_next"),
    this.btn_restart = document.querySelector
    (".btn_restart"),
    this.btn_quit = document.querySelector
    (".btn_quit"),
    this.quiz_box = document.querySelector
    (".quiz_box"),
    this.score_box = document.querySelector
    (".score_box"),
    this.option_list = document.querySelector(".option_list"),
    this.correctIcon = '<div class="icon"><i class="fa-solid fa-check"></i></div>',
    this.incorrectIcon = '<div class="icon"><i class="fa-solid fa-times"></i></div>';
    this.time_text = document.querySelector(".time_text"),
    this.time_second = document.querySelector(".time_second"),
    this.time_line = document.querySelector(".time_line")
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

UI.prototype.showScore = function(totalQuestion,numberofCorrectAnswers){
    let tag = `Toplam ${totalQuestion} sorudan ${numberofCorrectAnswers} doğru cevap verdiniz.`;
    document.querySelector(".score_box .score_text").innerHTML = tag;
}