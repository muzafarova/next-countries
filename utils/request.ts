class CustomError extends Error {
  constructor(code: string, message: string) {
    super(`${code}: ${message}`);
  }
}

export async function request<T>(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    const error = await response.json();
    throw new CustomError(error.code, error.message);
  }
  const data = (await response.json()) as T;
  return data;
}
