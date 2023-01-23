const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const request = async <T>(
  path: string,
  init?: RequestInit
): Promise<T> => {
  const promise = await fetch(apiUrl + path, {
    credentials: "include",
    ...init,
  });
  const response = await promise.json();
  return response as Promise<T>;
};
