import { MDXProvider } from "@mdx-js/react";

export default function MDXComponentsProvider({ children }: { children: React.ReactNode }) {
    return (
        <MDXProvider
            components={{
                h1: "strong",
                h2: "h2"
            }}
        >
            {children}
        </MDXProvider>
    );
}
