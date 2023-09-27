window.addEventListener("load", () => {
    let adviceButton = document.getElementById("advice-button")
    let adviceOutput = document.getElementById("advice")

    let dateButton = document.getElementById("date-button")
    let dateOutput = document.getElementById("date")

    let adviceHowOften = [
        "never",
        "always",
        "as often as you can,",
        "never ever",
        "only SOMETIMES should you",
        "only if you want to,",
        "it's no big deal if you",
        "it's no big deal if you don't",
        "it's no big deal if you can't",
        "it's no big deal if you want to"
    ];
    let adviceVerbs = [
        "eat",
        "dance with",
        "annihilate",
        "destroy",
        "terrify",
        "date",
        "romance",
        "dislike",
        "prefer",
        "hate",
        "cry when you see",
        "detonate",
        "like",
        "cry with",
        "hold hands with",
        "eat the brains of"
    ]
    let adviceDefiniteArticles = [
        "the",
        "a",
        "your",
        "my"
    ]
    let adviceAdjectives = [
        "spiky",
        "furry",
        "funny",
        "spicy",
        "odd",
        "loud",
        "scary",
        "uhh... idk.. a",
        "crying",
        "terrified",
        "terrifying",
        "onion-like",
        "uranium-ish",
        "crazed",
        "manic",
        "relaxed",
        "calm",
        "peaceful",
        "dead",
    ]
    let adviceNouns = [
        "elephant",
        "human",
        "baby",
        "little boy named jimmy",
        "lifeguard (of the hot singel variety)",
        "goose",
        "man",
        "woman",
        "girl",
        "boy",
        "fork",
        "chainsaw",
        "nuclear bomb",
        "computer",
        "commuter",
        "wealthy man",
        "serpent",
        "chariot",
        ".. uhhhh... I forgor",
        "small child",
        "edgy teen",
        "real estate agent",
        "bloodsucking lawyer",
        "criminal",
        "bald man",
        "tree hugger",
        "... interesting character",
        "minecraft streamer who has no life",
        "fortnite kid",
        "andrew tate enjoyer",
        "alpha male",
        "beta male",
        "sigma male",
        "FEMALE...",
        "mom",
        "dad",
        "sister",
        "brother",
        "girlfriend",
        "boyfriend",
        "wife",
        "husband"
    ]
    let dateShouldYou = [
        "you should date",
        "NEVER date",
        "don't date"
    ]

    let dateWhoAreThey = [
        "a random dude",
        "a silly guy",
        "the red shirt guy",
        "captain kirk from the hit show star trek the original series",
        "spock from the hit show star trek the original series",
        "uhura from the hit show star trek the original series",
        "sulu from the hit show star trek the original series",
        "chekhov from the hit show star trek the original series",
        "scotty from the hit show star trek the original series",
        "jim",
        "christina",
        "a bloodsucking lawyer",
        "santa claus",
        "a discord mod",
        "andrew tate",
        "dream from the hit game minecraft",
        "the rat in my wall",
        "bibble",
        "Tori Spring",
        "Michael Holden",
        "a cosplayer",
        "a furry",
        "my brother",
        "my sister",
        "the writer of this code (sup bbg)",
        "a unicorn"

    ]

    let dateWhy = [
        "because they are funny",
        "because they are smart",
        "because they are kind",
        "because they would be a very good parent",
        "because they get along great with your friends",
        "because they love kids"
    ]
    let dateWhyNot = [
        "but then again they eat babies",
        "but then again they have no sense of humor",
        "but then again they think the earth is flat",
        "but then again they are too self sacrificial",
        "but then again you're actually secretly in love with a guy named mark iplier. not markiplier, mark, space, iplier.",
        "but then again they have the surfer vibe",
        "but then again they are a mass murderer.",
        "but then again they are in jail right now",
        "but then again they eat kitkats sideways",
        "but then again they celebrate 9/11",
        "but then again they... love. kids.",
        "but then again they call women \"females\"",
        "but then again they are a cult leader",
        "but then again they're a cult follower and want you to join their weird cult because they actually think its good for you but its still a cult",
        "but then again they ran over your cat",
        "but then again they chew with their mouth open",
        "but then again they have 'MAP pride!' in their twitter bio",
        "but then again they have a facebook account",
        "but then again they're attracted to miguel o'hara",

    ]
    let getRandomIndex = function (list) {
        let rand = list[Math.floor(Math.random() * list.length)]
        return rand;
    }
    let generateAdvice = function (howOften, verbs, definiteArticles, adjectives, nouns) {
        let adviceRandom = [
            getRandomIndex(howOften),
            getRandomIndex(verbs),
            getRandomIndex(definiteArticles),
            getRandomIndex(adjectives),
            getRandomIndex(nouns)
        ].join(" ");
        return adviceRandom

    }
    let generateDate = function () {
        let dateRandom = [
            getRandomIndex(dateShouldYou),
            getRandomIndex(dateWhoAreThey),
            getRandomIndex(dateWhy),
            getRandomIndex(dateWhyNot)
        ].join(" ");
        return dateRandom

    }
    adviceButton.addEventListener("click", function () {
        let advice = generateAdvice(
            adviceHowOften,
            adviceVerbs,
            adviceDefiniteArticles,
            adviceAdjectives,
            adviceNouns)
        adviceOutput.textContent = advice

    })

    dateButton.addEventListener("click", function () {
        dateOutput.textContent = generateDate()
    })
})
