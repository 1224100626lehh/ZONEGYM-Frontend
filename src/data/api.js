
export async function getProgreso() {
  const res = await fetch("/api/progreso");
  return res.json();
}
