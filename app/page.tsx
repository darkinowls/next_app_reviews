import Heading from "@components/Heading";

export default function HomePage() {
    console.log("Rendered on server");
    return (
        <>
            <Heading>Indie Gamer</Heading>
            <p>Only the best games I reviewed for you</p>
        </>
    );
}