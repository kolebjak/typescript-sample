export const fetcher = async <T>(url: string, method: 'GET' | 'POST', headers = {}, body: {} | null = null): Promise<T> => {
  const raw = await fetch(url, {
    method,
    body: body ? JSON.stringify(body) : null,
    headers: { 'Content-Type': 'application/json', ...headers },
  })
  return raw.json()
}

export const getSomething: () => Promise<{ title: string }> = async () => (
  await fetcher<{ title: string }>('https://jsonplaceholder.typicode.com/todos/1', 'GET')
)
