'use client';

import React from 'react';
import {SearchReview} from "@lib/reviews";
import {useFormik} from "formik";
import {createCommentAction} from "@components/comment/CreateCommentAction";
import {commentScheme} from "@prisma/Comments";


interface Props {
    searchReview: SearchReview
}


const CommentForm = (props: Props) => {
    const {searchReview} = props

    const formik = useFormik({
        initialValues: {
            user: "",
            content: ""
        },
        onSubmit: async (values) => {
            const error: { error: string } | null = await createCommentAction({
                user: values.user,
                content: values.content,
                slug: searchReview.slug,
            })
            if (error) {
                formik.setErrors({
                    content: error.error
                })
                return
            }

        },
        validate: (values) => {
            const result = commentScheme.safeParse(values)
            const errors: { content?: string } = {}
            if (!result.success) {
                errors.content = "Invalid comment"
            }
            return errors
        }
    })


    return (
        <form
            onSubmit={formik.handleSubmit}
            className={"flex flex-col gap-2 mt-3 p-3 bg-white rounded border"}>
            <p className={"text-lg"}> Played <span className={"font-semibold"}>
                {searchReview.title}
            </span>? Comment it!</p>
            <div className={"flex"}>
                <label className={"w-28"} htmlFor={"user"}>Name</label>
                <input
                    onChange={formik.handleChange}
                    value={formik.values.user}
                    type={"text"} name={"user"} id={"user"}
                    className={"border border-gray-800 rounded p-1 flex-grow"}/>
            </div>
            <div className={"flex"}>
                <label className={"w-28"} htmlFor={"content"}>Comment</label>
                <textarea
                    onChange={formik.handleChange}
                    value={formik.values.content}
                    name={"content"} id={"content"} className={"border p-1 border-gray-800 rounded flex-grow"}/>
            </div>
            <div className={"text-red-500 text-sm"}>
                {formik.errors.content}
            </div>
            <button
                type={"submit"}
                disabled={formik.isSubmitting || !formik.dirty || !formik.isValid}
                className={"border rounded bg-orange-200 " +
                    "disabled:bg-slate-300 disabled:cursor-not-allowed " +
                    "hover:bg-orange-400 mx-auto px-10 py-1 text-lg "
                }>
                Submit
            </button>
        </form>
    );
};

export default CommentForm;