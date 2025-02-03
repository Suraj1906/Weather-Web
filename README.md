# WEATHER APP 🌤️  

## Welcome to the **Weather App**, a simple and elegant web application that provides real-time weather information for any city or your current location. Built with HTML, CSS, and JavaScript, this app leverages the OpenWeatherMap API to fetch and display weather data. Whether you're planning your day or just curious about the weather, this app has got you covered!  

---

## FEATURES ✨  

- **Current Location Weather**: Get weather details for your current location with just one click.  
- **Search Weather by City**: Enter any city name to fetch its weather information.  
- **Temperature Unit Toggle**: Switch between Celsius and Fahrenheit with ease.  
- **Detailed Weather Info**: View temperature, humidity, wind speed, and cloudiness.  
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.  

---

## SCREENSHOTS 📸  

![ui 1](https://github.com/user-attachments/assets/9f0499c9-0209-416b-8cb5-5da7de6fcabd)

![ui2](https://github.com/user-attachments/assets/6a0b48c4-d417-41e0-8abd-6e946eb4df42)

![ui3](https://github.com/user-attachments/assets/242cbf9e-e345-412e-b1fd-9a2685c08391)


---

## HOW TO RUN LOCALLY 🚀  

### Follow these steps to run the Weather App on your local machine:  

1. **Clone the Repository**  
   Clone this repository to your local machine using the following command:  
   ```bash  
   git clone https://github.com/Suraj1906/Weather-Web.git 
   ```  

2.**Navigate to the project directory:**

```bash 
  cd weather-app
 ```


3. **Open the Project**  
   Open the `index.html` file in your preferred browser. You can do this by double-clicking the file or Alternatively, you can use a local development server such as Live Server in VS Code. 
   
   
5. **Enjoy!**  
   Start exploring the app by granting location access or searching for a city.  

---

## APPROACH AND CHALLENGES 🛠️  

### Approach  

1. **HTML Structure**:  
   The app is built with a clean and semantic HTML structure. It includes sections for granting location access, searching for a city, displaying loading states, and showing weather information.  

2. **CSS Styling**:  
   The CSS is designed to be responsive and visually appealing. It uses a gradient background, custom fonts, and flexible layouts to ensure the app looks great on all devices.  

3. **JavaScript Logic**:  
   The app uses JavaScript to handle user interactions, fetch data from the OpenWeatherMap API, and dynamically update the DOM. Key features include:  
   - **Tab Switching**: Toggles between "Your Weather" and "Search Weather" tabs.  
   - **Geolocation**: Fetches the user's current location and displays weather data.  
   - **Temperature Conversion**: Allows users to switch between Celsius and Fahrenheit.  
   - **Error Handling**: Displays error messages for invalid city names.  

### Challenges and Solutions  

1. **Geolocation Permissions**:  
   - **Challenge**: Users need to grant location access to fetch weather data for their current location.  
   - **Solution**: The app uses the `navigator.geolocation` API to request permission and handle user coordinates. If denied, it gracefully falls back to the search functionality.  

2. **API Rate Limits**:  
   - **Challenge**: The OpenWeatherMap API has rate limits, which can cause issues if too many requests are made.  
   - **Solution**: The app stores user coordinates in `sessionStorage` to minimize API calls and provides clear error messages for invalid requests.  

3. **Temperature Unit Conversion**:  
   - **Challenge**: Users may prefer different temperature units (Celsius or Fahrenheit).  
   - **Solution**: The app includes a toggle button that dynamically converts and updates the temperature display.  

4. **Error Handling for Invalid Cities**:  
   - **Challenge**: If a user enters an invalid city name, the app needs to handle the error gracefully.  
   - **Solution**: The app displays a user-friendly error message below the search input and clears it when a valid city is entered.  

---

## TECHNOLOGIES USED 💻  

- **HTML**: For structuring the app.  
- **CSS**: For styling and responsiveness.  
- **JavaScript**: For dynamic functionality and API integration.  
- **OpenWeatherMap API**: For fetching weather data.  
- **Axios**: For making HTTP requests.  

---

## FUTURE IMPROVEMENTS 🔮  

- Add a 5-day weather forecast.  
- Include more detailed weather metrics (e.g., UV index, sunrise/sunset times).  
- Implement a dark/light mode toggle.  
- Allow users to save favorite cities for quick access.  

---

## CONTRIBUTING 🤝  

### Contributions are welcome! If you'd like to improve this project, feel free to open an issue or submit a pull request.  

---

## LICENSE 📜  

### This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.  

---

## ENJOY THE WEATHER APP! 🌦️  
### Let me know if you have any questions or feedback. Happy coding! 🚀
