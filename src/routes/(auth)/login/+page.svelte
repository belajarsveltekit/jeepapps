<script>
  import { beforeNavigate } from "$app/navigation";
  export let data;
  export let form;
  let loading = false;

  beforeNavigate(() => {
    loading = true;
  });

  if (form) console.log(form);
</script>

<form method="post" class="container">
  <hgroup>
    <h1>Login</h1>
    <p>Silakan login terlebih dahulu.</p>
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
    >{loading ? "loading..." : "Masuk"}</button
  >
</form>
