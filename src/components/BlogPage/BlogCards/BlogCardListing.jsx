import React from 'react'
import useFetch from '../../../hooks/useFetch';
import Loader from '../../Loader/SkeletonLoader';
import BlogCard from './BlogCard'

const BlogCardListing = () => {

  let blogapi = import.meta.env.VITE_BLOG_API;
  let blogList = useFetch(blogapi)
  
  let loader = blogList.loader;
  let error = blogList.error;
  let blogData = blogList.data;
  



  return(
    <div className={`flex flex-row flex-wrap gap-[30px] justify-center m-auto  w-full px-[20px]`}>
        {
            loader ? <Loader/> : error ? (<p>Error in fecthing Data something went wrong</p>) : 
            blogData.map((elem)=>
                <BlogCard 
                key={elem.blog_id}           
                id = {elem.blog_id}
                slug = {elem.blog_slug}
                name = {elem.blog_title}
                featImg = {elem.blog_feat_img}
                urlToblog = {elem.blog_slug}
                boxWidth ='w-[45%]'
                blogTags= {elem.blog_tags}
                blogCat= {elem.blog_category}
                />

            )
        }
    </div>
  )
}

export default BlogCardListing