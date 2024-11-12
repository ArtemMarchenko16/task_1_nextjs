import React from 'react';
import {IPost} from "@/app/models/IPost";
import {getDataFromAPI} from "@/app/services/api.service";

type Params = {
    id: string
}

const Page = async ({params}: {params: Params}) => {

    const post: IPost = await getDataFromAPI.posts.postById(params.id)

    return (
        <div>
            <div>id: {post.id}</div>
            <div>title: {post.title}</div>
            <div>body: {post.body}</div>
        </div>
    );
};

export default Page;