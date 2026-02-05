# Project Overview: Master Portfolio

A clean, beautiful, responsive, and 100% customizable portfolio template for software developers. This project is a React-based application designed to showcase a developer's skills, experience, education, and projects.

## Main Technologies

- **Frontend:** React (v18.2), React Router (v5), React Reveal (animations)
- **Build Tool:** Vite
- **Styling:** Styled Components, Base UI, Bootstrap, Sass (Dart Sass)
- **Charts:** Chart.js, React-Chartjs-2
- **Data Fetching:** Apollo Client, GraphQL (for GitHub integration)
- **Deployment:** GH-Pages

## Architecture

The project follows a **Container-Component pattern**:

- **`src/pages/`**: High-level page components (Home, Education, Experience, etc.).
- **`src/containers/`**: Larger functional blocks that compose pages.
- **`src/components/`**: Reusable UI elements (Buttons, Cards, Header, Footer).
- **`src/portfolio.js`**: The central configuration file for all personal data and content.
- **`src/shared/`**: JSON files containing supplementary data for open-source activities and experiences.

---

## Building and Running

### Prerequisites

- Node.js (Current LTS recommended).

### Key Commands

- **Install Dependencies:** `npm install --legacy-peer-deps` (needed for legacy animation libraries)
- **Start Development Server:** `npm start` or `npm run dev`
- **Build for Production:** `npm run build`
- **Deploy to GitHub Pages:** `npm run deploy`

---

## Development Conventions

### Content Customization

The primary way to update the portfolio is by editing **`src/portfolio.js`**. This file contains:

- SEO settings
- Social media links
- Skills and software proficiencies
- Education and certifications
- Work experience and projects

### Styling and Themes

- **Themes:** Configured in `src/theme.js`. You can switch or customize themes here.
- **Global Styles:** Defined in `src/global.js`.
- **Component Styling:** Uses a mix of Styled Components and CSS/SCSS modules.

### Code Quality

- **Formatting:** The project uses **Prettier** for consistent code formatting.
- **Git Hooks:** **Husky** and **lint-staged** are configured to run Prettier on changed files during pre-commit.
- **Conventions:** Follow the existing Container-Component structure when adding new features or sections.
