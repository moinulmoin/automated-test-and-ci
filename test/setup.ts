// ref: https://dev.to/edwright75/comment/2aea7
import "@testing-library/jest-dom/vitest";
import { toHaveNoViolations } from "jest-axe";
expect.extend(toHaveNoViolations);
