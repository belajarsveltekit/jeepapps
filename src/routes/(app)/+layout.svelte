<script>
  export let data;
</script>

<nav class="container-fluid">
  <ul>
    <li>
      <a href="/"> <strong>Jeep Apps</strong></a>
    </li>
  </ul>
  <ul>
    <li>{data?.user?.username ?? "Tamu"}</li>
  </ul>
</nav>

<slot />
