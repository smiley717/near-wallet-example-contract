import { sayHi, whoSaidHi } from "../main";
import { VM } from "wasm-mock-vm";
import { context, storage } from "near-runtime-ts";

const LAST_SENDER_KEY = "last_sender";

describe("contract", () => {
  it("should say Hi", () => {
    sayHi();
    expect(VM.outcome().logs).toIncludeEqual(context.sender + " says \"Hi!\"", "logs should be updated")
    expect(storage.get<string>(LAST_SENDER_KEY)).toBe(context.sender);
  });

  it("should return who said Hi!", () => {
    expect(whoSaidHi()).toBe(context.sender, "last who said high should be " + context.sender);
  });
});
