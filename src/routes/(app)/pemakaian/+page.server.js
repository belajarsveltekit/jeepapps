export const actions = {
  add: async ({ request }) => {
    let body = Object.fromEntries(await request.formData());
    return body;
  },
};
