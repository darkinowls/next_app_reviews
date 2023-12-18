import React from 'react'

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
            {/*<link rel="stylesheet" href="/style.css" />*/}
        </head>
        <body>
        <header></header>
        <main>
            {children}
        </main>
        <footer></footer>
        </body>
        </html>
    )
}