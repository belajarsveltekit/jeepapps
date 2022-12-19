<script>
  import { beforeNavigate } from "$app/navigation";
  let loading = false;
  beforeNavigate(() => {
    loading = true;
  });
</script>

{loading ? "loading" : ""}
<main class="container-fluid">
  <h1>Welcome...</h1>
  <a role="button" href="/pemakaian/tambah">Tambah Pemakaian</a>
</main>
