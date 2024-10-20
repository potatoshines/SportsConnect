const KINDO_API_KEY = "INSERT_YOUR_KINDO_API_KEY_HERE"; // Your Kindo API key

const athletes = {
    "LeBron James": { sport: "Basketball", height: 203, weight: 113, favorite_food: "Tacos", favorite_drink: "Wine", favorite_vacation: "Italy", favorite_number: 23, post_workout_meal: "Grilled chicken", workout_music: "Hip-hop", relaxation_method: "Watching movies", image_url: "images/LeBron.png"},
    "Cristiano Ronaldo": { sport: "Soccer", height: 187, weight: 83, favorite_food: "Bacalhau", favorite_drink: "Water", favorite_vacation: "Greek Islands", favorite_number: 7, post_workout_meal: "Fish with vegetables", workout_music: "Pop", relaxation_method: "Spending time with family", image_url: "images/Ronaldo.png"},
    "Serena Williams": { sport: "Tennis", height: 175, weight: 70, favorite_food: "Vegan Smoothie", favorite_drink: "Water", favorite_vacation: "France", favorite_number: 1, post_workout_meal: "Salad and quinoa", workout_music: "R&B", relaxation_method: "Reading books", image_url: "images/Serena.png"},
    "Michael Phelps": { sport: "Swimming", height: 193, weight: 90, favorite_food: "Pizza", favorite_drink: "Energy Drink", favorite_vacation: "Hawaii", favorite_number: 5, post_workout_meal: "Pasta", workout_music: "Rock", relaxation_method: "Playing video games", image_url: "images/MichaelPhelps.png"},
    "Usain Bolt": { sport: "Track and Field", height: 195, weight: 94, favorite_food: "Chicken Nuggets", favorite_drink: "Water", favorite_vacation: "Jamaica", favorite_number: 9, post_workout_meal: "Rice and beans", workout_music: "Reggae", relaxation_method: "Dancing", image_url: "images/Usain.png"},
    "Simone Biles": { sport: "Gymnastics", height: 142, weight: 47, favorite_food: "Sushi", favorite_drink: "Green Tea", favorite_vacation: "Bali", favorite_number: 24, post_workout_meal: "Salmon and rice", workout_music: "Pop", relaxation_method: "Listening to music", image_url: "images/Simone.png"},
    "Lionel Messi": { sport: "Soccer", height: 170, weight: 72, favorite_food: "Milanesa", favorite_drink: "Mate", favorite_vacation: "Barcelona", favorite_number: 10, post_workout_meal: "Chicken and pasta", workout_music: "Latin music", relaxation_method: "Playing with kids", image_url: "images/Lionel.png"},
    "Naomi Osaka": { sport: "Tennis", height: 180, weight: 75, favorite_food: "Ramen", favorite_drink: "Green Tea", favorite_vacation: "Japan", favorite_number: 44, post_workout_meal: "Soba noodles", workout_music: "Pop", relaxation_method: "Watching anime", image_url: "images/Naomi.png"},
    "Shaquille O'Neal": { sport: "Basketball", height: 216, weight: 147, favorite_food: "Steak", favorite_drink: "Soda", favorite_vacation: "Bahamas", favorite_number: 32, post_workout_meal: "Burger and fries", workout_music: "Hip-hop", relaxation_method: "DJing", image_url: "images/Shaquille.png"},
    "Tom Brady": { sport: "Football", height: 193, weight: 102, favorite_food: "Avocado toast", favorite_drink: "Smoothies", favorite_vacation: "Costa Rica", favorite_number: 12, post_workout_meal: "Quinoa and chicken", workout_music: "Classical", relaxation_method: "Meditation", image_url: "images/Tom.png"},
    "Stephen Curry": { sport: "Basketball", height: 188, weight: 84, favorite_food: "Chicken Curry", favorite_drink: "Coconut Water", favorite_vacation: "Maldives", favorite_number: 30, post_workout_meal: "Rice and veggies", workout_music: "Hip-hop", relaxation_method: "Golfing", image_url: "images/Stephen.png"},
    "Megan Rapinoe": { sport: "Soccer", height: 170, weight: 60, favorite_food: "Tacos", favorite_drink: "Coffee", favorite_vacation: "Spain", favorite_number: 15, post_workout_meal: "Tuna salad", workout_music: "Alternative rock", relaxation_method: "Reading", image_url: "images/Megan.png" },
    "Kylian Mbappe": { sport: "Soccer", height: 178, weight: 73, favorite_food: "French Fries", favorite_drink: "Sports Drink", favorite_vacation: "Paris", favorite_number: 7, post_workout_meal: "Grilled fish", workout_music: "Rap", relaxation_method: "Playing video games", image_url: "images/Kylian.png" },
    "Roger Federer": { sport: "Tennis", height: 185, weight: 85, favorite_food: "Swiss Fondue", favorite_drink: "Wine", favorite_vacation: "Switzerland", favorite_number: 8, post_workout_meal: "Grilled chicken", workout_music: "Classical", relaxation_method: "Reading", image_url: "images/Roger.png" },
    "Novak Djokovic": { sport: "Tennis", height: 188, weight: 77, favorite_food: "Pasta", favorite_drink: "Water", favorite_vacation: "Serbia", favorite_number: 1, post_workout_meal: "Gluten-free pizza", workout_music: "Techno", relaxation_method: "Yoga", image_url: "images/Novak.png" },
    "Kevin Durant": { sport: "Basketball", height: 208, weight: 109, favorite_food: "Fried Chicken", favorite_drink: "Gatorade", favorite_vacation: "Bahamas", favorite_number: 35, post_workout_meal: "Protein shake", workout_music: "Rap", relaxation_method: "Watching Netflix", image_url: "images/Kevin.png"},
    "Kobe Bryant": { sport: "Basketball", height: 198, weight: 96, favorite_food: "Pasta", favorite_drink: "Gatorade", favorite_vacation: "Italy", favorite_number: 24, post_workout_meal: "Chicken and rice", workout_music: "Classical", relaxation_method: "Reading and meditation", image_url: "images/Kobe.png" },
    "David Beckham": { sport: "Soccer", height: 183, weight: 75, favorite_food: "Fish and chips", favorite_drink: "Tea", favorite_vacation: "Maldives", favorite_number: 7, post_workout_meal: "Grilled fish", workout_music: "Pop", relaxation_method: "Playing with kids", image_url: "images/David.png" }, 
    "Rafael Nadal": { sport: "Tennis", height: 185, weight: 85, favorite_food: "Paella", favorite_drink: "Water", favorite_vacation: "Mallorca", favorite_number: 1, post_workout_meal: "Salad and chicken", workout_music: "Spanish Rock", relaxation_method: "Fishing", image_url: "images/Rafael.png"},
    "Tiger Woods": { sport: "Golf", height: 185, weight: 84, favorite_food: "Sushi", favorite_drink: "Gatorade", favorite_vacation: "Thailand", favorite_number: 9, post_workout_meal: "Sushi rolls", workout_music: "Jazz", relaxation_method: "Watching TV", image_url: "images/Tiger.png" },
    "Venus Williams": { sport: "Tennis", height: 185, weight: 75, favorite_food: "Pancakes", favorite_drink: "Smoothies", favorite_vacation: "Italy", favorite_number: 11, post_workout_meal: "Quinoa salad", workout_music: "R&B", relaxation_method: "Painting", image_url: "images/Venus.png" },
    "Alex Morgan": { sport: "Soccer", height: 170, weight: 62, favorite_food: "Tacos", favorite_drink: "Green tea", favorite_vacation: "Mexico", favorite_number: 13, post_workout_meal: "Salmon and veggies", workout_music: "Pop", relaxation_method: "Yoga", image_url: "images/Alex.png" },
    "Lewis Hamilton": { sport: "Formula 1", height: 174, weight: 69, favorite_food: "Vegan burger", favorite_drink: "Coconut water", favorite_vacation: "Monaco", favorite_number: 44, post_workout_meal: "Vegan smoothie", workout_music: "Electronic", relaxation_method: "Listening to music", image_url: "images/Lewis.png" },
    "Dwayne Johnson": { sport: "Wrestling", height: 196, weight: 118, favorite_food: "Steak", favorite_drink: "Tequila", favorite_vacation: "Hawaii", favorite_number: 94, post_workout_meal: "Steak and rice", workout_music: "Hip-hop", relaxation_method: "Fishing", image_url: "images/Dwayne.png" },
    "James Harden": { sport: "Basketball", height: 196, weight: 99, favorite_food: "Fried chicken", favorite_drink: "Sports drink", favorite_vacation: "Bahamas", favorite_number: 13, post_workout_meal: "Chicken wings", workout_music: "Rap", relaxation_method: "Watching TV", image_url: "images/James.png" },
    "Neymar Jr.": { sport: "Soccer", height: 175, weight: 68, favorite_food: "Brazilian BBQ", favorite_drink: "Water", favorite_vacation: "Brazil", favorite_number: 10, post_workout_meal: "Grilled steak", workout_music: "Samba", relaxation_method: "Dancing", image_url: "images/Neymar.png" },
    "Tommy Fleetwood": { sport: "Golf", height: 180, weight: 75, favorite_food: "Steak", favorite_drink: "Tea", favorite_vacation: "Scotland", favorite_number: 19, post_workout_meal: "Salmon and rice", workout_music: "Rock", relaxation_method: "Fishing", image_url: "images/Tommy.png" },
    "Simona Halep": { sport: "Tennis", height: 168, weight: 60, favorite_food: "Pasta", favorite_drink: "Water", favorite_vacation: "Romania", favorite_number: 2, post_workout_meal: "Chicken and veggies", workout_music: "Pop", relaxation_method: "Reading", image_url: "images/Simona.png" },
    "Eliud Kipchoge": { sport: "Marathon Running", height: 167, weight: 52, favorite_food: "Ugali", favorite_drink: "Water", favorite_vacation: "Kenya", favorite_number: 1, post_workout_meal: "Rice and beans", workout_music: "Traditional Kenyan music", relaxation_method: "Meditation", image_url: "images/Eliud.png" },
    "Canelo Alvarez": { sport: "Boxing", height: 175, weight: 75, favorite_food: "Tacos", favorite_drink: "Water", favorite_vacation: "Mexico", favorite_number: 6, post_workout_meal: "Chicken and rice", workout_music: "Mexican ballads", relaxation_method: "Fishing", image_url: "images/Canelo.png" },
    "Cristiano Ronaldo Jr.": { sport: "Soccer", height: 155, weight: 50, favorite_food: "Pizza", favorite_drink: "Juice", favorite_vacation: "Portugal", favorite_number: 7, post_workout_meal: "Spaghetti", workout_music: "Pop", relaxation_method: "Playing video games", image_url: "images/CristianoJr.png" },
    "Michael Jordan": { sport: "Basketball", height: 198, weight: 98, favorite_food: "Steak", favorite_drink: "Whiskey", favorite_vacation: "Bahamas", favorite_number: 23, post_workout_meal: "Chicken and veggies", workout_music: "R&B", relaxation_method: "Golfing", image_url: "images/MichaelJordan.png" },
    "Chris Paul": { sport: "Basketball", height: 183, weight: 79, favorite_food: "Pizza", favorite_drink: "Water", favorite_vacation: "California", favorite_number: 3, post_workout_meal: "Chicken wrap", workout_music: "Hip-hop", relaxation_method: "Spending time with family", image_url: "images/Chris.png" },
    "Rory McIlroy": { sport: "Golf", height: 175, weight: 70, favorite_food: "Steak", favorite_drink: "Water", favorite_vacation: "Ireland", favorite_number: 21, post_workout_meal: "Fish and chips", workout_music: "Rock", relaxation_method: "Reading", image_url: "images/Rory.png" },
    "Zion Williamson": { sport: "Basketball", height: 201, weight: 129, favorite_food: "Pizza", favorite_drink: "Sports drink", favorite_vacation: "Bahamas", favorite_number: 1, post_workout_meal: "Grilled chicken", workout_music: "Hip-hop", relaxation_method: "Playing video games", image_url: "images/Zion.png" },
    "Patrick Mahomes": { sport: "Football", height: 191, weight: 104, favorite_food: "BBQ", favorite_drink: "Gatorade", favorite_vacation: "Hawaii", favorite_number: 15, post_workout_meal: "Chicken wings", workout_music: "Rap", relaxation_method: "Watching movies", image_url: "images/Patrick.png" },
    "Luka Modric": { sport: "Soccer", height: 172, weight: 66, favorite_food: "Pasta", favorite_drink: "Water", favorite_vacation: "Croatia", favorite_number: 10, post_workout_meal: "Chicken and rice", workout_music: "Pop", relaxation_method: "Spending time with family", image_url: "images/Luka.png" },
    "Stephen Thompson": { sport: "MMA", height: 183, weight: 77, favorite_food: "Salmon", favorite_drink: "Water", favorite_vacation: "Hawaii", favorite_number: 4, post_workout_meal: "Grilled chicken", workout_music: "Rock", relaxation_method: "Meditation", image_url: "images/StephenThompson.png" },
    "Aaron Donald": { sport: "Football", height: 185, weight: 127, favorite_food: "Steak", favorite_drink: "Protein shake", favorite_vacation: "Bahamas", favorite_number: 99, post_workout_meal: "Grilled chicken", workout_music: "Hip-hop", relaxation_method: "Golfing", image_url: "images/Aaron.png" },
    "Virat Kohli": { sport: "Cricket", height: 175, weight: 70, favorite_food: "Indian curry", favorite_drink: "Water", favorite_vacation: "Maldives", favorite_number: 18, post_workout_meal: "Chicken and veggies", workout_music: "Bollywood", relaxation_method: "Playing video games", image_url: "images/Virat.png" },
    "Ronda Rousey": { sport: "MMA", height: 170, weight: 61, favorite_food: "Sushi", favorite_drink: "Tea", favorite_vacation: "Japan", favorite_number: 12, post_workout_meal: "Rice and fish", workout_music: "Rock", relaxation_method: "Reading", image_url: "images/Ronda.png"},
    "Damian Lillard": { sport: "Basketball", height: 188, weight: 88, favorite_food: "Fried chicken", favorite_drink: "Smoothies", favorite_vacation: "Mexico", favorite_number: 0, post_workout_meal: "Protein shake", workout_music: "Hip-hop", relaxation_method: "Playing video games", image_url: "images/Damian.png" },
    "Fernando Alonso": { sport: "Formula 1", height: 171, weight: 68, favorite_food: "Paella", favorite_drink: "Water", favorite_vacation: "Spain", favorite_number: 14, post_workout_meal: "Pasta", workout_music: "Rock", relaxation_method: "Reading", image_url: "images/Fernando.png" },
    "Allyson Felix": { sport: "Track and Field", height: 168, weight: 55, favorite_food: "Pasta", favorite_drink: "Water", favorite_vacation: "Hawaii", favorite_number: 6, post_workout_meal: "Chicken and veggies", workout_music: "Pop", relaxation_method: "Spending time with family", image_url: "images/Allyson.png" },
    "Max Verstappen": { sport: "Formula 1", height: 181, weight: 72, favorite_food: "Sushi", favorite_drink: "Energy drink", favorite_vacation: "Monaco", favorite_number: 33, post_workout_meal: "Grilled fish", workout_music: "Rock", relaxation_method: "Playing video games", image_url: "images/Max.png" },
    "Cameron Smith": { sport: "Golf", height: 180, weight: 78, favorite_food: "Steak", favorite_drink: "Water", favorite_vacation: "Australia", favorite_number: 17, post_workout_meal: "Salmon and rice", workout_music: "Country", relaxation_method: "Fishing", image_url: "images/Cameron.png" },
    "Anthony Joshua": { sport: "Boxing", height: 198, weight: 108, favorite_food: "Chicken", favorite_drink: "Protein shake", favorite_vacation: "Dubai", favorite_number: 1, post_workout_meal: "Chicken and rice", workout_music: "Hip-hop", relaxation_method: "Watching movies", image_url: "images/Anthony.png" },
    "Kawhi Leonard": { sport: "Basketball", height: 201, weight: 102, favorite_food: "Pasta", favorite_drink: "Water", favorite_vacation: "California", favorite_number: 2, post_workout_meal: "Grilled chicken", workout_music: "Rap", relaxation_method: "Reading", image_url: "images/Kawhi.png" },
    "Marta": { sport: "Soccer", height: 163, weight: 56, favorite_food: "Feijoada", favorite_drink: "Water", favorite_vacation: "Brazil", favorite_number: 10, post_workout_meal: "Grilled steak", workout_music: "Samba", relaxation_method: "Listening to music", image_url: "images/Marta.png" },
    "Gareth Bale": { sport: "Soccer", height: 185, weight: 82, favorite_food: "Fish and chips", favorite_drink: "Water", favorite_vacation: "Wales", favorite_number: 11, post_workout_meal: "Pasta", workout_music: "Pop", relaxation_method: "Golfing", image_url: "images/Gareth.png" },
    "Russell Wilson": { sport: "Football", height: 180, weight: 98, favorite_food: "Grilled chicken", favorite_drink: "Protein shake", favorite_vacation: "Bahamas", favorite_number: 3, post_workout_meal: "Grilled fish", workout_music: "Country", relaxation_method: "Spending time with family", image_url: "images/Russell.png" },
    "Devin Booker": { sport: "Basketball", height: 196, weight: 93, favorite_food: "Pizza", favorite_drink: "Gatorade", favorite_vacation: "Mexico", favorite_number: 1, post_workout_meal: "Pasta", workout_music: "Hip-hop", relaxation_method: "Watching TV", image_url: "images/Devin.png"},
    "Paige VanZant": { sport: "MMA", height: 163, weight: 57, favorite_food: "Sushi", favorite_drink: "Green tea", favorite_vacation: "Bali", favorite_number: 12, post_workout_meal: "Salmon and rice", workout_music: "Pop", relaxation_method: "Reading", image_url: "images/Paige.png" },
    "Zlatan Ibrahimovic": { sport: "Soccer", height: 195, weight: 95, favorite_food: "Meatballs", favorite_drink: "Water", favorite_vacation: "Sweden", favorite_number: 10, post_workout_meal: "Grilled steak", workout_music: "Rock", relaxation_method: "Fishing", image_url: "images/Zlatan.png" },
    "Sloane Stephens": { sport: "Tennis", height: 170, weight: 64, favorite_food: "Pasta", favorite_drink: "Coconut water", favorite_vacation: "Hawaii", favorite_number: 3, post_workout_meal: "Chicken and veggies", workout_music: "Pop", relaxation_method: "Reading", image_url: "images/Sloane.png" },
    "Saquon Barkley": { sport: "Football", height: 183, weight: 106, favorite_food: "Steak", favorite_drink: "Protein shake", favorite_vacation: "Bahamas", favorite_number: 26, post_workout_meal: "Grilled chicken", workout_music: "Hip-hop", relaxation_method: "Golfing", image_url: "images/Saquon.png" },
    "P.K. Subban": { sport: "Hockey", height: 183, weight: 95, favorite_food: "Pasta", favorite_drink: "Water", favorite_vacation: "Canada", favorite_number: 76, post_workout_meal: "Chicken and rice", workout_music: "Hip-hop", relaxation_method: "Playing video games", image_url: "images/PK.png" },
    "Jordan Spieth": { sport: "Golf", height: 185, weight: 79, favorite_food: "Steak", favorite_drink: "Water", favorite_vacation: "Hawaii", favorite_number: 7, post_workout_meal: "Salmon and veggies", workout_music: "Country", relaxation_method: "Watching movies" , image_url: "images/JordanSpieth.png"},
    "Jimmy Butler": { sport: "Basketball", height: 201, weight: 104, favorite_food: "Steak", favorite_drink: "Smoothie", favorite_vacation: "Bahamas", favorite_number: 22, post_workout_meal: "Grilled chicken", workout_music: "Country", relaxation_method: "Listening to music", image_url: "images/Patrick.png" },
    "Ashleigh Barty": { sport: "Tennis", height: 166, weight: 62, favorite_food: "Pasta", favorite_drink: "Water", favorite_vacation: "Australia", favorite_number: 1, post_workout_meal: "Chicken and rice", workout_music: "Country", relaxation_method: "Fishing",  image_url: "images/Ashleigh.png"},
    "Joel Embiid": { sport: "Basketball", height: 213, weight: 127, favorite_food: "Steak", favorite_drink: "Water", favorite_vacation: "Cameroon", favorite_number: 21, post_workout_meal: "Grilled chicken", workout_music: "Hip-hop", relaxation_method: "Playing video games", image_url: "images/Joel.png" }  
};


