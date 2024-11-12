import React from 'react';
import {IComment} from "@/app/models/IComment";
import {getDataFromAPI} from "@/app/services/api.service";
import Link from "next/link";

const Page = async () => {

    const comments: IComment[] = await getDataFromAPI.comments.getComments()

    return (
        <div>
            {
                comments.map((comment) => (<div key={comment.id}><Link href={"/comments/" + comment.id}>{comment.name}</Link></div>))
            }
        </div>
    );
};

export default Page;