<script lang="ts">
    import PaperAirplane from "$lib/assets/chat/svelte/PaperAirplane.svelte";
    export let value: string;
    export let loading: boolean;
    export let onSubmit: (query: string) => void;
  
    function handleInputSubmit() {
      if (value) {
        onSubmit(value);
      }
    }
  </script>
  <div
    class="fixed relative flex w-full flex-col items-center justify-between bg-white p-2 pb-0"
  >
    <div class="relative my-4 flex w-full flex-row justify-center">
      <div class="relative w-full focus:border-none">
        <input
          class="text-md block w-full border-0 border-b-2 border-gray-300 px-1 py-4
          text-gray-900 focus:border-gray-300 focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          type="text"
          placeholder="Enter prompt here"
          disabled={loading}
          maxlength="1200"
          bind:value
          on:keydown={(event) => {
            if (event.key === "Enter" && !event.shiftKey && value) {
              event.preventDefault();
              handleInputSubmit();
            }
          }}
        />
        <button
          on:click={handleInputSubmit}
          type="submit"
          class="absolute bottom-2.5 end-2.5 px-4 py-2 text-sm font-medium text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <PaperAirplane />
        </button>
      </div>
    </div>
  </div>

  
