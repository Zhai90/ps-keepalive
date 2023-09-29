import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { crx, ManifestV3Export } from "@crxjs/vite-plugin";
import manifest from "./manifest.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    crx({ manifest: manifest as unknown as ManifestV3Export }),
  ],
});
