import { PUBLIC_GS_API, PUBLIC_SID } from "$env/static/public";
import bcrypt from "bcrypt";

const fetchData = async (q) => {
  q.sid = PUBLIC_SID;
  const time = new Date().getTime().toString();

  const url = PUBLIC_GS_API + "?q=" + JSON.stringify(q) + "&_=" + time;
  const res = await fetch(url);
  return await res.json();
};

export const collection = (sheet) => {
  const last = async () => {
    return await fetchData({ sheet, action: "last" });
  };

  const read = async (body) => {
    const { where } = body;
    return await fetchData({ sheet, action: "read", where });
  };

  const add = async (body) => {
    return await fetchData({ sheet, action: "create", body });
  };

  const del = async (id) => {
    return await fetchData({ sheet, action: "delete", id });
  };

  const put = async (id, body) => {
    return await fetchData({ sheet, action: "update", id, body });
  };

  return { read, add, del, put };
};

export const auth = {
  sheet: "users",

  login: async (data) => {
    try {
      // check username
      let user = await collection("users").read({
        where: { username: data.username },
      });
      if (user.error) throw { message: "Username belum terdaftar !" };

      // check password
      const isValidPassword = await bcrypt.compare(
        data.password,
        user.data.password
      );
      if (!isValidPassword) throw { message: "Password salah !" };

      // update token
      let reqToken = await collection("users").put(user.data.id, {
        token: data.token,
      });

      return reqToken;
    } catch (error) {
      return {
        error: true,
        status: 400,
        message: error.message,
      };
    }
  },

  register: async (data) => {
    return await collection("users").add(data);
  },

  authToken: async (token) => {
    let user = await collection("users").read({ where: { token } });
    const { password, ...data } = user.data;
    return data;
  },
};
