let btn = document.getElementById("advice-button")
let output = document.getElementById("advice")

let advisors = [
    "a wise man once told me,",
    "Mother always says,",
    "My Uncle Rupert always says,"
];

let howOften = [

    "never",
    "always",
    "as often as you can,",
    "never ever",
    "only SOMETIMES should you"
];

let verbs = [
    "run with a",
    "swim with a",
    "eat a",
    "climb a",
    "dance with a",
    "annihilate a",
    "destroy a",
    "terrify a"
]

let adjectives = [

    "spiky",
    "furry",
    "funny",
    "spicy",
    "odd",
    "loud",
    "scary",

];

let nouns = [
    "elephant",
    "human",
    "chainsaw",
    "nuclear bomb",
    "computer",
    "commuter",
    "wealthy man",
    "serpent",
    "chariot",
    ""
];

let getRandomIndex = function (a) {

    let rand = a[Math.floor(Math.random() * a.length)]
    return rand

}


let generateAdvice = function (adv, h, v, adj, n) {
    let randomAdvice =
        getRandomIndex(adv) + " "
    getRandomIndex(h), + " "
    getRandomIndex(v), + " "
    getRandomIndex(adj), + " "
    getRandomIndex(n)
    console.log(randomAdvice)
    return randomAdvice
}

generateAdvice(advisors, howOften, verbs, adjectives, nouns)

let generateDefaultSettings = function () {

    generateAdvice(advisors, howOften, verbs, adjectives, nouns)
}
btn.addEventListener("click", function () {
    let advice = generateAdvice(advisors, howOften, verbs, adjectives, nouns)
    output.textContent = advice
})
//a wise man once told me, undefined dance with scary.

//My Uncle Rupert always says,  (4) ['never ', 'always ', 'as often as you can, ', 'never ever '] swim in  spicy  computers 

//a wise man once told me, as often as you can, climb scary chainsaws

