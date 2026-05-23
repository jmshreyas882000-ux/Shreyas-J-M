# Shreyas J M Portfolio

A modern responsive portfolio website built with React and Vite, featuring glassmorphism design, smooth scroll navigation, dark/light theme toggle, project cards, and resume download support.

## Features
- Modern glassmorphism UI
- Sticky navigation bar
- Smooth scrolling between sections
- Dark and light mode toggle
- Resume download button
- Profile photo section
- Featured projects section
- Responsive design for mobile and desktop

## Tech Stack
- React
- Vite
- JavaScript
- CSS
- react-scroll

## Project Structure
```bash
shreyas-portfolio/
├─ public/
│  ├─ profile.jpg
│  └─ resume.pdf
├─ src/
│  ├─ App.jsx
│  ├─ App.css
│  ├─ main.jsx
│  └─ index.css
├─ package.json
├─ vite.config.js
└─ index.html
```

## Installation
1. Install Node.js and npm.
2. Clone this repository.
3. Open the project folder in a terminal.
4. Run:
```bash
npm install
npm install react-scroll
npm install gh-pages --save-dev
```

## Running Locally
```bash
npm run dev
```

Open the app in your browser at the local URL shown in the terminal, usually `http://localhost:5173/`.

## Build for Production
```bash
npm run build
```

## Deploy to GitHub Pages
```bash
npm run deploy
```

## Notes
- Put your resume in `public/resume.pdf`.
- Put your profile photo in `public/profile.jpg`.
- Update project demo and source links in `App.jsx`.
- Update `vite.config.js` with your GitHub repository name.
