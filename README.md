# Brasa Website

A modern, responsive website built with React and Tailwind CSS.

## Features

- 🎨 Modern design with Tailwind CSS
- 📱 Fully responsive layout
- ⚡ Fast and optimized performance
- 🎯 Clean and semantic HTML structure
- 🔧 Easy to customize and extend

## Sections

- **Navigation**: Clean header with smooth scrolling navigation
- **Hero**: Eye-catching landing section with call-to-action
- **About**: Company information with feature highlights
- **Services**: Service offerings with interactive cards
- **Contact**: Contact form for lead generation
- **Footer**: Comprehensive footer with links and information

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Brasa_Website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Technologies Used

- **React** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Create React App** - Development environment
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## Project Structure

```
src/
├── App.js          # Main application component
├── index.js        # Application entry point
├── index.css       # Global styles with Tailwind directives
└── logo.svg        # React logo (unused in current version)

public/
├── index.html      # HTML template
└── favicon.ico     # Site favicon

tailwind.config.js  # Tailwind CSS configuration
postcss.config.js   # PostCSS configuration
```

## Customization

### Colors
The website uses a blue/indigo color scheme. You can customize colors by modifying the Tailwind classes in `App.js` or extending the theme in `tailwind.config.js`.

### Content
Update the content in `App.js` to match your business needs. The component is well-structured and easy to modify.

### Styling
All styling is done with Tailwind CSS utility classes. Refer to the [Tailwind CSS documentation](https://tailwindcss.com/docs) for available classes and customization options.

## Deployment

To build the project for production:

```bash
npm run build
```

This creates a `build` folder with optimized production files that can be deployed to any static hosting service.

## License

This project is open source and available under the [MIT License](LICENSE).
