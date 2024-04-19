import React from 'react';
import Link from "@node_modules/next/link";
import {ArrowLeftIcon, ArrowRightIcon} from "@heroicons/react/20/solid";

interface PageBarProps {
    pageInt: number;
    totalPages: number;
    href: string;
}

const PageBar = (props: PageBarProps) => {
    const {pageInt, totalPages, href} = props;
    return (
        <div className={"flex gap-2"}>
            {pageInt !== 1 &&
                <PageLink href={`${href}?page=${pageInt - 1}`}>
                    <ArrowLeftIcon className={"h-6 w-6"}/>
                    <span className={"sr-only"}>Previous page</span>
                </PageLink>}
            <span>Page {pageInt} of {totalPages}</span>
            {totalPages > pageInt &&
                <PageLink href={`${href}?page=${pageInt + 1}`}>
                    <ArrowRightIcon className={"h-6 w-6"}/>
                    <span className={"sr-only"}>Next page</span>

                </PageLink>}
        </div>
    );
};

const PageLink = ({children, href}) => {
    return (
        <Link href={href} className={"shadow hover:bg-orange-100"}>
            {children}
        </Link>
    )
}

export default PageBar;