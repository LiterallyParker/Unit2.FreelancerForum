const NAMES = [
    "Alice",
    "Bob",
    "Clara",
    "David",
    "Emily",
    "Frank",
    "Grace",
    "Henry",
    "Isabella",
    "Jack",
    "Lily",
    "Matthew",
    "Natalie",
    "Olivia",
    "Peter",
    "Quinn",
    "Rachel",
    "Samuel",
    "Taylor",
    "Victoria"
]
const OCCUPATIONS = [
    "Software Developer",
    "Nurse",
    "Teacher",
    "Electrician",
    "Graphic Designer",
    "Chef",
    "Accountant",
    "Marketing Manager",
    "Civil Engineer",
    "Lawyer"
]
const AVG_SPOT = document.getElementById('avg')
const TABLE = document.querySelector('table')

class Freelancer {

    constructor() {

        this.name = NAMES[Math.floor(Math.random() * NAMES.length)];

        this.occupation = OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];

        this.price = String(Math.round(Math.random() * 100))

    }

    get_string() {

        return `<td class="freelancer">${this.name}</td><td class="freelancer">${this.occupation}</td><td class="freelancer">${this.price}</td>`

    }

}

const F1 = new Freelancer()
const F2 = new Freelancer()
const F3 = new Freelancer()
const freelancers = [F1, F2, F3]

for(let i = 0; i < freelancers.length; i++) {

    TABLE.innerHTML += freelancers[i].get_string()

}

function get_avg() {

    let total = freelancers.reduce((total, value) => total + Number(value.price), 0)
    total = Math.round(total / freelancers.length)
    return total

}

setInterval(() => {

    if(freelancers.length < 20) { 

        let freelancer = new Freelancer()
        freelancers.push(freelancer)

        TABLE.innerHTML += freelancer.get_string()
        AVG_SPOT.innerHTML = String(get_avg())

    }

}, 2000)