import React from 'react'
import { Tabs } from "radix-ui";
import BlogCard from "../BlogCards/BlogCard"
import BlogCardListing from '../BlogCards/BlogCardListing';



const BlogLists = () => {
  return (
    <Tabs.Root
                        className="TabsRoot prods_info_tabs max-w-[1400px] m-auto py-[50px]"
                        defaultValue="product-desc" >
    
                        <Tabs.List
                            className="TabsList w-full  "
                            aria-label="Manage your account">
    
                            <Tabs.Trigger className="TabsTrigger w-[33%] py-[15px] font-primary text-[22px]/[28px] font-[500] text-black cursor-pointer  " value="product-desc" >
                                All Blogs
                            </Tabs.Trigger>
    
                            <Tabs.Trigger className="TabsTrigger w-[33%] py-[15px] font-primary text-[22px]/[28px] font-[500] text-black cursor-pointer " value="specifications" >
                               Mobile
                            </Tabs.Trigger>
    
                            <Tabs.Trigger className="TabsTrigger w-[33%] py-[15px] font-primary text-[22px]/[28px] font-[500] text-black cursor-pointer " value="compatibility" >
                                Laptops
                            </Tabs.Trigger>
    
                        </Tabs.List>
    
                        <Tabs.Content className="TabsContent px-[15px] pt-[30px] " value="product-desc">
                            {/* <p className="Text">
                                Make changes to your account here. Click save when you're done.
                            </p> */}
                            <BlogCardListing/>
    
                            {/* <p
                                className='Text text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] dang-cont'
                                dangerouslySetInnerHTML={{ __html: prod_description }}
                            /> */}
    
                        </Tabs.Content>
    
                        <Tabs.Content className="TabsContent px-[15px] pt-[30px] " value="specifications">
                            <p className="Text">
                                Change your password here. After saving, you'll be logged out.
                            </p>
    
                            {/* <p
                                className='Text text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] dang-cont'
                                dangerouslySetInnerHTML={{ __html: prod_specifications }}
                            /> */}
                        </Tabs.Content>
    
                        <Tabs.Content className="TabsContent px-[15px] pt-[30px] " value="compatibility" >
                            <p className="Text">
                                Change your password here. After saving, you'll be logged out. compatibility
                            </p>
    
                            {/* <p
                                className='Text text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] dang-cont'
                                dangerouslySetInnerHTML={{ __html: prod_compatibility }}
                            /> */}
                        </Tabs.Content>
    
            </Tabs.Root>
  )
}

export default BlogLists