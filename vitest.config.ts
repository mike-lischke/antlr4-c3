import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        logHeapUsage: false,
        isolate: false,
        environment: "node",
        pool: "threads",
        testTimeout: 180000 //2 minutes
    },
});
