import React from 'react'
import { useStateContext } from '../context'
import { useState,useEffect } from 'react'

import clear from '../assets/images/clear.jpg'
import cloudy from '../assets/images/cloudy.jpg'
import fog from '../assets/images/fog.png'

import Rainy_day from '../assets/images/Rainy_day.jpg'

import snow from '../assets/images/snow.jpg'

import strom from '../assets/images/strom.jpg'
import sunny from '../assets/images/sunny.jpg'


const BackgroundLayout=()=> {

    const {weather} =useStateContext()
    // console.log(weather)
    const[image,setImage]=useState(clear)
    console.log(clear)

    useEffect(()=>{
        if(weather.conditions){
            let imageString=weather.conditions
            if(imageString.toLowerCase().includes('clear')){
                setImage(clear);
            }
           else if(imageString.toLowerCase().includes('cloud')){
                setImage(cloudy);
            }
            else if(imageString.toLowerCase().includes('rain') ||imageString.toLowerCase().includes('shower')){
                setImage(Rainy_day);
            }
            else if(imageString.toLowerCase().includes('snow')){
                setImage(snow);
            }
            else if(imageString.toLowerCase().includes('thunder') ||imageString.toLowerCase().includes('strom')){
                setImage(strom);
            }
            else if(imageString.toLowerCase().includes('fog')){
                setImage(fog);
            }
            else if(imageString.toLowerCase().includes('sky') ||imageString.toLowerCase().includes('strom')){
                setImage(sunny);
            }
            else{
                setImage(sunny);
            }
        }
    },[weather])




  return (
   <img src={image} alt="weather_image" className='h-screen w-full fixed left-0 top-0 -z-[10]' />
  )
}

export default BackgroundLayout