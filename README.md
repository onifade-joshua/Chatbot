
# Chatbot Web App

This is a **WhatsApp-like web application** built using **React.js** and **Material-UI**, featuring:

- **Tabs-based Navigation** (Adverts, Bots, About Us)
- **Chat Interface for Bots**
- **Advert Management System**
- **Dark Mode Toggle**
- **Responsive UI for Mobile Devices**

---

## Installation & Setup

### Prerequisites
Ensure you have **Node.js** and **Yarn** installed on your machine.

### Clone the Repository
```sh
git clone git remote add origin https://github.com/onifade-joshua/Chatbot.git
cd chatbot-app
```

### Install Dependencies
```sh
yarn install
```

### Run the Development Server
```sh
yarn start
```

This will start the development server at `http://localhost:3000/`.

---

## Project Structure
```sh
📂 chatbot-app
├── 📂 src
│   ├── 📂 components
│   │   ├── Navbar.js
│   │   ├── Sidebar.js
│   ├── 📂 pages
│   │   ├── Advert.js
│   │   ├── ChatBot.js
│   │   ├── AboutUs.js
│   ├── 📂 context
│   │   ├── ThemeContext.js
│   ├── App.js
│   ├── index.js
├── 📄 package.json
├── 📄 README.md
```

---

## Features & Implementation

### 1. **Sidebar Navigation**
- Uses **Material-UI Tabs** for navigation.
- Provides hover effects and active tab styling.

### 2. **Chat Interface for Bots**
- Simulates a simple chatbot response.
- Displays user and bot messages in a structured layout.

### 3. **Advert Management**
- Placeholder for managing adverts in the app.

### 4. **Dark Mode Support**
- Implemented using React Context API.

### 5. **Responsive Design**
- Fully optimized for mobile devices using Material-UI.

---

## Deployment
To build the project for production, run:
```sh
yarn build
```
This will generate an optimized build in the `build/` directory.

For deployment, you can use platforms like **Vercel**, **Netlify**, or **GitHub Pages**.

---

## Contributing
Feel free to fork this repository and contribute by submitting a pull request!

---

## License
This project is licensed under the **MIT License**.

