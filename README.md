# Todo App

A clean and modern multi-project Todo application built with vanilla JavaScript and Webpack.

## ✨ Features

- **Multiple Projects** – Organize your tasks into separate projects
- **Rich Todo Items** – Title, description, due date, and priority
- **Overdue Detection** – Automatically detects and marks expired tasks
- **Dark & Light Mode** – Theme toggle with saved preference
- **Persistent Storage** – All data is automatically saved to LocalStorage
- **Clean and Intuitive Interface**

## 🛠 Technologies Used

- Vanilla JavaScript (ES6+ Modules)
- Webpack (Module Bundler)
- date-fns (Date handling)
- CSS Custom Properties

## 📁 Project Structure

todo-app/
├── src/
│   ├── model/
│   │   ├── appModel.js
│   │   ├── project.js
│   │   └── todo.js
│   ├── controller/
│   │   └── appController.js
│   ├── ui/
│   │   ├── todoView.js
│   │   └── projectsView.js
│   |── storage/
│   |    └── storageService.js
|   └── styles.css
├── dist/
├── webpack.config.js
├── package.json
└── README.md

## How to Use

Create new projects to organize your tasks
Add todos with title, description, due date, and priority
Mark tasks as complete by clicking on them
Switch between Dark and Light mode using the toggle button
All your data is automatically saved

## About
This project was created by Roman Suslov as part of The Odin Project curriculum.