
import React,{useState} from "react";
import {altTxt} from "../../Globals";
import ReactDOM from 'react-dom';
import Vplayer from "../Vid/Vplayer";


const Astro = ({props}) => {
  // const title = props.film.title
  // const film = props.film
  // const { film } = props

  /* Props --> "Properties of our component"

  There are a couple ways of accessing prop values. All are valid and you'll find different
  examples of these online & in future jobs.
  1. Props as a param (MovieCard = props => {}). Any reference of inner value would be with props.key 
  2. create const with key/value pair in props: const film = props.film
  3. use object destructuring to create const of key/value pair: const { film } = props
  NOTE ^^^ the name of the const needs to be the same name of key in props object
  4. use object destructuring in parameters: MovieCard = ({ film }) => {}
  */

//   const { title, description, director, release_date } = film;
//   return (
//     <div className="film-list">
//       <h2>{title}</h2>
//       <p>{description}</p>
//       <div className="bottom">
//         <p>{director}</p>
//         <p>{release_date}</p>
//       </div>
//     </div>
//   );
// };

        // const data = props;
const [vPlay,setVplayer] = useState(false);
        setVplayer(true);
        const title = props.title;
        const description = props.explanation;
        const url = props.url;
        const date = props.date;

          // TODO animate the Loading... words
        if (!props.url) return <h3>Loading...</h3>; 
        else{
        return (
            <div className="card">
              <h2 >What{title}</h2>
              <p className="card-info">{description}</p>
              <div>
                vPlay ? <Vplayer /> :  <img src={url} alt={altTxt}/>
                <p>{date}</p>
              </div>
            </div>
          );
        }
};

export default Astro;