import { createContext, ReactNode, useContext, useState } from "react";

type metadataParams = { title: string; content: string; useHome?: boolean };

type metadataContextType = {
    title: string;
    content: string;
    useHome: boolean;
    setMetadata: ({ title, content, useHome }: metadataParams) => void;
};

const metadataContextDefaultValues: metadataContextType = {
    title: "",
    content: "",
    useHome: false,
    setMetadata: ({}: metadataParams) => {},
};

const MetadataContext = createContext<metadataContextType>(
    metadataContextDefaultValues
);

export function useMetadata() {
    return useContext(MetadataContext);
}

type Props = {
    children: ReactNode;
};

export function MetadataProvider({ children }: Props) {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [useHome, setUseHome] = useState<boolean>(false);

    const setMetadata = ({
        title,
        content,
        useHome = false,
    }: metadataParams) => {
        setTitle(title);
        setContent(content);
        setUseHome(useHome);
    };

    const value = {
        title,
        content,
        useHome,
        setMetadata,
    };
    return (
        <>
            <MetadataContext.Provider value={value}>
                {children}
            </MetadataContext.Provider>
        </>
    );
}
