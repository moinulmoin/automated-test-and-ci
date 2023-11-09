/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      test: path.resolve(__dirname, "./test"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: path.resolve(__dirname, "./test/setup.ts"),
    environmentMatchGlobs: [
      ["**/*.test.tsx", "jsdom"],
      ["**/*.component.test.ts", "jsdom"],
    ],
    coverage: {
      provider: "v8",
      statements: 77.41,
      thresholdAutoUpdate: true,
      include: ["src/**/*"],
      exclude: [
        "test/**",
        "vite.*.ts",
        "**/*.d.ts",
        "**/*.test.*",
        "**/*.config.*",
        "**/snapshot-tests/**",
        "**/*.solution.tsx",
        "**/coverage/**",
      ],
      all: true,
      reportOnFailure: true,
    },
  },
});
