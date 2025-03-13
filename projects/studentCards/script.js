const schoolName = document.getElementById("school");
const studyYear = document.getElementById("year");
const teacher = document.getElementById("teacher");
const studentCards = document.getElementById("student-cards");
const classroomDropdownList = document.getElementById("classroom");
const myFavoriteClassroom = {
  school: "Anuban Phanat Suksalai",
  year: "2024-2025",
  teacher: {
    teacherName: "Aleksei Lopatin",
  },
  students: [
    {
      name: "Crystal",/*
      birthday: 4,
      birthmonth: "September",*/
      number: 1,
      classNumber: "5A",
      spiritAnimal: "Cheetah",
    },
    {
      name: "Titan",/*
      birthday: 22,
      birthmonth: "May",*/
      number: 2,
      classNumber: "5A",
      spiritAnimal: "Sloth",
    },
    {
      name: "Nakhun",/*
      birthday: 8,
      birthmonth: "November",*/
      number: 3,
      classNumber: "5A",
      spiritAnimal: null,
    },
    {
      name: "North",/*
      birthday: 9,
      birthmonth: "January",*/
      number: 4,
      classNumber: "5A",
      spiritAnimal: "Snake",
    },
    {
      name: "Title",/*
      birthday: 19,
      birthmonth: "January",*/
      number: 5,
      classNumber: "5A",
      spiritAnimal: "Seal",
    },
    {
      name: "PP",/*
      birthday: 15,
      birthmonth: "August",*/
      number: 6,
      classNumber: "5A",
      spiritAnimal: "Polar Bear",
    },
    {
      name: "Theo",/*
      birthday: 5,
      birthmonth: "August",*/
      number: 7,
      classNumber: "5A",
      spiritAnimal: "Cat",
    },
    {
      name: "Khonpon",/*
      birthday: 31,
      birthmonth: "January",*/
      number: 8,
      classNumber: "5A",
      spiritAnimal: null,
    },
    {
      name: "Arm",/*
      birthday: 3,
      birthmonth: "June",*/
      number: 9,
      classNumber: "5A",
      spiritAnimal: null,
    },
    {
      name: "Hayday",/*
      birthday: 10,
      birthmonth: "December",*/
      number: 10,
      classNumber: "5A",
      spiritAnimal: "Hen",
    },
    {
      name: "Porsche",/*
      birthday: 21,
      birthmonth: "February",*/
      number: 11,
      classNumber: "5A",
      spiritAnimal: "Octopus",
    },
    {
      name: "Deejang",/*
      birthday: 17,
      birthmonth: "January",*/
      number: 12,
      classNumber: "5A",
      spiritAnimal: "Buffalo",
    },
    {
      name: "Tangjai",/*
      birthday: 20,
      birthmonth: "June",*/
      number: 13,
      classNumber: "5A",
      spiritAnimal: null,
    },
    {
      name: "Marki",/*
      birthday: 27,
      birthmonth: "October",*/
      number: 14,
      classNumber: "5A",
      spiritAnimal: null,
    },
    {
      name: "Namking",/*
      birthday: 5,
      birthmonth: "December",*/
      number: 15,
      classNumber: "5A",
      spiritAnimal: "Rabbit",
    },
    {
      name: "Toey",/*
      birthday: 9,
      birthmonth: "March",*/
      number: 16,
      classNumber: "5A",
      spiritAnimal: "Fox",
    },
    {
      name: "Kaimook",/*
      birthday: 25,
      birthmonth: "September",*/
      number: 17,
      classNumber: "5A",
      spiritAnimal: null,
    },
    {
      name: "Bella",/*
      birthday: 15,
      birthmonth: "August",*/
      number: 18,
      classNumber: "5A",
      spiritAnimal: null,
    },
    {
      name: "Tiew",/*
      birthday: 28,
      birthmonth: "November",*/
      number: 19,
      classNumber: "5A",
      spiritAnimal: "Pony",
    },
    {
      name: "Aom",/*
      birthday: 13,
      birthmonth: "March",*/
      number: 20,
      classNumber: "5A",
      spiritAnimal: "Sloth",
    },
    {
      name: "Ing",/*
      birthday: 5,
      birthmonth: "June",*/
      number: 21,
      classNumber: "5A",
      spiritAnimal: "Hamster",
    },
    {
      name: "Preawa",/*
      birthday: 5,
      birthmonth: "December",*/
      number: 22,
      classNumber: "5A",
      spiritAnimal: "Giraffe",
    },
    {
      name: "Khaohom",/*
      birthday: 29,
      birthmonth: "September",*/
      number: 23,
      classNumber: "5A",
      spiritAnimal: "Cat",
    },
    {
      name: "Idea",/*
      birthday: 20,
      birthmonth: "November",*/
      number: 24,
      classNumber: "5A",
      spiritAnimal: "Frog",
    },
    {
      name: "Baibua",/*
      birthday: 5,
      birthmonth: "September",*/
      number: 25,
      classNumber: "5A",
      spiritAnimal: "Dog",
    },
    {
      name: "Nampan",/*
      birthday: 21,
      birthmonth: "October",*/
      number: 26,
      classNumber: "5A",
      spiritAnimal: null,
    },
    {
      name: "Nampoon",/*
      birthday: 21,
      birthmonth: "October",*/
      number: 27,
      classNumber: "5A",
      spiritAnimal: "Black Cat",
    },
    {
      name: "Proudfah",/*
      birthday: 12,
      birthmonth: "January",*/
      number: 28,
      classNumber: "5A",
      spiritAnimal: null,
    },
    {
      name: "Meena",/*
      birthday: 28,
      birthmonth: "February",*/
      number: 29,
      classNumber: "5A",
      spiritAnimal: "Pig",
    },
    {
      name: "Alicia",/*
      birthday: 21,
      birthmonth: "April",*/
      number: 30,
      classNumber: "5A",
      spiritAnimal: "Dog",
    },
    {
      name: "Anpan",/*
      birthday: 5,
      birthmonth: "July",*/
      number: 1,
      classNumber: "5B",
      spiritAnimal: "G.O.A.T.",
    },
    {
      name: "Good",/*
      birthday: 14,
      birthmonth: "February",*/
      number: 2,
      classNumber: "5B",
      spiritAnimal: "Horse",
    },
    {
      name: "First",/*
      birthday: 21,
      birthmonth: "October",*/
      number: 3,
      classNumber: "5B",
      spiritAnimal: null,
    },
    {
      name: "Pice",/*
      birthday: 8,
      birthmonth: "August",*/
      number: 4,
      classNumber: "5B",
      spiritAnimal: null,
    },
    {
      name: "Tonkla",/*
      birthday: 8,
      birthmonth: "January",*/
      number: 5,
      classNumber: "5B",
      spiritAnimal: "Goldfish",
    },
    {
      name: "Dome",/*
      birthday: 23,
      birthmonth: "May",*/
      number: 6,
      classNumber: "5B",
      spiritAnimal: "Snake",
    },
    {
      name: "Il",/*
      birthday: 24,
      birthmonth: "July",*/
      number: 7,
      classNumber: "5B",
      spiritAnimal: "Wolf",
    },
    {
      name: "Pawan",/*
      birthday: 20,
      birthmonth: "March",*/
      number: 8,
      classNumber: "5B",
      spiritAnimal: "Bird",
    },
    {
      name: "Pat",/*
      birthday: 3,
      birthmonth: "June",*/
      number: 9,
      classNumber: "5B",
      spiritAnimal: "Bug",
    },
    {
      name: "Tonnam",/*
      birthday: 13,
      birthmonth: "October",*/
      number: 10,
      classNumber: "5B",
      spiritAnimal: "Goldfish",
    },
    {
      name: "Pheem",/*
      birthday: 11,
      birthmonth: "July",*/
      number: 11,
      classNumber: "5B",
      spiritAnimal: "Snake",
    },
    {
      name: "Prame",/*
      birthday: 27,
      birthmonth: "July",*/
      number: 13,
      classNumber: "5B",
      spiritAnimal: null,
    },
    {
      name: "Pro",/*
      birthday: 5,
      birthmonth: "September",*/
      number: 14,
      classNumber: "5B",
      spiritAnimal: "Wolf",
    },
    {
      name: "Pakkad",/*
      birthday: 1,
      birthmonth: "February",*/
      number: 15,
      classNumber: "5B",
      spiritAnimal: "Pig",
    },
    {
      name: "Moji",/*
      birthday: 19,
      birthmonth: "November",*/
      number: 16,
      classNumber: "5B",
      spiritAnimal: "Cockroach",
    },
    {
      name: "Namtan",/*
      birthday: 23,
      birthmonth: "August",*/
      number: 17,
      classNumber: "5B",
      spiritAnimal: "Rabbit",
    },
    {
      name: "Noodee",/*
      birthday: 18,
      birthmonth: "January",*/
      number: 18,
      classNumber: "5B",
      spiritAnimal: "Bee",
    },
    {
      name: "Nirin",/*
      birthday: 17,
      birthmonth: "May",*/
      number: 19,
      classNumber: "5B",
      spiritAnimal: "Cat",
    },
    {
      name: "Get",/*
      birthday: 30,
      birthmonth: "March",*/
      number: 20,
      classNumber: "5B",
      spiritAnimal: "Butterfly",
    },
    {
      name: "Tonhom",/*
      birthday: 3,
      birthmonth: "October",*/
      number: 21,
      classNumber: "5B",
      spiritAnimal: "Butterfly",
    },
    {
      name: "Jomkwan",/*
      birthday: 28,
      birthmonth: "September",*/
      number: 22,
      classNumber: "5B",
      spiritAnimal: "Dog/Cat",
    },
    {
      name: "Rada",/*
      birthday: 19,
      birthmonth: "August",*/
      number: 23,
      classNumber: "5B",
      spiritAnimal: "Butterfly",
    },
    {
      name: "Onepiece",/*
      birthday: 19,
      birthmonth: "March",*/
      number: 24,
      classNumber: "5B",
      spiritAnimal: "Caterpillar",
    },
    {
      name: "Ice",/*
      birthday: "",
      birthmonth: "",*/
      number: 25,
      classNumber: "5B",
      spiritAnimal: null,
    },
    {
      name: "Focus",/*
      birthday: "",
      birthmonth: "",*/
      number: 26,
      classNumber: "5B",
      spiritAnimal: "Cat",
    },
    {
      name: "Party",/*
      birthday: 26,
      birthmonth: "September",*/
      number: 27,
      classNumber: "5B",
      spiritAnimal: "Cat",
    },
    {
      name: "Mew",/*
      birthday: "",
      birthmonth: "",*/
      number: 28,
      classNumber: "5B",
      spiritAnimal: null,
    },
    {
      name: "Pim",/*
      birthday: 10,
      birthmonth: "January",*/
      number: 29,
      classNumber: "5B",
      spiritAnimal: "Sloth",
    },
    {
      name: "Plagim",/*
      birthday: 26,
      birthmonth: "August",*/
      number: 30,
      classNumber: "5B",
      spiritAnimal: "Mouse",
    },
    {
      name: "Din",/*
      birthday: 4,
      birthmonth: "September",*/
      number: 1,
      classNumber: "5C",
      spiritAnimal: null,
    },
    {
      name: "James",/*
      birthday: 22,
      birthmonth: "May",*/
      number: 2,
      classNumber: "5C",
      spiritAnimal: null,
    },
    {
      name: "Ice",/*
      birthday: 8,
      birthmonth: "November",*/
      number: 3,
      classNumber: "5C",
      spiritAnimal: null,
    },
    {
      name: "Poon",/*
      birthday: 9,
      birthmonth: "January",*/
      number: 4,
      classNumber: "5C",
      spiritAnimal: null,
    },
    {
      name: "Auto",/*
      birthday: 19,
      birthmonth: "January",*/
      number: 5,
      classNumber: "5C",
      spiritAnimal: null,
    },
    {
      name: "Junior",/*
      birthday: 15,
      birthmonth: "August",*/
      number: 6,
      classNumber: "5C",
      spiritAnimal: null,
    },
    {
      name: "Stam",/*
      birthday: 5,
      birthmonth: "August",*/
      number: 7,
      classNumber: "5C",
      spiritAnimal: null,
    },
    {
      name: "Boat",/*
      birthday: 31,
      birthmonth: "January",*/
      number: 8,
      classNumber: "5C",
      spiritAnimal: null,
    },
    {
      name: "Phum",/*
      birthday: 3,
      birthmonth: "June",*/
      number: 9,
      classNumber: "5C",
      spiritAnimal: null,
    },
    {
      name: "Captain",/*
      birthday: 10,
      birthmonth: "December",*/
      number: 10,
      classNumber: "5C",
      spiritAnimal: null,
    },
    {
      name: "Ozone",/*
      birthday: 21,
      birthmonth: "February",*/
      number: 11,
      classNumber: "5C",
      spiritAnimal: null,
    },
    {
      name: "JJ",/*
      birthday: 17,
      birthmonth: "January",*/
      number: 12,
      classNumber: "5C",
      spiritAnimal: null,
    },
    {
      name: "Smith",/*
      birthday: 20,
      birthmonth: "June",*/
      number: 13,
      classNumber: "5C",
      spiritAnimal: null,
    },
    {
      name: "Phet",/*
      birthday: 27,
      birthmonth: "October",*/
      number: 14,
      classNumber: "5C",
      spiritAnimal: null,
    },
    {
      name: "Pure",/*
      birthday: 5,
      birthmonth: "December",*/
      number: 15,
      classNumber: "5C",
      spiritAnimal: null,
    },
    {
      name: "Mak",/*
      birthday: 9,
      birthmonth: "March",*/
      number: 16,
      classNumber: "5C",
      spiritAnimal: null,
    },
    {
      name: "Kaohom",/*
      birthday: 25,
      birthmonth: "September",*/
      number: 17,
      classNumber: "5C",
      spiritAnimal: null,
    },
    {
      name: "Porsche",/*
      birthday: 15,
      birthmonth: "August",*/
      number: 18,
      classNumber: "5C",
      spiritAnimal: null,
    },
    {
      name: "Nammon",/*
      birthday: 28,
      birthmonth: "November",*/
      number: 19,
      classNumber: "5C",
      spiritAnimal: null,
    },
    {
      name: "Gam",/*
      birthday: 13,
      birthmonth: "March",*/
      number: 20,
      classNumber: "5C",
      spiritAnimal: null,
    },
    {
      name: "Paint",/*
      birthday: 5,
      birthmonth: "June",*/
      number: 21,
      classNumber: "5C",
      spiritAnimal: null,
    },
    {
      name: "Inndy",/*
      birthday: 5,
      birthmonth: "December",*/
      number: 22,
      classNumber: "5C",
      spiritAnimal: null,
    },
    {
      name: "Namkhing",/*
      birthday: 29,
      birthmonth: "September",*/
      number: 23,
      classNumber: "5C",
      spiritAnimal: null,
    },
    {
      name: "Porchom",/*
      birthday: 20,
      birthmonth: "November",*/
      number: 24,
      classNumber: "5C",
      spiritAnimal: null,
    },
    {
      name: "Natcha",/*
      birthday: 5,
      birthmonth: "September",*/
      number: 25,
      classNumber: "5C",
      spiritAnimal: null,
    },
    {
      name: "Mei",/*
      birthday: 21,
      birthmonth: "October",*/
      number: 26,
      classNumber: "5C",
      spiritAnimal: null,
    },
    {
      name: "Nammon",/*
      birthday: 21,
      birthmonth: "October",*/
      number: 27,
      classNumber: "5C",
      spiritAnimal: null,
    },
    {
      name: "Maysa",/*
      birthday: 12,
      birthmonth: "January",*/
      number: 28,
      classNumber: "5C",
      spiritAnimal: null,
    },
    {
      name: "Baibua",/*
      birthday: 28,
      birthmonth: "February",*/
      number: 29,
      classNumber: "5C",
      spiritAnimal: null,
    },
    {
      name: "Khaohom",/*
      birthday: 21,
      birthmonth: "April",*/
      number: 30,
      classNumber: "5C",
      spiritAnimal: null,
    },
  ],
};

