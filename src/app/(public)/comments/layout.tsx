import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'comment page'
}
type Props = { children: React.ReactNode }
const UsersLayout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default UsersLayout;