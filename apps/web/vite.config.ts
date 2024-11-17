import {defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    resolve: {
        alias: {
            "@fonts": path.resolve(__dirname, "./src/shared/assets/fonts"),
            "@assets": path.resolve(__dirname, "./src/shared/assets"),
        },
    },
});
