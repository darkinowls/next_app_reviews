'use client';
import React from 'react';
import {signOutAction} from "@components/auth/authActions";
import {useRouter} from "next/navigation";


const SignOutButton = () => {
    const router = useRouter();
    return (
        <div className={"text-orange-800 hover:underline hover:cursor-pointer"}
             onClick={ async () => {
                 await signOutAction()
                 router.refresh()
             }}>
            Sign Out
        </div>
    );
};

export default SignOutButton;