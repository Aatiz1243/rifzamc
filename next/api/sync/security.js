export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { uuid, name, type, timestamp } = req.body;

    if (type === "admin_login") {
      console.log(`[SECURITY] Admin login by ${name} (${uuid}) at ${new Date(timestamp).toISOString()}`);
    } else {
      console.log(`[SECURITY] Incident: ${type} triggered by ${name} (${uuid})`);
    }

    // TODO: Send to webhook, Discord, or store in logs DB
    return res.status(200).json({ success: true, message: "Security event logged" });
  }
  return res.status(405).json({ error: "Method not allowed" });
}
