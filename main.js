const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
let y = 1
for (let y = 0; y < cookies.length; y++) {
    const currentCookie = cookies[y]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}
console.log()


function conjunction (firstWord, secondWord) {
  return `${firstWord} ${secondWord}`
}
const conjoinedWord = conjunction("Master", "Card")
console.log(conjoinedWord)




 {
  const modSquad = {
      members: ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
      series: {
          "start": "1968",
          "end": "1973"
      }
  }
  let HTMLRepresentation = `<h1>The Mod Squad</h1>`
  modSquad.members.forEach(member => {
      HTMLRepresentation += `<div>${member}</div>`;
  });
console.log(HTMLRepresentation)
}


  const modSquad = {
      "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
      "series": {
          "start": "1968",
          "end": "1973"
      }
  }
  let HTMLRepresentation = `<h1>The Mod Squad</h1>`;
  modSquad.members.forEach(member => {
      HTMLRepresentation += `<div>${member}</div>`;
  });
console.log(HTMLRepresentation)


  const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

  for (const location of locations) {
  
    let invalidLocation = false;

      if (location[0] > 2) {
          invalidLocation = true;
      }
  
        if (invalidLocation){
            console.log("This location is invalid");
        } else {
          console.log("This location is valid");
        }
  }   


  const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * 7);
    const name = possibleNames[randomizer];

    let namer = function  () {
        const suffix = " the Llama"
        return name + suffix
    }

    return namer
}

nameMaker = llamaNamer();
console.log(nameMaker())