Object.freeze(myFavoriteClassroom);
const { school, year, students } = myFavoriteClassroom;
const { teacherName } = myFavoriteClassroom.teacher;


schoolName.textContent = school;
studyYear.textContent = year;
teacher.textContent = teacherName;

const setPlayerCards = (arr = students) => {
  studentCards.innerHTML += arr
    .map(
      ({ name, classNumber,/* birthday, birthmonth,*/ number, spiritAnimal }) => {
        return `
        <div class="student-card">
          <h2>${name}</h2>
          <p>Number: ${number}</p>
          <p>Classroom: ${classNumber}</p>
          <p>Spirit Animal: ${spiritAnimal !== null ? spiritAnimal : "N/A"}</p>
        </div>
      ` }
    )
    .join("");
};

classroomDropdownList.addEventListener("change", (e) => {
  studentCards.innerHTML = "";

  switch (e.target.value) {
    case "5A":
      setPlayerCards(students.filter((student) => student.classNumber === "5A"));
      break;
    case "5B":
      setPlayerCards(students.filter((student) => student.classNumber === "5B"));
      break;
    case "5C":
      setPlayerCards(students.filter((student) => student.classNumber === "5C"));
      break;/*
    case "January":
      setPlayerCards(students.filter((student) => student.birthmonth === "January"));
      break;
    case "February":
      setPlayerCards(students.filter((student) => student.birthmonth === "February"));
      break;
    case "March":
      setPlayerCards(students.filter((student) => student.birthmonth === "March"));
      break;
    case "April":
      setPlayerCards(students.filter((student) => student.birthmonth === "April"));
      break;
    case "May":
      setPlayerCards(students.filter((student) => student.birthmonth === "May"));
      break;
    case "June":
      setPlayerCards(students.filter((student) => student.birthmonth === "June"));
      break;
    case "July":
      setPlayerCards(students.filter((student) => student.birthmonth === "July"));
      break;
    case "August":
      setPlayerCards(students.filter((student) => student.birthmonth === "August"));
      break;
    case "September":
      setPlayerCards(students.filter((student) => student.birthmonth === "September"));
      break;  
    case "October":
      setPlayerCards(students.filter((student) => student.birthmonth === "October"));
      break;
    case "November":
      setPlayerCards(students.filter((student) => student.birthmonth === "November"));
      break;
    case "December":
      setPlayerCards(students.filter((student) => student.birthmonth === "December"));
      break;*/
    default:
      setPlayerCards();

  }
});
