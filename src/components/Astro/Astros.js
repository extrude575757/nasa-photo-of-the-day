import React,{useState, useEffect } from "react";
import axios from "axios";
import Astro from "./Astro";



const Astros = () =>{
    const [nasaPhotos,setNasaPhotos] = useState([]);

    const reUrl = ["https://api.nasa.gov/planetary/apod?api_key=7MH99v254pwUt83ewWyggb86uQjDcbUCJrAzM2xf&hd=false&start_date=2020-02-01&end_date=2020-02-01","https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&hd=false&start_date=2020-02-01&end_date=2020-02-03"] ;
    // let url = reUlr[1];
    useEffect(() =>{
        axios.get(reUrl[0])
        .then((re) =>{
            console.log(re.data[0].title);
            setNasaPhotos(re.data[0]);
        })
        .catch((er) =>{
            console.log(er);
        })
    }, []);
    // useEffect(effectFn,[]);

    return (
        <div>
            <Astro key={nasaPhotos} props={nasaPhotos} />
        </div>
    );
};

export default Astros;