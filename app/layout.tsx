import React from 'react'
import './globals.css'
import NavBar from "../components/NavBar";
import {orbitron} from "@fonts";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={orbitron.variable}>
        <head>
            <meta charSet="utf-8"/>
            <title>Indie Gamer</title>
        </head>
        <body className={"bg-orange-50 flex flex-col px-4 py-2 min-h-screen"}>
        <header>
            <NavBar/>
        </header>
        <main className={" grow py-3"}>
            {children}
        </main>
        <footer className={"text-center text-xs border-t py-3"}>
            <p>Game data and images are from {' '}
                <a className={"text-orange-800 hover:underline"} href={"https://rawg.io/"}
                   target={"_blank"}>RAWG</a></p>
        </footer>
        </body>
        </html>
    )
}