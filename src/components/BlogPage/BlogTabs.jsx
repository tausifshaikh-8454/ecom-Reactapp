import React from 'react'
import { Tabs } from "radix-ui";
import BlogCard from "./BlogCards/BlogCard"
import BlogCardListing from './BlogCards/BlogCardListing';



const BlogLists = () => {
    return (
        <div className="container_layout m-auto">
            <Tabs.Root
                className="TabsRoot prods_info_tabs max-w-[1400px] flex flex-col justify-center m-auto py-[50px]"
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

                <Tabs.Content className="TabsContent pt-[30px] " value="product-desc">

                    <BlogCardListing value="" />

                </Tabs.Content>

                <Tabs.Content className="TabsContent  pt-[30px] " value="specifications">

                    <BlogCardListing value="Mobile" />

                </Tabs.Content>

                <Tabs.Content className="TabsContent pt-[30px] " value="compatibility" >

                    <BlogCardListing value="Laptops" />

                </Tabs.Content>

            </Tabs.Root>
        </div>
    )
}

export default BlogLists