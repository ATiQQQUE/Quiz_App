const quizData = [{
    question: "What are the Bogue's compounds of cement?",
    a: "C3S, C2S, C4S, C5AS",
    b: "C3S, CaS, C5Al, S3O",
    c: "C3S, CS2, S3C, CS3",
    d: "C3A, C2S, C4AF, C3S",
    correct: "d",
},
{
    question: "Who invented Portland cement and in which year?",
    a: "William Aspdin, 1840s",
    b: "William Aspdin, 1824",
    c: "Joseph Aspdin, 1840s",
    d: "Joseph Aspdin, 1824",
    correct: "a",
},
{
    question: "What is the average particle size of cement?",
    a: "75 microns",
    b: "15 microns",
    c: "35 microns",
    d: "none of the above",
    correct: "b",
},
{
    question: "What is the meaning of soundness of cement?",
    a: "Ability to flow when mixed",
    b: "Ability to retain volume after setting.",
    c: "Ability to make ringing noise when struck",
    d: "Ability to form strong and sound structures",
    correct: "b",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);