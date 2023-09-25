import {type AppType} from "next/app";
import "~/styles/globals.css";
import {ClerkProvider, SignedIn, SignedOut} from "@clerk/nextjs";
import Head from "next/head";
import {GoogleApiProvider} from "~/providers";

const MyApp: AppType = ({Component, pageProps}) => {
    return (
        <ClerkProvider
            {...pageProps}
            appearance={{layout: {logoImageUrl: "/logo/logo-full-dark.svg"}}}
        >
            <Head>
                <title>Clerk with Google Maps</title>
            </Head>
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
