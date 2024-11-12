import React from 'react';
import {IPost} from "@/app/models/IPost";
import {getDataFromAPI} from "@/app/services/api.service";
import Link from "next/link";

const Page = async () => {

    const posts: IPost[] = await getDataFromAPI.posts.getPosts()

    return (
        <div>
            {
                posts.map((post) => (<div key={post.id}><Link href={"/posts/" + post.id}>{post.title}</Link></div>))
            }
        </div>
    );
};

export default Page;