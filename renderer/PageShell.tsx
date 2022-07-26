import logo from "@/renderer/logo.svg";
import "@/renderer/PageShell.css";
import type { PageContext } from "@/renderer/types";
import { PageContextProvider } from "@/renderer/usePageContext";
import React from "react";
import { Link } from "./Link";
export { PageShell };

function PageShell({ pageContext, children }: { pageContext: PageContext; children: React.ReactNode }) {
    return (
        <React.StrictMode>
            <PageContextProvider pageContext={pageContext}>
                <Layout>
                    <Sidebar>
                        <Logo />
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/markdown">Markdown</Link>
                    </Sidebar>
                    <Content>{children}</Content>
                </Layout>
            </PageContextProvider>
        </React.StrictMode>
    );
}

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div
            style={{
                display: "flex",
                maxWidth: 900,
                margin: "auto"
            }}
        >
            {children}
        </div>
    );
}

function Sidebar({ children }: { children: React.ReactNode }) {
    return (
        <div
            style={{
                padding: 20,
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                lineHeight: "1.8em"
            }}
        >
            {children}
        </div>
    );
}

function Content({ children }: { children: React.ReactNode }) {
    return (
        <div
            style={{
                padding: 20,
                paddingBottom: 50,
                borderLeft: "2px solid #eee",
                minHeight: "100vh"
            }}
        >
            {children}
        </div>
    );
}

function Logo() {
    return (
        <div
            style={{
                marginTop: 20,
                marginBottom: 10
            }}
        >
            <a href="/">
                <img src={logo} height={64} width={64} alt="logo" />
            </a>
        </div>
    );
}
