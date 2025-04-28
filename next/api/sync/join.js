export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    console.log("[SYNC] Player Join:", data);
    // TODO: Save or process player join data
    return res.status(200).json({ success: true, message: "Join synced" });
  }
  return res.status(405).json({ error: "Method not allowed" });
}
