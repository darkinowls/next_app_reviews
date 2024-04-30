import Link from "next/link";
import NavLink from "@components/NavLink";
import SignOutButton from "@components/auth/SignOutButton";
import {UserTokenPayload, verifyUserToken} from "@lib/auth";

const NavBar = async () => {

    const userEmail: UserTokenPayload = await verifyUserToken()

    console.log(userEmail)

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
                {userEmail ?


                    <>
                        <li className={"flex"}>
                            <NavLink href="/account">{userEmail.email}</NavLink>

                        </li>

                        <li>
                            <SignOutButton/>
                        </li>
                    </>


                    :
                    <>
                        <li>
                            <NavLink href="/sign-in">Sign-in</NavLink>
                        </li>
                        <li>
                            <NavLink href="/sign-up">Sign-Up</NavLink>
                        </li>
                    </>
                }
            </ul>
        </nav>
    );
};


export default NavBar;

