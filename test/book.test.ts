import { createBookRequest } from "../utils/mod.ts";
import { assertEquals } from "../deps.ts";

Deno.test("search a book", async () => {
  const res = await createBookRequest("9784049125207"); // キノの旅XXII the Beautiful World

  assertEquals(res.length, 1);

  assertEquals(res[0].summary.title, "キノの旅XXII the Beautiful World");
});

Deno.test("search some books", async () => {
  const res = await createBookRequest([
    "978-4-049125207", // キノの旅
    "978-4047362741", // ダンジョン飯
    "4088830490", // タコピー
  ]);

  assertEquals(res.length, 3);

  assertEquals(res[2].summary.title, "タコピーの原罪 上");
});
