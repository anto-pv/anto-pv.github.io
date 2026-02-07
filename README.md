# Portfolio Website - Anto P V

A personal portfolio website built with React, showcasing projects, skills, and experiences.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher) - Currently using v20.14.0
- npm (v6 or higher) - Currently using v10.7.0

### Installation & Setup

1. **Clone the repository** (if not already done)
   ```bash
   git clone https://github.com/anto-pv/anto-pv.github.io.git
   cd anto-pv.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   The app will open automatically at [http://localhost:3000](http://localhost:3000)

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

## 📁 Project Structure

```
anto-pv.github.io/
├── public/                 # Static files
│   ├── index.html         # HTML template
│   └── ...
├── src/
│   ├── components/        # React components
│   │   ├── Navigation.js  # Header navigation
│   │   ├── ErrorBoundary.js # Error handling
│   │   └── sitemap.js     # Footer component
│   ├── data/              # Data and configuration
│   │   └── config.js     # Personal info, links, projects
│   ├── images/            # Image assets
│   │   ├── portfolio/     # Portfolio-related images
│   │   ├── projects/      # Project images
│   │   ├── skills/        # Skill icons
│   │   └── social/        # Social media icons
│   ├── style/             # SCSS stylesheets
│   │   ├── App.scss       # Main stylesheet
│   │   ├── _mixins.scss   # SCSS mixins
│   │   └── components/    # Component-specific styles
│   ├── utils/             # Utility functions
│   │   └── skillIcons.js # Skill icon mappings
│   ├── App.js             # Main App component
│   ├── Home.js            # Home page component
│   ├── Portfolio.js       # Portfolio page component
│   ├── Links.js           # Links page
│   ├── Posts.js           # Posts page
│   ├── About.js           # About page
│   └── index.js           # Entry point
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## 🛠️ Technologies Used

- **React** 17.0.2 - UI library
- **React Router DOM** 5.2.0 - Routing
- **React Router Hash Link** 2.4.3 - Hash-based navigation
- **Sass** 1.69.0 - CSS preprocessor (replaced deprecated node-sass)
- **React Toastify** 7.0.4 - Toast notifications
- **React Scripts** 4.0.3 - Build tooling

## 📝 Current Features

- **Home Page**: Minimal design with bio, social icons, and newsletter subscription
- **Portfolio Page**: Projects, Skills, and Experiences sections
- **Links Page**: All social media and contact links in one place
- **Navigation**: Clean header with logo and navigation links
- **Responsive Design**: Mobile and tablet friendly with constrained-width layout

## 🚀 Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch via GitHub Actions.

### Manual Deployment

If you need to deploy manually:
```bash
npm run build
npm run deploy
```

## 📄 License

Private project - All rights reserved
