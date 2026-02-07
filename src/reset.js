// Simulated password reset handler.
// BUG: returns 500 when email is missing, instead of a proper 400.

export function resetPassword(req) {
  const email = req?.email;
  if (!email) {
    // bug: should be 400 + message
    return { status: 500, body: { error: "internal" } };
  }
  return { status: 200, body: { ok: true } };
}
