import Profile from "./profile";

export function Gallery() {
    return (
        <div className="mt-4 flex flex-row justify-between">
            <Profile />
            <Profile />
            <Profile />
        </div>
    );
}