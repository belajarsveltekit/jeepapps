import * as db from "$lib/server/database";
import { redirect } from "@sveltejs/kit";
import { fail } from "@sveltejs/kit";

export const actions = {
  default: async ({ request, cookies }) => {
    try {
      let body = Object.fromEntries(await request.formData());
      body.token = crypto.randomUUID();

      const user = await db.auth.login(body);
      console.log(user);
      if (user.error)
        return fail(400, {
          username: body.username,
          errors: {
            username: "Periksa kembali !",
            password: "Periksa kembali !",
          },
        });

      cookies.set("sessionId", body.token, { maxAge: 24 * 60 * 60, path: "/" });
    } catch (error) {
      console.log("error->", error);
    }
    throw redirect(301, "/");
  },
};
