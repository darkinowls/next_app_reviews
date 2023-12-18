import React from 'react'
import Link from "next/link";
import './globals.css'

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <title>Indie Gamer</title>
        </head>
        <body className={"flex flex-col px-4 py-2 min-h-screen"}>
        <header>
            <nav>
                <ul className={"flex gap-2"}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/reviews">Reviews</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <main className={" grow py-3"}>
            {children}
        </main>
        <footer className={"text-center text-xs border-t py-3"}>
            <p>Game data and images are from <a href={"https://rawg.io/"} target={"_blank"}>RAWG</a></p>
        </footer>
        </body>
        </html>
    )
}