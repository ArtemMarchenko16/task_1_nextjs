import React from 'react';
import {IComment} from "@/app/models/IComment";
import {getDataFromAPI} from "@/app/services/api.service";

type Params = {
    id: string
}

const Layout = async ({params}: {params: Params}) => {

    const comment: IComment = await getDataFromAPI.comments.commentById(params.id)

    return (
        <div>
            <div>Name: {comment.name},</div>
            <div>Id: {comment.id},</div>
            <div>Body: {comment.body},</div>
            <div>Email: {comment.email}.</div>
        </div>
    );
};

export default Layout;