export const get = (url: string): any =>
  fetch(url, {
    credentials: "include",
  }).then((r) => r.json());

export const post = (url: string, { arg }: any): any =>
  fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((r) => r.json());
