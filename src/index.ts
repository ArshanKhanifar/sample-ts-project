import { SomeClass } from "./hello";

async function main() {
  // Your code goes here
  const f = new SomeClass("hello");
  console.log("f", f.foo);
}

main().catch((error) => {
  console.error("There was an error:", error);
  process.exit(1);
});
