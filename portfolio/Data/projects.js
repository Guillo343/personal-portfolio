// data/projects.js
import aromaHogar from '../public/images/projects/AromaHogar.png'
import countryGuide from '../public/images/projects/CountryGuide.png'
import portfolio from '../public/images/projects/Portfolio.png'
import weather from '../public/images/projects/Weather.png'

export const projectsData = [
    {
      id: 1,
      title: "Aroma de Hogar",
      description: "A beautifully designed restaurant website that provides location details, menu highlights, and contact information. Features an embedded Google Maps API to help users find the restaurant easily.",
      image: aromaHogar,
      tags: ["Html", "Javascript", "Css"],
      category: "Web App",
      sourceCode: "https://github.com/Guillo343/Restaurant-project",
      liveDemo: "https://aroma-de-hogar.netlify.app//",
      featured: true
    },
    {
      id: 2,
      title: "Country Guide",
      description: "An interactive web app that allows users to explore country information, including population, capital, and regional data. Built with React and integrated with a public API to fetch real-time country details.",
      image: countryGuide,
      tags: ["React", "Material UI", "Google Maps API", "RapidAPI"],
      category: "Web App",
      sourceCode: "https://github.com/Guillo343/CountriesApp",
      liveDemo: "https://countryguideme.netlify.app/",
      featured: true
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my projects, skills, and professional experience with interactive elements and animations.",
      image: portfolio,
      tags: ["React", "Framer Motion", "Three.js", "Tailwind CSS"],
      category: "Website",
      sourceCode: "https://github.com/Guillo343/personal-portfolio",
      liveDemo: "https://weather-mini-project.netlify.app/",
      featured: false
    },
    {
      id: 4,
      title: "Weather Forecast App",
      description: "A weather forecast application providing current weather conditions and 5-day forecasts with dynamic backgrounds based on weather conditions.",
      image: weather,
      tags: ["React", "OpenWeather API", "CSS", "Axios"],
      category: "Web App",
      sourceCode: "https://github.com/Guillo343/Weather-mini-project",
      liveDemo: "https://weather-forecast-app.netlify.app/",
      featured: false
    }
  ];
  
  export const categories = [
    "All",
    "Web App",
    "Website",
    "Mobile App",
    "UI/UX"
  ];