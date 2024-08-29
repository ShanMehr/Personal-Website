<script lang="ts">
  import { typewriterFinished } from "@data/client/stores";
</script>

{#if $typewriterFinished}
  <div class="flex flex-col items-center justify-center text-white">
    <p class="text-center mx-auto"><a href="https://ran.so">Learn more</a><br/><a href="mailto:support@anemo.ai">support@anemo.ai</a></p>
  </div>
  <br />
{/if}

<style>

  a {
    /* Underline */
    text-decoration: underline;

    /* Underline offset */
    text-underline-offset: 3px;
  }
</style>
