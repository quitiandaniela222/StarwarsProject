
async function infoPeople() {
    try {
        const completeInfo = await fetch('https://swapi.dev/api/people/',
            { method: 'GET' });
        const jsonFresh = await completeInfo.json();
        const resultsInfo = jsonFresh.results;
        const arrayInfoComplete = resultsInfo.map((result) => {
            return {
                name: result.name,
                height: result.height,
                gender: result.gender,
                mass: result.mass,
                species: result.hair_color,
                "birth_year": result['birth_year']
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
infoPeople();
const PAGE_SIZE = 10; 
let currentPage = 1;

async function displayInfo() {
    const response = await fetch('https://swapi.dev/api/people/');
    const data = await response.json();
    const characters = data.results;

    characters.forEach(character => {
        const card = document.createElement('div');
        card.className = 'card';

        const name = document.createElement('h2');
        name.textContent = character.name;
        card.appendChild(name);

        const height = document.createElement('p');
        height.textContent = `Height: ${character.height}`;
        card.appendChild(height);

        const gender = document.createElement('p');
        gender.textContent = `Gender: ${character.gender}`;
        card.appendChild(gender);

        const mass = document.createElement('p');
        mass.textContent = `Mass: ${character.mass}`;
        card.appendChild(mass);

        const species = document.createElement('p');
        species.textContent = `hair_color: ${character.hair_color[0]}`;
        card.appendChild(species);

        const birthYear = document.createElement('p');
        birthYear.textContent = `Birth Year: ${character.birth_year}`;
        card.appendChild(birthYear);

        const eye_color = document.createElement('p');
        birthYear.textContent = `eye_color: ${character.eye_color}`;
        card.appendChild(eye_color);

        document.body.appendChild(card);
        

        const image = document.createElement("img");
        if (character.gender === "male") {
            image.src = "https://purepng.com/public/uploads/large/purepng.com-darth-vaderdarth-vaderanakin-skywalkerstar-wars-franchiseskywalker-1701527754416cye7j.png";
            image.style.width = "80%";
            image.style.height = "30%";
        } else if (character.gender === "female") {
            image.src = "https://www.freepnglogos.com/uploads/star-wars-png/png-rey-star-wars-daisy-ridley-the-last-jedi-force-35.png";
            image.style.width = "80%";
            image.style.height = "30%";
        } else {
            image.src = "https://pngimg.es/d/starwars_PNG27.png";
            image.style.width = "80%";
            image.style.height = "30%";
        }
        card.appendChild(image);
    });
}
displayInfo();
document.body.appendChild(card);

