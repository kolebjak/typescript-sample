export const fetcher = async <T>(url: string, method: 'GET' | 'POST', headers = {}, body: {} | null = null): Promise<T> => {
  const raw = await fetch(url, {
    method,
    body: body ? JSON.stringify(body) : null,
    headers: { 'Content-Type': 'application/json', ...headers },
  });
  return raw.json();
};

export const getSomething: () => Promise<string[]> = async () => (await fetcher<string[]>('http://localhost:3003/some-thing', 'GET'));
