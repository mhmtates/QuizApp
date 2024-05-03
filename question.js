function Question(questionText, answerOptions, correctAnswer) {
    this.questionText = questionText,
    this.answerOptions = answerOptions,
    this.correctAnswer = correctAnswer;
}

Question.prototype.checkAnswer = function (answer) {
    return answer === this.correctAnswer;
}



let questions = [
    new Question("1)Aşağıdakilerden hangisi javascript paket yönetim uygulamasıdır?", { "a)": "Node.js", "b)": "Typescript", "c)": "Npm", "d)": "Angular.js" }, "c"),
    new Question("2)Aşağıdakilerden hangisi .net paket yönetim uygulamasıdır?", { "a)": "Node.js", "b)": "Nuget", "c)": "Npm", "d)": "Angular.js" }, "b"),
    new Question("3)Aşağıdakilerden hangisi bir programlama dili değildir?", { "a)": "C#", "b)": "Java", "c)": "Python", "d)": "React.js" }, "d"),
    new Question("4)Aşağidakilerden hangisi .net geliştirmede kullanılan ide'dir?", { "a)": "Eclipse", "b)": "Pycharm", "c)": "Visual Studio", "d)": "Phpstorm" }, "c"),
    new Question("5)Aşağıdakilerden hangisi mobil geliştirmede kullanılan bir teknoloji değildir?", { "a)": "React Native", "b)": "Oracle", "c)": "Flutter", "d)": "Kotlin" }, "b"),
    new Question("6)Aşağıdakilerden hangisi bir versiyon kontrol sistemidir? ", { "a)": "Git", "b)": "Redux", "c)": "Docker", "d)": "Asp.net" }, "a"),

];