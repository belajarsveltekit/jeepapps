export const load = () => {
  const fields = [
    { label: "Sopir", type: "text", icon: "", name: "sopir" },
    { label: "Tujuan", type: "text", icon: "", name: "tujuan" },
    { label: "Keperluan", type: "text", icon: "", name: "keperluan" },
    {
      label: "Tanggal Berangkat",
      type: "date",
      icon: "",
      name: "tgl_berangkat",
    },
    { label: "Jam Berangkat", type: "time", icon: "", name: "jam_berangkat" },
    {
      label: "Tanggal Kembali",
      type: "date",
      icon: "",
      name: "tgl_kembali",
    },
    { label: "Jam Kembali", type: "time", icon: "", name: "jam_kembali" },
  ];

  return { fields };
};
