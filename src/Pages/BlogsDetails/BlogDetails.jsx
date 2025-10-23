import { Loader } from '@react-three/drei';
import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import './blogDeatils.css'

const BlogDetails = () => {

    let paramet = useParams();
    let blogAPI =  import.meta.env.VITE_BLOG_API;
    let blogDetail = useFetch(`${blogAPI}${paramet.slug}`);
    let loader = blogDetail.loader;
    let error = blogDetail.error;
    let blogData = blogDetail.data;

  return (
   <>
   {
    loader ? <Loader/> : error ?  (<p>details are not fetched</p> ):
    
    <div className='flex flex-col justify-left items-start m-auto py-[100px] max-w-[1280px] w-full'>
      <BreadCrumbs anColor='text-[#000000]'/>
      <h1 className="font-primary gt-tab:text-[50px]/[60px] tab:text-[45px]/[50px] text-[38px]/[42px] font-[200]">{blogData.blog_title}</h1>
      <img className = {`h-[800px] object-cover w-full py-[50px] object-center`} src={blogData.blog_inside_img}/>
      <p className="blogDesc" dangerouslySetInnerHTML={{ __html: blogData.blog_content }}/>
    </div>
    
   }
   </>
  )
}

export default BlogDetails