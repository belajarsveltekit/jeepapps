import * as db from "$lib/server/database";
import { redirect } from "@sveltejs/kit";
import { fail } from "@sveltejs/kit";
import bcrypt from "bcrypt";

export const actions = {
  default: async ({ request }) => {
    try {
      let body = Object.fromEntries(await request.formData());

      const { password, passwordConfirm, ...rest } = body;

      if (password != passwordConfirm) {
        return fail(400, {
          ...rest,
          message: "Gagal register !",
          errors: {
            password: "Password dan ulangi password tidak cocok !",
            passwordConfirm: "Password dan ulangi password tidak cocok !",
          },
        });
      }

      body.password = await bcrypt.hash(body.password, 10);

      const user = await db.auth.register(body);
      console.log("user:", user);

      if (user.error) return fail(400, user);

      redirect(301, "/login");
    } catch (error) {
      console.log("error->", error);
    }
  },
};
