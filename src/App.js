import './App.css';
import Head from './component/site/site';
import Fullstack from './component/fullstack/full';
import All  from './component/all/all.js';
import Data from './component/datascience/data.js';
import Cyber from './component/cyber/cyber.js';
import Career from './component/career/career.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './component/footer/footer.js';

const full = [
  {
    id: '1',
    img: 'https://th.bing.com/th/id/OIP.8kWjbrohEAjQOXmzCgXuhgHaEo?w=279&h=180&c=7&r=0&o=5&dpr=1.8&pid=1.7',
    title: 'Top Ways to Assess Soft Skills in Full Stack Developers in 2023',
    info: 'When you’re hiring a full-stack developer, what are the most important things you look for?',
    date: '15 November 2023 ',
  },
  {
    id: '2',
    img: 'https://th.bing.com/th/id/OIP.rlQjs_MVbbghE9UM9V-UgAHaEM?w=283&h=180&c=7&r=0&o=5&dpr=1.8&pid=1.7',
    title: 'Top Differences: Full Stack Developer vs Software Engineer 2023',
    info: 'A Full Stack Developer is a tech all-rounder. They work on both the front and',
    date: '15 November 2023 ',
  },
  {
    id: '3',
    img: 'https://th.bing.com/th/id/OIP.6NEqeSkxgEjYiHYUAkdZXwHaEK?w=270&h=180&c=7&r=0&o=5&dpr=1.8&pid=1.7',    
    title: 'Horizontal vs Vertical Scaling for Efficient System Design',
    info: 'In the world of system design, envision a digital skyscraper – a multifaceted structure built',
    date: '10 November 2023 ',
  },
]

const data = [
  {
    id: '1',
    img: 'https://th.bing.com/th/id/OIP.BgKZpZ0MgFZ-KuPp313z0AHaDt?w=327&h=175&c=7&r=0&o=5&dpr=1.8&pid=1.7',
    title: 'Top 10 High Paying Non-Coding Jobs in Data Science in 2023',
    info: 'Are you someone who’s not interested in coding, but wants to get placed in tech',
    date: '28 November 2023',
  },
  {
    id: '2',
    img: 'https://th.bing.com/th/id/OIP.IJaOVvKEEseucx63gHluIQHaDt?w=313&h=175&c=7&r=0&o=5&dpr=1.8&pid=1.7',
    title: 'Top 10 Data Science Tools in 2023',
    info: 'Data Science is an in-demand profession and will continue growing in the coming years. From',
    date: '1 November 2023',
  },
  {
    id: '3',
    img: 'https://th.bing.com/th/id/OIP.JQSiaA2WI93xFoybbMj4lAHaE7?w=233&h=180&c=7&r=0&o=5&dpr=1.8&pid=1.7',
    title: 'Best Data Science Books to Learn 2023',
    info: 'Today, we’re going to talk about something really cool: data science. It’s all about using',
    date: '26 October 2023',
  },
]

const cyber = [
  {
    id: '1',
    img: 'https://th.bing.com/th/id/OIP.iUKQDuiYnbHf9QTDV6v98wHaEK?w=306&h=180&c=7&r=0&o=5&dpr=1.8&pid=1.7',
    title: 'What Is Hacking? Types of Hacking & More',
    info: 'Have you ever wondered what hacking is all about? It’s a big deal in today’s',
    date: '25 September 2023 ',
  },
  {
    id: '2',
    img: 'https://th.bing.com/th/id/OIP.iUKQDuiYnbHf9QTDV6v98wHaEK?w=306&h=180&c=7&r=0&o=5&dpr=1.8&pid=1.7',
    title: 'Cybersecurity Vs Ethical Hacking: Top 10 Differences',
    info: 'Cybersecurity & Ethical hacking and have been key in making sure that your data online',
    date: '27 December 2022 ',
  },
  {
    id: '3',
    img: 'https://th.bing.com/th/id/OIP.iUKQDuiYnbHf9QTDV6v98wHaEK?w=306&h=180&c=7&r=0&o=5&dpr=1.8&pid=1.7',
    title: 'What is Cybersecurity? Importance and its uses & the growing challenges in 2023!',
    info: 'Look around today, you will witness that we are more reliant on technology and devices',
    date: '20 December 2022 ',
  },
]

