import React from 'react';
import SignInForm from "@components/auth/SignInForm";
import NavLink from "@components/NavLink";

const Page = () => {
    return (
        <div className={"flex flex-col flex-grow justify-center items-center gap-2"}>
            <SignInForm/>
            <div>
                Don't have an account? <NavLink href={"/sign-up"}>Sign Up</NavLink>
            </div>
        </div>
    );
};

export default Page;