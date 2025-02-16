import React from 'react'
import homify from "../../public/homify.jpg"
import html from "../../public/html.png"
import css from "../../public/css.jpg"
import javascript from "../../public/javascript.png"
import react from "../../public/reactjs.png"
import node from "../../public/node.png"
import express from "../../public/express.png"
import mongo from "../../public/mongodb.jpg"
import java from "../../public/java.png"
import spring from "../../public/spring.png"
import python from "../../public/python.webp"
import oracle from "../../public/oracle.png"





function Skills() {
   const cardItems= [
       {
           id:1,
           logo:html,
           names:"Html"
       },
       {
           id:2,
           logo:css,
           names:"CSS"
       },
       {
           id:3,
           logo:javascript,
           names:"JavaScript "
       },
       {
           id:4,
           logo:react,
           names:"React "
       },
       {
           id:5,
           logo:node,
           names:"NodeJs"
       },
       {
           id:6,
           logo:express,
           names:"Express "
       },
       {
        id:7,
        logo:mongo,
        names:"MongoDb "
    }, {
      id:8,
      logo:java,
      names:"Java"
  }, {
    id:9,
    logo:spring,
    names:"SpringBoot "
}, {
  id:10,
  logo:oracle,
  names:"Oracle "
}, {
  id:11,
  logo:python,
  names:"Python "
} 
   ]
 return (
   <> 
<div name="Skills" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
<div >
   <h1 className='text-3xl font-bold mb-5'>Skills</h1>
   <p className='underline font-semibold'>These Skill I Learned-</p>
</div>
  <div className='grid grid-cols-2 md:grid-cols-4 gap-6 my-3'>
   {
   cardItems.map(({id,logo,names})=>(
       <div className='flex flex-col items-center border-[2px] rounded-full md:w-[200px] md:-h-[200px] p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
         <img src={logo} className="w-[150px] p-1 rounded-full" alt="" />  
         <div>
           <div className='font-bold'>{names}</div>
          </div>
         
       </div>
   ))

  }
  </div>

   </div>

   </>
 )
}

export default Skills