const career = [
   {
    id: '1',
    img: 'https://th.bing.com/th/id/OIP.lYOU2GlTKEY4kb4912eTFgHaEs?w=268&h=180&c=7&r=0&o=5&dpr=1.8&pid=1.7',
    title: 'Top 5 Product-Based Companies That Don’t Require Coding',
    info: 'Every one of us wants to work in top product-based companies, Right? But, Not everyone',
    date: '24 November 2023 ',
   },
   {
    id: '2',
    img: 'https://th.bing.com/th/id/OIP.lYOU2GlTKEY4kb4912eTFgHaEs?w=268&h=180&c=7&r=0&o=5&dpr=1.8&pid=1.7',
    title: 'Machine Learning Engineer Resume Guide: 11 Important Things To Include!',
    info: 'The current technological era is full of competition and those who have profound skillset are',
    date: '23 November 2023 ',
   },
   {
    id: '3',
    img: 'https://th.bing.com/th/id/OIP.lYOU2GlTKEY4kb4912eTFgHaEs?w=268&h=180&c=7&r=0&o=5&dpr=1.8&pid=1.7',
    title: 'Mechanical Engineering Resume: 9 Important Things To Look Out For',
    info: 'With the development of technology, most of us started forgetting about mechanical engineering which pioneered',
    date: '22 November 2023',
   },
]

const all = [
  {
    id: '1',
    img: 'https://th.bing.com/th/id/OIP.IJaOVvKEEseucx63gHluIQHaDt?w=313&h=175&c=7&r=0&o=5&dpr=1.8&pid=1.7',
    title: 'Top 10 Data Science Tools in 2023',
    info: 'Data Science is an in-demand profession and will continue growing in the coming years. From',
    date: '1 November 2023',
  },
  {
    id: '2',
    img: 'https://th.bing.com/th/id/OIP.lYOU2GlTKEY4kb4912eTFgHaEs?w=268&h=180&c=7&r=0&o=5&dpr=1.8&pid=1.7',
    title: 'Top 5 Product-Based Companies That Don’t Require Coding',
    info: 'Every one of us wants to work in top product-based companies, Right? But, Not everyone',
    date: '24 November 2023 ',
   },
   {
    id: '3',
    img: 'https://th.bing.com/th/id/OIP.iUKQDuiYnbHf9QTDV6v98wHaEK?w=306&h=180&c=7&r=0&o=5&dpr=1.8&pid=1.7',
    title: 'What Is Hacking? Types of Hacking & More',
    info: 'Have you ever wondered what hacking is all about? It’s a big deal in today’s',
    date: '25 September 2023 ',
  },
  {
    id: '4',
    img: 'https://th.bing.com/th/id/OIP.rlQjs_MVbbghE9UM9V-UgAHaEM?w=283&h=180&c=7&r=0&o=5&dpr=1.8&pid=1.7',
    title: 'Top Differences: Full Stack Developer vs Software Engineer 2023',
    info: 'A Full Stack Developer is a tech all-rounder. They work on both the front and',
    date: '15 November 2023 ',
  },
  {
    id: '5',
    img: 'https://th.bing.com/th/id/OIP.BgKZpZ0MgFZ-KuPp313z0AHaDt?w=327&h=175&c=7&r=0&o=5&dpr=1.8&pid=1.7',
    title: 'Top 10 High Paying Non-Coding Jobs in Data Science in 2023',
    info: 'Are you someone who’s not interested in coding, but wants to get placed in tech',
    date: '28 November 2023',
  },
  {
    id: '6',
    img: 'https://th.bing.com/th/id/OIP.8kWjbrohEAjQOXmzCgXuhgHaEo?w=279&h=180&c=7&r=0&o=5&dpr=1.8&pid=1.7',
    title: 'Top Ways to Assess Soft Skills in Full Stack Developers in 2023',
    info: 'When you’re hiring a full-stack developer, what are the most important things you look for?',
    date: '15 November 2023 ',
  },
]
function App() {
  return (
   <BrowserRouter>
   <div>
    <Head />
    <Routes>
    <Route path='/' element={<All All={all} />} />
    <Route path='/fullstack' element={<Fullstack Full={full}/>} />
    <Route path='/data' element={<Data Data={data}/>} />
    <Route path='/cyber' element={<Cyber Cyber={cyber}/>} />
    <Route path='/career' element={<Career Career={career}/>} />
    </Routes>
    <Footer />
   </div>
   </BrowserRouter>
  );
}

export default App;
