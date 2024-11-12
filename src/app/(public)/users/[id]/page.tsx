import React from 'react';
import {IUser} from "@/app/models/IUser";
import {getDataFromAPI} from "@/app/services/api.service";

type Params = {
    id: string
}
const UserPage = async ({params}: { params: Params }) => {
    const user: IUser = await getDataFromAPI.users.userById(params.id)
    return (
        <div>
            <div>id: {user.id}</div>
            <div>username: {user.username}</div>
            <div>name: {user.name}</div>
        </div>
    );
};

export default UserPage;