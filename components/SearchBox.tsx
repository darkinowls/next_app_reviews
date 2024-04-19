'use client';
import React, {useEffect, useState} from 'react';
import {Combobox} from "@headlessui/react";
import {useRouter} from "next/navigation";
import {SearchReview} from "@lib/Reviews";
import {NextResponse} from "next/server";


const SearchBox = () => {

    const [query, setQuery] = useState('')

    const router = useRouter()

    const [reviews, setReviews] =
        useState([])

    useEffect(() => {
        if (query === '' || query.length <= 1) {
            setReviews([])
            return
        }

        const search = () => fetch(`/api/search?query=${query}`).then(
            async (res: NextResponse) => {
                const rs: SearchReview[] = await res.json()
                setReviews(rs)
            }
        )
        const searchTO = setTimeout(search, 300)

        return () => clearTimeout(searchTO)

    }, [query]);


    const filteredResults = reviews

    return (
        <div className={"relative"}>
            <Combobox>
                <Combobox.Input
                    autoComplete={"off"}
                    placeholder={"Search reviews"}
                    onChange={(e) => setQuery(e.target.value)}
                    className={"w-40 md:w-80 h-10 pl-2 border rounded-l-lg"}/>
                {
                    filteredResults.length > 0 &&
                    <Combobox.Options className={"mt-1 absolute border rounded-lg w-full"}>
                        {filteredResults.map((result) => (
                            <Combobox.Option
                                onClick={() => {
                                    router.push(`/reviews/${result.slug}`)
                                }}
                                key={result.slug} value={result.title}
                                className={"p-1 bg-orange-100 hover:bg-orange-200 truncate"}>
                                {result.title}
                            </Combobox.Option>
                        ))}
                    </Combobox.Options>
                }
                {/*<Combobox.Button className={"ml-4 p-2 shadow border rounded-r-lg"}>*/}
                {/*    Search*/}
                {/*</Combobox.Button>*/}
            </Combobox>
        </div>
    );
};

export default SearchBox;