import React from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs'
import spotlightImg from '../../assets/BlogPage/blogSpot.png'

const MainSpot = () => {
  return (

    
        <div className=" about_spotlight_bg bg-center bg-cover bg-no-repeat w-full desktop:h-[90vh] gt-tab:h-[90vh] tab:h-[60vh] h-[65vh] flex relative "
            style={{ backgroundImage: `url(${spotlightImg})` }}>

            <div className="container_layout m-auto flex justify-center items-center flex-col  ">
            <BreadCrumbs/>
            <h1 className="font-primary tab:text-[120px]/[130px] text-[65px]/[70px] font-[100] text-white mt-[10px] relative z-[99] " >Blogs</h1>
            </div>

        </div>
      
  )
}

export default MainSpot