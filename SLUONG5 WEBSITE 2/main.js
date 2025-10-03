function emailUs(address, subject = "", body = "") {
  try { navigator.clipboard?.writeText(address); } catch (_) {}
  const q = new URLSearchParams();
  if (address) q.set("to", address);
  if (subject) q.set("su", subject);
  if (body) q.set("body", body);
  window.open("https://mail.google.com/mail/?view=cm&" + q.toString(), "_blank", "noopener");
}
