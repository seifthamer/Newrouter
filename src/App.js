import './App.css';
import INav from './components/navigation/INav';
import { useState } from 'react';
import MoviesListe from './components/moviesliste/MoviesListe'
import { v4 as uuidv4 } from 'uuid';
import Filter from './components/filter/Filter';
import Add from './components/add/Add'
import { Route,Routes } from 'react-router';
import Description from './components/description/Description'
function App() {
  const [movies,setMovies]=useState([
  {
    id : uuidv4(),
    Image : "https://th.bing.com/th/id/R.b537d33d49a4e202b7f4aa4e42c07c66?rik=fsApJ7aVzlmM6g&pid=ImgRaw&r=0",
    Title :'Prison Break',
    Description : "Prison Break est une série américaine diffusée en France depuis 2006. Synopsis : Lincoln Burrows, accusé du meurtre du frère de la vice-présidente des Etats-Unis est placé dans la prison d'État de Fox Riven, prêt à être exécuté. Son frère, Michael Scofield, convaincu de son innocence, décide de l'aider.",
    Rate : 5,
    trailer :"https://www.youtube.com/embed/der8A7Z9u7c"
  },
  {
    id : uuidv4(),
    Image : "https://th.bing.com/th/id/R.0c6ea5eab1c1fe08bc820f03763782a7?rik=iogcqg6sL4QVwQ&riu=http%3a%2f%2fwww.filmforlife.org%2fwp-content%2fuploads%2f2014%2f09%2fbreaking-bad.png&ehk=nfCUyEt5zSVf6vLj%2fGSMIaSN4Tcq5r5eCJBG3U4L9ag%3d&risl=&pid=ImgRaw&r=0",
    Title :'Breaking Bad',
    Description : "La série se concentre sur Walter White, un professeur de chimie surqualifié et père de famille, qui, ayant appris qu'il est atteint d'un cancer du poumon en phase terminale, sombre dans le crime pour assurer l'avenir financier de sa famille.",
    Rate : 5 ,
    trailer : "https://www.youtube.com/embed/ceqOTZnhgY8" 
  },
  {
    
    id : uuidv4(),
    Image :"https://image.tmdb.org/t/p/original/6fzVz6c5hTk7lxUs8cXK1uJaiBx.jpg",
    Title :'Narcos',
    Description :"Cette série de gangsters inspirée de l'histoire du célèbre narcotrafiquant de Medellín raconte la guerre sanglante des cartels en Colombie , et comment ventre la drog.",
    Rate : 5,
    trailer : "https://www.youtube.com/embed/xl8zdCY-abw" 
  },
  {
    
    id : uuidv4(),
    Image :"https://i0.wp.com/scriiipt.com/wp-content/uploads/2020/11/peaky-blinders.jpg?fit=960%2C504&ssl=1",
    Title :'Peaky Blinders',
    Description :"En 1919, à Birmingham, soldats, révolutionnaires politiques et criminels combattent pour se faire une place dans le paysage industriel de l'après-Guerre.",
    Rate : 5,
    trailer : "https://www.youtube.com/embed/oVzVdvGIC7U" 
  },
  {
    
    id : uuidv4(),
    Image :"https://th.bing.com/th/id/OIP.eleJ0EbMtokiz2MzJp9P8QHaD4?pid=ImgDet&rs=1",
    Title :'The Good Doctor',
    Description :"Shaun Murphy est un jeune docteur autiste savant. Atteint du syndrome d'Asperger, il est doté d'une très grande intelligence, mais a également beaucoup de difficultés à communiquer et à gérer les interactions sociales.",
    Rate : 4,
    trailer : "https://www.youtube.com/embed/3om3dY_50nQ" 
  },
  {
    
    id : uuidv4(),
    Image :"https://cdn.shopify.com/s/files/1/0269/4538/8591/articles/ragnar-lothbrok_1200x.png?v=1649934012",
    Title :'Vinking',
    Description :"Ragnar Lodbrok, un jeune guerrier viking, est avide d'aventures et de nouvelles conquêtes. Lassé des pillages sur les terres de l'Est, il se met en tête d'explorer l'Ouest par la mer.Et envahir Angleterre ",
    Rate : 4,
    trailer : "https://www.youtube.com/embed/9GgxinPwAGc" 
  },
  {
    
    id : uuidv4(),
    Image :"https://journaldulam.sd.ac-dijon.fr/wp-content/uploads/sites/99/2021/11/squid-game.jpg",
    Title :'Squide Game ',
    Description :"A story of people who fail at life for various reasons, but suddenly receive a mysterious invitation to participate in a survival game to win more than 38 million US dollars. The game takes place at an isolated island and the participants are locked up until there is a final winner.",
    Rate : 4,
    trailer : "https://www.youtube.com/embed/oqxAJKy0ii4" 
  },
  {
    
    id : uuidv4(),
    Image :"https://cdn.psychologytoday.com/sites/default/files/styles/og_image/public/field_blog_entry_teaser_image/2017-06/13-reasons-why-netflix-01-1200x800.jpg?itok=PWVFvcpv",
    Title :'13 Reason Why ',
    Description :"Inspirée des best-sellers de Jay Asher, 13 Reasons Why suit Clay Jensen, un adolescent qui découvre sous son porche au retour du lycée une mystérieuse boîte portant son nom. À l'intérieur, des cassettes enregistrées par Hannah Baker",
    Rate : 4,
    trailer : "https://www.youtube.com/embed/QkT-HIMSrRk" 
  },
  {
    
    id : uuidv4(),
    Image :"https://th.bing.com/th/id/R.958631f5c7a441059fab179e59ff87af?rik=Wo2zSKSQ%2fM4Fgg&pid=ImgRaw&r=0",
    Title :'Lucifer ',
    Description :"Lassé et mécontent de sa position de (Seigneur des Enfers), Lucifer Morningstar démissionne et abandonne le trône de son royaume pour la bouillonnante et non moins impure Los Angeles.",
    Rate : 3,
    trailer : "https://www.youtube.com/embed/ueMwVGBwqRo" 
  },
  {
    
    id : uuidv4(),
    Image :"https://th.bing.com/th/id/R.17b8b984910d714cf70c574eae942545?rik=tS6Y%2frueiJ1RDA&pid=ImgRaw&r=0",
    Title :'Casa De Papel ',
    Description :"Huit voleurs font une prise d'otages dans la Maison royale de la Monnaie d'Espagne, tandis qu'un génie du crime manipule la police pour mettre son plan à exécution.",
    Rate : 3,
    trailer : "https://www.youtube.com/embed/_InqQJRqGW4" 
  },
  {
    
    id : uuidv4(),
    Image :"https://www.tvqc.com/wp-content/uploads/2018/11/Narcos.jpeg",
    Title :'Narcos Mexico ',
    Description :" La série explore les origines de la guerre de la drogue au Mexique en nous faisant découvrir l'époque où le monde du trafic de drogue mexicain était une confédération lâche et désorganisée composé uniquement de producteurs et de négociants indépendants.",
    Rate : 3,
    trailer : "https://www.youtube.com/embed/BoDrQ8JktVg" 
  },
  {
    
    id : uuidv4(),
    Image :"https://popculturetimes.com/wp-content/uploads/2020/03/elite.jpg",
    Title :'Elite ',
    Description :"La série se déroule à Las Encinas, un lycée fictif où l'élite espagnol et du monde entier viennent étudier. L'intrigue se concentre autour de trois étudiants de classe ouvrière inscrits à l'école dans le cadre d'un programme de bourses d'études et leurs riches camarades de classe.",
    Rate : 3,
    trailer : "https://www.youtube.com/embed/fpnGn91WVqg" 
    
  }

  
])

  const [search,setSearch]=useState('')
  const [rating,setRating]=useState(1);


  const ToggleSearch =(text)=>{
    setSearch(text)
  
  }
  const rateMov =(num)=>{
    setRating(num)
  }
  const addNewMovie = (newMovie) => {
    setMovies([...movies,newMovie])
  }
  const deleteMovie = (id)=>{
    const AfterDelete= movies.filter(e=>e.id!==id)
    setMovies(AfterDelete)
  }

  return (
    <div className="App">
        <INav ToggleSearch={ToggleSearch}></INav>
      <Routes>
        <Route path='/' element={<div>
        <Filter rateMov={rateMov} ></Filter>
        <Add addNewMovie={addNewMovie}></Add>
        <MoviesListe movies={movies.filter(e=>e.Title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) && e.Rate>=rating )} deleteMovie={deleteMovie}></MoviesListe>
      </div>}></Route>
      <Route path='/Description/:id' element={<Description movies={movies}></Description>}></Route>
      </Routes>
      
      
    </div>
  );
}

export default App;