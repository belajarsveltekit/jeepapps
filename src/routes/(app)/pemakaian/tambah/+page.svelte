<script>
  import { enhance } from "$app/forms";
  export let data;
  let km = { km_awal: 0, km_akhir: 0, km_jumlah: 0 };

  $: km.km_jumlah = km.km_akhir - km.km_awal;
</script>

<form
  action="/pemakaian?/add"
  method="post"
  class="container"
  use:enhance={() => {
    return async ({ result }) => {
      console.log("result:", result);
    };
  }}
>
  <h1>Tambah Pemakaian</h1>

  <input type="hidden" name="user_id" value={data?.user?.id} />

  {#each data?.fields as { label, icon, ...props }}
    <label for={props.name}>{label}</label>
    <input id={props.name} {...props} />
  {/each}

  <label for="km_awal">KM Awal</label>
  <input
    type="number"
    name="km_awal"
    bind:value={km.km_awal}
    aria-readonly="true"
    readonly
  />

  <label for="km_akhir">KM Akhir</label>
  <input type="number" name="km_akhir" bind:value={km.km_akhir} required />

  <label for="km_jumlah">KM Jumlah</label>
  <input
    type="number"
    name="km_jumlah"
    bind:value={km.km_jumlah}
    aria-readonly="true"
    readonly
  />

  <button type="submit">Simpan</button>
</form>
