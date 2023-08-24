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
    "run with",
    "swim in",
    "eat",
    "climb",
    "dance with"
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
    "elephants",
    "humans",
    "chainsaws",
    "nuclear bombs",
    "computers",
    "commuters",
    "goatskin",
    "wealth",
    "serpents",
    "chariot",
    ""
];

let getRandomIndex = function (a) {

    let rand = a[Math.floor(Math.random() * a.length)]
    return rand

}


let generateAdvice = function (adv, h, v, adj, n) {
    console.log(
        getRandomIndex(adv),
        getRandomIndex(h),
        getRandomIndex(v),
        getRandomIndex(adj),
        getRandomIndex(n))
}

generateAdvice(advisors, howOften, verbs, adjectives, nouns)
//a wise man once told me, undefined dance with scary.

//My Uncle Rupert always says,  (4) ['never ', 'always ', 'as often as you can, ', 'never ever '] swim in  spicy  computers 
