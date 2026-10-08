
import { describe, it, expect } from "vitest";
import { invitation_list } from "./invitations";

describe("invitations", () => {
    it("should have at least 3 people", () => {
        expect(invitation_list.length).toBeGreaterThanOrEqual(3);
    });

    it("should include Alice", () => {
        expect(invitation_list).toContain("Alice");
    });
});
