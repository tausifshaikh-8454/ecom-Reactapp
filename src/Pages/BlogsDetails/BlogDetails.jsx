import { Loader } from '@react-three/drei';
import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';

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
    
    <div>test</div>
    
   }
   </>
  )
}

export default BlogDetails