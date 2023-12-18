import Link from "next/link";
import React from "react";

export default function ReviewsPage() {
    return (
        <>
            <h2>Reviews</h2>
            <p>Here the list of reviews</p>
            <nav>
                <ul>
                    <li>
                        <Link href="/reviews/hollow-knight">Hollow knight</Link>
                    </li>
                    <li>
                        <Link href="/reviews/stardew-valley">Stardew Valley</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}