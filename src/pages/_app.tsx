import {type AppType} from "next/app";
import "~/styles/globals.css";
import {ClerkProvider} from "@clerk/nextjs";
import {GoogleApiProvider} from "~/providers";

const MyApp: AppType = ({Component, pageProps}) => {
    return (
        <ClerkProvider
            {...pageProps}
        >
            <GoogleApiProvider>
                <Component {...pageProps} />
            </GoogleApiProvider>
        </ClerkProvider>
    );
};

export default MyApp
