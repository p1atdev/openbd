import { assertEquals } from "../deps.ts";
import { createOpenBDClient, OpenBDClient } from "../models/mod.ts";

Deno.test("for README.md with OpenBDClient()", async () => {
  const client = new OpenBDClient();
  // または、
  // const client = createOpenBDClient()
  // のどちらでも可。正直どっちがいいかわからないから両方置いてある。

  // ISBN を指定します。配列で複数渡すことも可能です
  const res = await client.searchBookRaw("9784049125207"); // キノの旅XXII the Beautiful World

  console.log(res);

  assertEquals(res.length, 1);
});

Deno.test("for README.md with createOpenBDClient()", async () => {
  // const client = new OpenBDClient();
  // または、
  const client = createOpenBDClient();
  // のどちらでも可。正直どっちがいいかわからないから両方置いてある。

  // ISBN を指定します。配列で複数渡すことも可能です
  const res = await client.searchBookRaw("9784049125207"); // キノの旅XXII the Beautiful World

  //   console.log(res);

  assertEquals(res.length, 1);
});
