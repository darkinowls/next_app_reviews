import Link from "next/link";
import NavLink from "@components/NavLink";

const NavBar = () => {
    return (
        <nav>
            <ul className={"flex gap-2"}>
                <li>
                    <Link href="/" className={"text-orange-800 hover:underline font-orbitron font-bold"}>Indie
                        Gamer</Link>
                </li>
                <li className={"ml-auto"}>
                    <NavLink href="/reviews">Reviews</NavLink>
                </li>
                <li>
                    <NavLink href="/about">About</NavLink>
                </li>
            </ul>
        </nav>
    );
};


export default NavBar;

