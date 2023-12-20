import Heading from "@components/Heading";

export default function NotFound() {
    return (
        <div className={"flex flex-col items-center grow justify-center"}>
            <Heading>Not Found</Heading>
            <p>There is not such page</p>
        </div>
    );
};
