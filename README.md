# Weather Dashboard

## Project Overview
The **Weather Dashboard** is a React-based web application that allows users to search for and view current weather conditions in various cities using the OpenWeatherMap API. The app provides real-time weather updates and displays relevant details in an interactive and user-friendly interface.

## Features
- **Search Functionality:** Users can search for a city to retrieve its current weather conditions.
- **Random City Display:** On the landing page, the app fetches and displays weather details for a random city.
- **Weather Details Display:** Temperature, humidity, wind speed, and weather conditions are shown.
- **Error Handling:** Displays user-friendly error messages for incorrect city names or API errors.
- **Navigation:** Separate pages for the landing page and detailed weather information.
- **Real-Time API Integration:** Fetches live weather data from OpenWeatherMap.
- **Modular Components:** Reusable components such as `LandingPage` and `WeatherCard` for structured display.

## Technologies Used
- **Frontend:** React.js (with hooks like `useState` and `useEffect`)
- **Styling:** (To be added in the next phase)
- **API Integration:** OpenWeatherMap API
- **State Management:** React State Hooks
- **Routing:** React Router
- **Package Manager:** npm

## Installation & Setup
### Prerequisites:
- Node.js & npm installed

### Steps to Run Locally:
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/weather-dashboard.git
   ```
2. Navigate to the project directory:
   ```sh
   cd weather-dashboard
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file in the root directory and add your OpenWeather API key:
   ```sh
   REACT_APP_WEATHER_API_KEY=your_api_key_here
   ```
5. Start the development server:
   ```sh
   npm run dev
   ```

## Usage
- On launch, the app displays weather details for a random city.
- Users can enter a city name in the search bar and click **Submit** to view its weather details.
- Clicking on a city’s card navigates to a detailed weather information page.

## Roadmap
- **Phase 1:** Basic functionality with API integration ✅
- **Phase 2:** Styling with Tailwind CSS (Upcoming)
- **Phase 3:** Add search history and refresh button (Upcoming)
- **Phase 4:** Deployment on Netlify/Vercel (Upcoming)

## Deployment
- (To be updated once deployed)

## Contributors
- **[Your Name]** - Frontend Developer

## License
This project is open-source and available under the **MIT License**.

## Acknowledgments
- OpenWeatherMap API for providing weather data.
- React.js community for documentation and support.

---

### Notes:
- Ensure you replace `your_api_key_here` in the `.env` file with your actual OpenWeather API key.
- The project will undergo further improvements, including UI/UX enhancements and additional features.

Happy coding! 🚀


