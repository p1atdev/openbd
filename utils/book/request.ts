import { request } from "../mod.ts";
import { Book } from "../../types/mod.ts";

const endpoint = "https://api.openbd.jp/v1/get";

export const createBookRequest = async (
  isbn: string | string[],
): Promise<Book[]> => {
  const param = Array.isArray(isbn) ? isbn.join(",") : isbn;

  const url = new URL(endpoint);

  url.searchParams.append("isbn", param);

  const books: Book[] = await request<Book[]>(url.toString());

  return books;
};