document.getElementById("submitBtn").addEventListener("click", async function() {
    const loadingScreen = document.getElementById("loadingScreen");
    loadingScreen.style.display = "flex"; // Show loading screen

    const userAnswers = {
        height: document.getElementById("height").value,
        weight: document.getElementById("weight").value,
        favorite_food: document.getElementById("food").value.toLowerCase(),
        favorite_drink: document.getElementById("drink").value.toLowerCase(),
        favorite_vacation: document.getElementById("vacation").value.toLowerCase(),
        favorite_number: document.getElementById("number").value
    };

     // Save user data to localStorage
     localStorage.setItem('userData', JSON.stringify(userAnswers));
     // Save athletes data to localStorage
     localStorage.setItem('athletesData', JSON.stringify(athletes));

    const { bestMatch, sharedCharacteristics } = matchAthlete(userAnswers);
    const athleteSummary = await getAthleteSummary(bestMatch); // Fetch summary from Kindo
    displayResult(bestMatch, sharedCharacteristics, athleteSummary);

    setTimeout(() => {
        loadingScreen.style.display = "none"; // Hide loading screen after processing
    }, 1500); // Simulate a 1.5-second processing time

    document.getElementById('nextBtn').style.display = 'block'; // Show the next button after the summary is displayed
});

function matchAthlete(answers) {
    let bestMatch = null;
    let highestScore = 0;
    let sharedCharacteristics = [];

    for (const name in athletes) {
        const traits = athletes[name];
        let score = 0;
        let currentShared = [];

        // Compare height
        if (Math.abs(parseInt(answers.height) - traits.height) <= 5) {
            score++;
            currentShared.push(`Height: ${traits.height} cm`);
        }
        // Compare weight
        if (Math.abs(parseInt(answers.weight) - traits.weight) <= 5) {
            score++;
            currentShared.push(`Weight: ${traits.weight} kg`);
        }
        // Compare favorite food
        if (traits.favorite_food.toLowerCase().includes(answers.favorite_food.toLowerCase())) {
            score++;
            currentShared.push(`Favorite Food: ${traits.favorite_food}`);
        }
        // Compare favorite drink
        if (traits.favorite_drink.toLowerCase().includes(answers.favorite_drink.toLowerCase())) {
            score++;
            currentShared.push(`Favorite Drink: ${traits.favorite_drink}`);
        }
        // Compare favorite vacation spot
        if (traits.favorite_vacation.toLowerCase().includes(answers.favorite_vacation.toLowerCase())) {
            score++;
            currentShared.push(`Favorite Vacation Spot: ${traits.favorite_vacation}`);
        }
        // Compare favorite number
        if (parseInt(answers.favorite_number) === traits.favorite_number) {
            score++;
            currentShared.push(`Favorite Number: ${traits.favorite_number}`);
        }

        // Find best match based on highest score
        if (score > highestScore) {
            highestScore = score;
            bestMatch = name;
            sharedCharacteristics = currentShared;
        }
    }
    
    return { bestMatch, sharedCharacteristics };
}

