## Movie Search App
- A simple and interactive web application that allows users to search for movies and view their details using the OMDb API.
- This project is built using HTML, CSS, and JavaScript (Fetch API).

## Features
🔍 Search movies by title
🎞️ Display movie posters, titles, and release year
📘 View detailed movie info (genre, cast, plot, director)
📱 Responsive UI for all devices
⚠️ Error handling for invalid inputs or no results
⚡ Fast and lightweight (No frameworks)

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6)
- OMDb REST API
- Fetch API

## Project Structure
Movie-Search-App/
│
├── index.html
├── style.css
├── script.js
└── README.md

1️⃣ Clone the Repository
git clone https://github.com/your-username/movie-search-app.git

2️⃣ Navigate into the Folder
cd movie-search-app

3️⃣ Open the Project
Open index.html in Chrome or any browser.

🔑 Get OMDb API Key
You must get a free API key from OMDb.

Steps:
Visit 👉 https://www.omdbapi.com/apikey.aspx
Select Free Plan
Enter your email
Confirm captcha and submit
Check your email for your API KEY
Then replace in script.js:
const API_KEY = 'YOUR_OMDB_API_KEY';

With:
const API_KEY = 'your_real_api_key_here';

## How It Works
- Search Movies
User enters a movie name → Fetch request → Show results

## View Movie Details
-Click any movie → Fetch details using IMDb ID → Show full description
