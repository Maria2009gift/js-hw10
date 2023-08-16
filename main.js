// =====1=====
// ----for----
const str1 = ["qwert", "uiop", "asdf", "ghjkl"]

let string = ""
for (let i = 0; i < str1.length; i += 1) {
    let element = str1[i];
    element += ","
    string += element
}
console.log(string)

// ----join----
const str2 = ["wasd", "mnop", "zxcv", "trhb"]
console.log(str2.join(","))

// ======2=====

const cards = ["Card-1", "Card-2", "Card-3", "Card-4", "Card-5"]

const deletedCards = cards.splice(2, 1);
cards.push("Card-6")
console.log(cards)