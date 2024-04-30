
// const eat = (user, admin) => {
//     return `Hello ${user} you are an ${admin? "admin": "ordinary user"}`
// }
// console.log (eat( `Afeez`,false))
// const name = `Afeez`
// const message = `I have a million`
// const afeez = 25


// console.log(message)
// console.log(name)

// // const name = "Alice";
// // const age = 25;

// const mess = `My name is ${name} and I am ${age} years old.`;

// console.log(mess);

// const year = 2028

// function birthYear (birthYear){
//     return `Afeez is ${year-birthYear}`
// }

// console.log(birthYear(1999))

// // set setInterval
// // set time out

// const {user, age} = user
// console.log(name)

// console.log(eat(name,user,admin))


const primeNum = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

const players = [ 
    {
        name: "Messi",
        age: 36,
        club: "Inter Miami",
        country: "Argentina",
        goals: 832
    },
    {
        name: "Ronaldo",
        age: 38,
        club: "AL Nasir",
        country: "Portugal",
        goals: 872
    },
    {
        name: "Mbappe",
        age: 25,
        club: "Real Madrid",
        country: "France",
        goals: 400
    },
    {
        name: "Salah",
        age: 29,
        club: "Liverpool",
        country: "Egypt",
        goals: 500
    },
    {
        name: "Lewandowski",
        age: 33,
        club: `Bayern Munich`,
        country: `Poland`,
        goals: 700
    },
    
]

const evenNum = num.filter(num=> num %2 ===0)
console.log(evenNum)

const newArr = primeNum.filter(num=> num >11)
console.log(newArr)

const playerNames = players.map(player=> player.name)
console.log(playerNames)

const topPlayers = players.filter(player=> player.age >= 30).map(player=> player.name)
console.log(topPlayers)

const playersCountry = players.map(player=> player.country)
console.log(playersCountry)

const playersClub = players.map(player=> player.club)
console.log(playersClub)


topPlayers.forEach(player=> console.log (`${player} is a good player`))

