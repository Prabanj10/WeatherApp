# Weather Dashboard

A responsive weather dashboard built with **React.js**, utilizing the **OpenWeather API** for real-time weather updates. The application supports **Redux Toolkit** for state management, **Redux Persist** for retaining data across page refreshes, and **CSS Modules** for styling.

## 🚀 Features
- 🌍 **Search by City**: Enter a city name to get real-time weather details.
- 🌡 **Temperature in Celsius**: Converts temperature from Kelvin to Celsius.
- 🔄 **Auto-Refreshing Data**: Uses polling to update weather every 30 seconds.
- ⚠️ **Error Handling**: Gracefully handles invalid city names and network errors.
- 🎨 **Modern UI**: Styled with **CSS Modules**.
- 💾 **Persistent State**: Uses **Redux Persist** to store the last searched city and weather data even after a page refresh.

---

## 🛠️ Installation & Setup

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/prabanj10/WeatherApp.git
```

### 2️⃣ **Install Dependencies**
```sh
npm install
```

### 3️⃣ **Set Up Environment Variables**
Create a **.env** file in the root directory and add your **OpenWeather API Key**:
```sh
VITE_API_KEY=your_openweather_api_key_here
```

### 4️⃣ **Start the Development Server**
```sh
npm run dev
```
The app will be available at **http://localhost:5173**.

---

## 📌 Usage Guide
### 🌍 **Search for Weather**
1. Type a city name in the search bar.
2. Click the **Search** button.
3. View real-time weather details.

### ⏳ **Auto Refresh**
- Weather data **auto-updates** every **30 seconds**.
- Uses `setInterval()` inside `useEffect()` for polling.

### 🛑 **Error Handling**
- If the city is **not found**, an error message is displayed.
- If there’s a **network issue**, the error message is displayed.

### 💾 **Persistent State**
- **Redux Persist** ensures that the last searched city and weather data remain available even after refreshing the page.

---

## 📦 Built With
- ⚛ **React.js** – Frontend UI
- 🎯 **Redux Toolkit** – Global state management
- 💾 **Redux Persist** – State persistence across refreshes
- 🎨 **CSS Modules** – Component styling
- 🌍 **OpenWeather API** – Weather data provider

---

## 🚀 Deployment
To deploy the app, run:
```sh
npm run build
```
Then, deploy the `dist` folder to **Netlify, Vercel, or GitHub Pages**.
