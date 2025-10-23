import React, { useState } from 'react'
import useFetch from '../../../hooks/useFetch';
import Loader from '../../Loader/SkeletonLoader';
import BlogCard from './BlogCard'

const BlogCardListing = ({value}) => {

  let blogapi = import.meta.env.VITE_BLOG_API;
  let blogList = useFetch(blogapi)
  
  let loader = blogList.loader;
  let error = blogList.error;
  let blogData = blogList.data;
 
  


  return(
    <div className={`flex flex-row flex-wrap gap-[25px] m-auto  w-full`}>
        {
            loader ? <Loader/> : error ? (<p>Error in fecthing Data something went wrong</p>) : 
            blogData.filter((dataFil) => value === "" ? blogData : dataFil.blog_category === value).map((elem)=>
                <BlogCard 
                key={elem.blog_id}           
                id = {elem.blog_id}
                slug = {elem.blog_slug}
                name = {elem.blog_title}
                featImg = {elem.blog_feat_img}
                urlToblog = {elem.blog_slug}
                boxWidth ='w-[48%]'
                blogTags= {elem.blog_tags}
                blogCat= {elem.blog_category}
                />

            )
        }
    </div>
  )
}

export default BlogCardListing