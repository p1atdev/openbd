import { assertEquals } from "../deps.ts";
import { createOpenBDClient, OpenBDClient } from "../models/mod.ts";

Deno.test("new OpenBDClient()", async () => {
  const client = new OpenBDClient();

  const res = await client.searchBookRaw("9784049125207"); // キノの旅XXII the Beautiful World

  assertEquals(res.length, 1);

  assertEquals(res[0].summary.title, "キノの旅XXII the Beautiful World");
});

Deno.test("createOpenDBClient()", async () => {
  const client = createOpenBDClient();

  const res = await client.searchBookRaw([
    "978-4-049125207", // キノの旅
    "978-4047362741", // ダンジョン飯
    "4088830490", // タコピー
  ]);

  assertEquals(res.length, 3);

  assertEquals(res[2].summary.title, "タコピーの原罪 上");
});
