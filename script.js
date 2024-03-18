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
const TABLE = document.getElementsByClassName('freelancers')[0]
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

const freelancers = []
let total = 0
setInterval(() => {
    if(freelancers.length < 20) { 
        let freelancer = new Freelancer()
        TABLE.innerHTML += freelancer.get_string()
        freelancers.push(freelancer)
        total = freelancers.reduce((total, value) => total + Number(value.price), 0)
        total = Math.round(total / freelancers.length)
        AVG_SPOT.innerHTML = String(total)
    }
}, 1000)



