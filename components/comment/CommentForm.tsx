'use client';
import React from 'react';

interface Props {
    gameName: string
}

const CommentForm = (props: Props) => {
    const {gameName} = props

    return (
        <form className={"flex flex-col gap-2 mt-3 p-3 bg-white rounded border"}>
            <p className={"text-lg"}> Played <span className={"font-semibold"}>
                {gameName}
            </span>? Comment it!</p>
            <div className={"flex"}>
                <label className={"w-28"} htmlFor={"name"}>Name</label>
                <input type={"text"} name={"name"} id={"name"}
                       className={"border border-gray-800 rounded p-1 flex-grow"}/>
            </div>
            <div className={"flex"}>
                <label className={"w-28"} htmlFor={"comment"}>Comment</label>
                <textarea name={"comment"} id={"comment"} className={"border p-1 border-gray-800 rounded flex-grow"}/>
            </div>
            <button type={"submit"}
                    className={"border rounded bg-orange-200 hover:bg-orange-300 mx-auto px-10 py-1 text-lg"}>
                Submit
            </button>
        </form>
    );
};

export default CommentForm;