import mdx from "@mdx-js/rollup";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import ssr from "vite-plugin-ssr/plugin";

export default defineConfig({
    plugins: [react(), mdx(), ssr({ prerender: true })],
    clearScreen: false,
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./")
        }
    },
    build: {
        rollupOptions: {
            output: {
                format: "es"
            }
        }
    }
});
