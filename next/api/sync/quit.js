export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    console.log("[SYNC] Player Quit:", data);
    // TODO: Save or process player quit data
    return res.status(200).json({ success: true, message: "Quit synced" });
  }
  return res.status(405).json({ error: "Method not allowed" });
}