document.getElementById('nextBtn').addEventListener('click', function() {
    window.location.href = 'evaluate.html'; // Redirect to the next page
});

async function getAthleteSummary(athlete) {
    const prompt = `Generate a brief summary of ${athlete}, a famous ${athletes[athlete].sport} athlete. They love ${athletes[athlete].favorite_food}, vacation in ${athletes[athlete].favorite_vacation}, and their favorite number is ${athletes[athlete].favorite_number}. Focus on key personality traits.`;

    try {
        const response = await fetch("https://llm.kindo.ai/v1/chat/completions", {
            method: "POST",
            headers: {
                "api-key": KINDO_API_KEY,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "claude-3-5-sonnet-20240620", // Replace with actual model name
                messages: [{ role: "user", content: prompt }]
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.choices[0].message.content.trim();
    } catch (error) {
        console.error("Error fetching athlete summary:", error);
        return "An error occurred while generating the summary.";
    }
}

function displayResult(athlete, sharedCharacteristics, summary) {
    const resultDiv = document.getElementById("result");

    if (!athlete) {
        resultDiv.innerHTML = "<p>Sorry, no exact match was found.</p>";
        return;
    }

    let athleteImage = athletes[athlete].image_url ? `<img src="${athletes[athlete].image_url}" alt="${athlete}" class="athlete-image">` : '';

    let message = `
        <div class="athlete-container">
            ${athleteImage}
            <div class="athlete-info">
                <p class="athlete-name">Based on your answers, you share some characteristics with ${athlete}!</p>
                <p>You have the following in common:</p>
                <ul>`;

    sharedCharacteristics.forEach((characteristic) => {
        message += `<li><span class="relation">${characteristic}</span></li>`;
    });

    message += `</ul>
                <p class="summary">${summary}</p>
            </div>
        </div>`;

    resultDiv.innerHTML = message;
}
