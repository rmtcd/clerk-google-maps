import {type AppType} from "next/app";
import "~/styles/globals.css";
import {ClerkProvider, SignedIn, SignedOut} from "@clerk/nextjs";
import {GoogleApiProvider} from "~/providers";

const MyApp: AppType = ({Component, pageProps}) => {
    return (
        <ClerkProvider
            {...pageProps}
        >
            <GoogleApiProvider>
                <SignedIn>
                        <Component {...pageProps} />
                </SignedIn>
                <SignedOut>
                    <Component {...pageProps} />
                </SignedOut>
            </GoogleApiProvider>
        </ClerkProvider>
    );
};

export default MyApp
