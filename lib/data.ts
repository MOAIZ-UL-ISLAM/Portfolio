import Fitness from '../public/fitness-app.png'
import Admin from '../public/admin-dashboard.png'
import Recipie from '../public/recipie-app.png'

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const projectsData = [
  {
    title: "React Admin Dashboard",
    description:"An Admin Dasboard design project in order to keep Tract of Users",
    tags: ["React","SASS","MaterialUI", "ChartJS","Typescript"],
    imageUrl: Admin,
    githubUrl: "https://github.com/MOAIZ-UL-ISLAM/Dashboard_React_App",
    liveUrl: "https://thunderous-crepe-72ab6b.netlify.app/"
  },
  {
    title: "Fitness App",
    description:
      "An app that allows users to Keep Track of their Fitness and gives them different excercisess.",
    tags: ["React Native", "Expo", ],
    imageUrl: Fitness,
    githubUrl: "https://github.com/MOAIZ-UL-ISLAM/Fitness-app-reactNative",
    liveUrl: "#"
  },
  {
    title: "Recipie App",
    description:
      "A  web app to find quick Recipies ",
    tags: ["React","CSS"],
    imageUrl: Recipie,
    githubUrl: "https://github.com/MOAIZ-UL-ISLAM/Recipie-Finder",
    liveUrl: "https://preeminent-taffy-2e8903.netlify.app/"
  },
] as const;


