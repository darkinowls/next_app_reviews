'use client';

import React from 'react';
import {useFormik} from "formik";

import {signInAction, signUpAction,} from "@components/auth/authActions";
import {SignInBody, signInScheme, SignUpBody, signUpScheme} from "@components/auth/utils";


const SignUpForm = () => {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            password2: "",
            name: "",
        },
        onSubmit: async (values: SignUpBody) => {
            const error: { error: string } | null = await signUpAction(
                values
            )
            if (error) {
                formik.setErrors({
                    password: error.error
                })
                return
            }

        },
        validate: (values: SignUpBody) => {
            console.log(values)
            const result = signUpScheme.safeParse(
                values
            )
            const errors: { password?: string } = {}
            if (!result.success) {
                errors.password = result.error.errors[0].message
            }
            return errors
        }
    })


    return (
        <form
            onSubmit={formik.handleSubmit}
            className={"flex flex-col gap-2 mt-3 p-5 bg-white rounded-2xl border"}>
            <p className={"text-lg mx-auto my-4"}> Sign Up!</p>
            <div className={"flex"}>
                <label className={"w-28"} htmlFor={"user"}>Email</label>
                <input
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    type={"email"} name={"email"} id={"email"}
                    className={"border border-gray-800 rounded p-1 flex-grow"}/>
            </div>
            <div className={"flex"}>
                <label className={"w-28"} htmlFor={"content"}>Name</label>
                <input
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    type={"name"}
                    name={"name"} id={"name"} className={"border p-1 border-gray-800 rounded flex-grow"}/>
            </div>
            <div className={"flex"}>
                <label className={"w-28"} htmlFor={"content"}>Password</label>
                <input
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    type={"password"}
                    name={"password"} id={"password"} className={"border p-1 border-gray-800 rounded flex-grow"}/>
            </div>
            <div className={"flex"}>
                <label className={"w-28"} htmlFor={"content"}>Password again</label>
                <input
                    onChange={formik.handleChange}
                    value={formik.values.password2}
                    type={"password"}
                    name={"password2"} id={"password2"} className={"border p-1 border-gray-800 rounded flex-grow"}/>
            </div>
            <div className={"text-red-500 text-sm"}>
                {formik.errors.password}
            </div>
            <button
                type={"submit"}
                disabled={formik.isSubmitting || !formik.dirty || !formik.isValid}
                className={"border rounded bg-orange-200 " +
                    "disabled:bg-slate-300 disabled:cursor-not-allowed " +
                    "hover:bg-orange-400 mx-auto px-10 py-2 my-2 text-lg "
                }>
                Submit
            </button>
        </form>
    );
};

export default SignUpForm;