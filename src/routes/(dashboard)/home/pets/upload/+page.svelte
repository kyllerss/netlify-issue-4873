<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<form method="POST">
    <input type="text" name="message" value="A message.">
    <input type="submit" value="Submit">
</form>