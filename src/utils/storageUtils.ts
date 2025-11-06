export function saveLocalData(key: string, data: any) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getLocalData(key: string) {
  const stored = localStorage.getItem(key);
  return stored ? JSON.parse(stored) : null;
}
