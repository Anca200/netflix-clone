import React, { useEffect, useState } from 'react';
import requests from "../Request";
import axios from 'axios';
import { FaStar } from "react-icons/fa";



const Hero = () => {
    const [movies, setMovies] = useState([]);

    const ReadMore = ({children}) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
            setIsReadMore(!isReadMore);
        }
        return (
          <>
            <p>{isReadMore ? text?.slice(0,100)+ "..." : text }</p>
            <span  className="cursor-pointer text-gray-400 " 
            onClick={toggleReadMore}> {isReadMore ? "Read more" : "Show less..."}</span>
          </>
        )
    }

    const movie = movies[Math.floor(Math.random() * movies.length)]
   

    useEffect(() =>{
     axios.get(requests.requestPopular).then((res) =>{
        setMovies(res.data.results)
     })
    }, [])

  return (
    <>
     <div className='w-full h-[650px]  text-white'>
        <div className='w-full h-full'>
        <div className='absolute w-full h-[650px] bg-gradient-to-r from-black'></div>
            <img 
            className='w-full h-full object-cover'
             src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}/>

             <div className='absolute w-full top-[20%] p-4 md:p-8'>
                <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
             <div className='my-4'>
               <p className='flex items-center gap-[5px] py-2 px-5'>
                <FaStar className='text-yellow-500'/>
               {Math.round(movie?.vote_average * 100)/100}</p>
               <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>
              Play
            </button>
               <button className='border text-white border-gray-300 py-2 px-5 ml-4'>
              Watch Later
            </button>
             </div>
             <p className='text-gray-400 text-sm'>Released: {movie?.release_date}</p>
             <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 py-2'>
          <ReadMore>
          {(movie?.overview)}
          </ReadMore>
          </p>
             </div>
            
        </div>
     </div>
    </>
  )
}

export default Hero
