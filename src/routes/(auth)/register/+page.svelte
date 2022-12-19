<script>
  import { beforeNavigate } from "$app/navigation";
  export let data;
  export let form;
  let loading = false;
  if (form) console.log(form);

  beforeNavigate(() => {
    loading = true;
  });
</script>

<form method="post" class="container">
  <hgroup>
    <h1>Register</h1>
    <p>Silakan isi dengan lengkap.</p>
  </hgroup>

  {#each data?.fields as { label, icon, ...props }}
    <label for={props.name}>{label}</label>
    <input
      id={props.name}
      {...props}
      disabled={loading}
      value={form?.[props.name] ?? ""}
      aria-invalid={form?.errors?.[props.name] ? true : ""}
    />
    <small>{form?.errors?.[props.name] ?? ""}</small>
  {/each}

  <button type="submit" aria-busy={loading}
    >{loading ? "loading..." : "Daftar"}</button
  >
</form>
