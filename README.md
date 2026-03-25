# 🌦️ Smart City Weather Dashboard

## 📌 Project Overview

The **Smart City Weather Dashboard** is a responsive web application that provides real-time weather information along with intelligent suggestions like **"What to Wear"** based on current weather conditions.

This project goes beyond basic temperature display by offering a user-friendly interface, dynamic visuals, and actionable weather insights.

---

## 🚀 Features

* 🔍 **Search by City**

  * Users can search weather details for any city worldwide.

* 📅 **5-Day Weather Forecast**

  * Displays upcoming weather conditions including temperature, humidity, and weather status.

* 👕 **"What to Wear" Suggestions**

  * Smart recommendations based on weather:

    * 🌧️ "Carry an umbrella" if rain probability > 20%
    * 🧥 "Wear warm clothes" if temperature is low
    * 🧴 "Use sunscreen" if sunny and hot

* 🌈 **Dynamic UI**

  * Background colors change based on temperature:

    * ❄️ Blue → Cold weather
    * 🌤️ Yellow → Moderate weather
    * 🔥 Orange/Red → Hot weather

* 🌦️ **Weather Icons**

  * Icons dynamically update based on weather conditions (rain, clouds, clear, etc.)

---

## 🛠️ Tech Stack

* **HTML** – Structure of the app
* **CSS** – Styling and responsive design
* **JavaScript (Vanilla JS)** – Logic and API integration

---

## 🌐 API Used

* OpenWeatherMap API
  👉 https://openweathermap.org/api

---

## ⚙️ How It Works

1. User enters a city name.
2. App sends a request to the OpenWeatherMap API.
3. Weather data is fetched and processed.
4. UI updates dynamically:

   * Temperature
   * Weather condition
   * Forecast
   * Clothing suggestions

---

## 📂 Project Structure

```
📁 smart-weather-dashboard
│── index.html
│── style.css
│── script.js
│── README.md
```

---

## 🔑 Setup Instructions

1. Clone the repository:

   ```
   git clone https://github.com/your-username/smart-weather-dashboard.git
   ```

2. Navigate to the project folder:

   ```
   cd smart-weather-dashboard
   ```

3. Get your API key from OpenWeatherMap.

4. Replace the API key in `script.js`:

   ```js
   const API_KEY = "your_api_key_here";
   ```

5. Open `index.html` in your browser.

---

## 💡 Future Enhancements

* 📍 Auto-detect user location
* 🌙 Dark mode toggle
* 📊 Weather charts & analytics
* 🔔 Alerts for extreme weather

---

## 🤝 Contribution

Feel free to fork this project and improve it. Pull requests are welcome!

---

## 📜 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

**Yatharth Jaiswal**

---

⭐ If you like this project, don’t forget to give it a star!
