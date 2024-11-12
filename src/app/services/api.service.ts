import {IUser} from "@/app/models/IUser";
import {baseURL, endPoints} from "@/app/urls/urls";
import {IPost} from "@/app/models/IPost";
import {IComment} from "@/app/models/IComment";

export const getDataFromAPI = {
    users : {
        getUsers: async (): Promise<IUser[]> => {
            return await fetch(baseURL + endPoints.users)
                .then(value => value.json())
        },
        userById: async (userID: string) => {
            return await fetch(`${baseURL}${endPoints.users}/${userID}`)
                .then(response => response.json())
        }
    },
    posts: {
        getPosts: async (): Promise<IPost[]> => {
            return await fetch(baseURL + endPoints.posts)
                .then(value => value.json())
        },

        postById: async (postId: string) => {
            return await fetch(`${baseURL}${endPoints.posts}/${postId}`)
                .then(value => value.json())
        }
    },

    comments: {
        getComments: async ():Promise<IComment[]> => {
            return await fetch(baseURL + endPoints.comments)
                .then(value => value.json())
        },

        commentById: async (commentId: string) => {
            return  await fetch(`${baseURL}${endPoints.comments}/${commentId}`)
                .then(value => value.json())
        }
    }

}