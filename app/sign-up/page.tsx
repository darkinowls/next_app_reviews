import React from 'react';
import SignInForm from "@components/auth/SignInForm";
import SignUpForm from "@components/auth/SignUpForm";
import NavLink from "@components/NavLink";

const Page = () => {
    return (
        <div className={"flex flex-col flex-grow justify-center items-center gap-2"}>
            <SignUpForm/>
            <div>
                Already have an account? <NavLink href={"/sign-in"}>Sign In</NavLink>
            </div>
        </div>
    );
};

export default Page;