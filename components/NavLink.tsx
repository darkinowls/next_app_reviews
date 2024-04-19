'use client';
import Link from "@node_modules/next/link";
import {usePathname} from "@node_modules/next/dist/client/components/navigation";

const NavLink = ({children, href}) => {
    const path = usePathname()

    // don't prefetch the current page
    if (path === href) {
        return (
            <span className={"text-orange-800 font-bold"}>{children}</span>
        )
    }


    return (
        <Link href={href}
              className={"text-orange-800 hover:underline"}>
            {children}
        </Link>
    )
}

export default NavLink;