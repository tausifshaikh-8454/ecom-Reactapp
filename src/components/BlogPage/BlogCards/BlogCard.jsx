import React from 'react'
import placeholderImg from '../../../assets/placeholder_img.png'
import { Link, Links } from 'react-router-dom'
import Button from '../../FormComp/Button'
import './Blogcard.css'
import { BsArrowRight } from 'react-icons/bs'

const BlogCard = ({
    id,
    slug,
    name = "Blog Name",
    // featImg = "https://www.tintaccessories.com/wp-content/uploads/2024/01/MagPop-JPEG-1024x1024.jpg",
    featImg = { placeholderImg },
    boxWidth = "w-full",
    urlToblog,
    blogCat = "mobile",
    publishedDate = "10-aug-2025",
    blogTags = 'blogs'
    


}) => {
    return (

        
            <div className = {`blog-card ${boxWidth} relative flex flex-row gap-[20px] border-1 border-[#DDDDDD] h-[300px] rounded-[10px] pr-[10px]`}>
                <div className="w-[45%] overflow-hidden">
                    <img
                    // src="https://www.tintaccessories.com/wp-content/uploads/2024/01/MagPop-JPEG-1024x1024.jpg"
                    src={featImg}
                    alt="prod-img"
                    className='h-auto object-center object-cover'
                />
                </div>
                <div className="texts flex flex-col align-middle justify-center w-[50%]">
                    <p className={`font-[outfit] text-[14px]/[20px] w-fit bg-[#E3F0FF] py-[10px] px-[10px]`}>{blogTags}</p>
                    <h4 className={`font-[outfit] text-[20px]/[28px] py-[10px]`}>{name}</h4>
                    {/* <h3 className='font-[outfit] text-[16px]/[24px] pb-[20px]' >{blogCat}</h3> */}
                    <Link className='w-fit' to={`/blogs/${urlToblog}`} ><div className={`cta flex flex-row gap-[10px] item-center content-center`}><p className={`font-[outfit] text-[16px]/[20px]`}>Learn more</p><BsArrowRight className='mt-[05px]'/></div></Link>
                </div>
            </div>
        
    )
}

export default BlogCard