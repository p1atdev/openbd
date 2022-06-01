export const request = async <T>(url: string): Promise<T> => {
  const json: T = await fetch(url).then((res) => res.json());

  return json;
};
