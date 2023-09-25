import React, {type PropsWithChildren, useContext} from "react";
import {GoogleApiContext} from "~/providers";
import {GoogleMap} from "@react-google-maps/api";
import {SignedIn, SignedOut, SignInButton, SignOutButton, SignUp} from "@clerk/nextjs";

const GoogleApiWrapper = (props: PropsWithChildren) => {
    const {children} = props;

    const {isLoaded, loadError} = useContext(GoogleApiContext);

    if (loadError) {
        return <div>Error loading maps API: {loadError.message}</div>;
    }

    if (!isLoaded) {
        return <div>loading</div>;
    }

    return <>{children}</>;
};

export default function Home() {
    return (
        <main
            className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                    Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
                </h1>
                <div className="h-96 w-full">
                    <GoogleApiWrapper>
                        <GoogleMap
                            center={{lat: 40.712772, lng: -74.006058}}
                            mapContainerClassName="w-full h-full"
                            zoom={12}
                        />
                    </GoogleApiWrapper>
                </div>
                <SignedOut>
                    <SignInButton mode="modal">
                        <button className="text-white">Sign in</button>
                    </SignInButton>
                </SignedOut>
                <SignUp/>
                <SignedIn>
                    <SignOutButton>
                        <button className="text-white">Sign out</button>
                    </SignOutButton>
                </SignedIn>
            </div>
        </main>
    );
}
