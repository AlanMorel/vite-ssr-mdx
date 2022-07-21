import mdx from "@mdx-js/rollup";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import ssr from "vite-plugin-ssr/plugin";

export default defineConfig({
    plugins: [react(), mdx(), ssr({ prerender: true })],
    build: {
        rollupOptions: {
            output: {
                format: "es"
            }
        }
    }
});
