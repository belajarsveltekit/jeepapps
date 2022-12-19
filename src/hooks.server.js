import * as db from "$lib/server/database";

export const handle = async ({ event, resolve }) => {
  const sessionId = event.cookies.get("sessionId");
  if (sessionId) {
    const user = await db.auth.authToken(sessionId);
    console.log("load hooks server:", user.username);
    event.locals.user = user;
  }

  const response = await resolve(event);
  return response;
};
