import {
    createContext,
    type PropsWithChildren,
} from "react";
import {useJsApiLoader} from "@react-google-maps/api";
import {ClerkProvider} from "@clerk/nextjs";

interface GoogleApiContextProps {
    isLoaded: boolean;
    loadError: Error | undefined;
}

export const GoogleApiContext = createContext<GoogleApiContextProps>({
    isLoaded: false,
    loadError: undefined,
});

const libraries: ["places"] = ["places"];

export const GoogleApiProvider = ({children}: PropsWithChildren) => {

    const {isLoaded, loadError} = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY!,
        libraries,
        region: undefined,
        preventGoogleFontsLoading: true,
    });

    const value = {
        isLoaded,
        loadError,
    };

    return (
        <GoogleApiContext.Provider value={value}>
            {children}
        </GoogleApiContext.Provider>
    );
};