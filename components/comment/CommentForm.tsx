'use client';

import React from 'react';
import {SearchReview} from "@lib/Reviews";
import {createCommentAction} from "@components/comment/CreateCommentAction";
import {useFormik} from "formik";


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
        onSubmit: () => {},
        validate: (values) => {
            const errors: any = {}
            if (!values.content) {
                errors.content = "Comment is required"
            }
            if (values.content.length < 5) {
                errors.content = "Comment must be at least 10 characters"
            }
            return errors
        }
    })


    return (
        <form
            action={(formData) => createCommentAction(formData, searchReview.slug)}
            className={"flex flex-col gap-2 mt-3 p-3 bg-white rounded border"}>
            <p className={"text-lg"}> Played <span className={"font-semibold"}>
                {searchReview.title}
            </span>? Comment it!</p>
            <div className={"flex"}>
                <label className={"w-28"} htmlFor={"name"}>Name</label>
                <input
                    onChange={formik.handleChange}
                    value={formik.values.user}
                    type={"text"} name={"user"} id={"user"}
                    className={"border border-gray-800 rounded p-1 flex-grow"}/>
            </div>
            <div className={"flex"}>
                <label className={"w-28"} htmlFor={"comment"}>Comment</label>
                <textarea
                    onChange={formik.handleChange}
                    value={formik.values.content}
                    name={"content"} id={"content"} className={"border p-1 border-gray-800 rounded flex-grow"}/>
            </div>
            <div className={"text-red-500 text-sm"}>
                    {formik.errors.content}
            </div>
            <button type={"submit"}
                    className={"border rounded bg-orange-200 hover:bg-orange-300 mx-auto px-10 py-1 text-lg"}>
                Submit
            </button>
        </form>
    );
};

export default CommentForm;