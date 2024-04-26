import React from 'react';
import SignInForm from "@components/sign-in/SignInForm";

const Page = () => {
    return (
        <div className={"flex flex-col flex-grow justify-center items-center"}>
            <SignInForm/>
        </div>
    );
};

export default Page;