import { createBookRequest } from "../utils/mod.ts";
import { Book } from "../types/mod.ts";

export class OpenBDClient {
  /**
   * @param isbn {string|string[]} 本のISBNコード。stringかstring[]
   * @returns 書籍情報。扱いやすく調整**していない**ので使いにくいかも
   */
  async searchBookRaw(isbn: string | string[]): Promise<Book[]> {
    return await createBookRequest(isbn);
  }
}

export const createOpenDBClient = () => {
  /**
   * @param isbn {string|string[]} 本のISBNコード。stringかstring[]
   * @returns 書籍情報。扱いやすく調整**していない**ので使いにくいかも
   */
  const searchBookRaw = async (isbn: string | string[]): Promise<Book[]> => {
    return await createBookRequest(isbn);
  };

  return {
    searchBookRaw,
  };
};
