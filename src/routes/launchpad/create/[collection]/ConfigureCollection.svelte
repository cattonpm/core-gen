<!-- ConfigureCollection.svelte -->
<script>
  export let collectionData = {
    description: '',
    maxSupply: '',
    whitelistMint: null,
    publicMint: null
  };

  let whitelistStartLocal = '';
  let whitelistEndLocal = '';
  let publicStartLocal = '';
  let publicEndLocal = '';

  export let onSave = () => {};

  let showWhitelistMint = !!collectionData.whitelistMint;
  let showPublicMint = !!collectionData.publicMint;


  function updateWhitelistStart() {
    if (whitelistStartLocal && collectionData.whitelistMint) {
      collectionData.whitelistMint.whitelistStart = new Date(whitelistStartLocal).getTime();
    }
  }

  function updateWhitelistEnd() {
    if (whitelistEndLocal && collectionData.whitelistMint) {
      collectionData.whitelistMint.whitelistEnd = new Date(whitelistEndLocal).getTime();
    }
  }

  function updatePublicStart() {
    if (publicStartLocal && collectionData.publicMint) {
      collectionData.publicMint.publicStart = new Date(publicStartLocal).getTime();
    }
  }

  function updatePublicEnd() {
    if (publicEndLocal && collectionData.publicMint) {
      collectionData.publicMint.publicEnd = new Date(publicEndLocal).getTime();
    }
  }

  function addWhitelistMint() {
    showWhitelistMint = true;
    collectionData.whitelistMint = {
      price: '',
      maxSupply: '',
      limitPerAddress: '',
      whitelistStart: null,
      whitelistEnd: null
    };
  }

  // Update the addPublicMint function:
  function addPublicMint() {
    showPublicMint = true;
    collectionData.publicMint = {
      price: '',
      maxSupply: '',
      limitPerAddress: '',
      publicStart: null,
      publicEnd: null
    };
  }

  function removeWhitelistMint() {
    showWhitelistMint = false;
    collectionData.whitelistMint = null;
  }

  function removePublicMint() {
    showPublicMint = false;
    collectionData.publicMint = null;
  }
</script>

<div class="flex-1 bg-launchpadDarkLight p-8">
  <div class="max-w-4xl mx-auto">
    <h1 class="text-white text-3xl font-bold mb-8 text-center">Configure collection</h1>
    
    <div class="space-y-8">
      <!-- Collection Description -->
      <div>
        <label class="block text-white text-lg mb-4">Collection description</label>
        <input 
          type="text" 
          placeholder="Enter NFT collection name"
          bind:value={collectionData.description}
          class="w-full bg-launchpadDarkMedium border border-darkGray rounded-lg px-4 py-3 text-white placeholder-lightStone focus:outline-none focus:border-button"
        />
      </div>

      <!-- Max Supply -->
      <div>
        <label class="block text-white text-lg mb-4">Max supply</label>
        <input 
          type="text" 
          placeholder="Enter max supply of your NFT"
          bind:value={collectionData.maxSupply}
          class="w-full bg-launchpadDarkMedium border border-darkGray rounded-lg px-4 py-3 text-white placeholder-lightStone focus:outline-none focus:border-button"
        />
      </div>

      <!-- Mint Options -->
      <div>
        <h2 class="text-white text-xl font-bold mb-6">Mint options</h2>
        
        <!-- Whitelist Mint -->
        {#if showWhitelistMint}
          <div class="bg-launchpadDarkMedium rounded-lg p-6 mb-6">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-white text-lg font-semibold">Whitelist mint</h3>
              <button 
                on:click={removeWhitelistMint}
                class="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold hover:bg-red-700"
              >
                ×
              </button>
            </div>
            
            <div class="grid grid-cols-3 gap-6">
              <div>
                <label class="block text-lightGray text-sm mb-2">Price</label>
                <input 
                  type="text"
                  bind:value={collectionData.whitelistMint.price}
                  class="w-full bg-launchpadDarkLight border border-darkGray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-button"
                />
              </div>
              
              <div>
                <label class="block text-lightGray text-sm mb-2">Max supply</label>
                <input 
                  type="text"
                  bind:value={collectionData.whitelistMint.maxSupply}
                  class="w-full bg-launchpadDarkLight border border-darkGray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-button"
                />
              </div>
              
              <div>
                <label class="block text-lightGray text-sm mb-2">Limit per address</label>
                <input 
                  type="text"
                  bind:value={collectionData.whitelistMint.limitPerAddress}
                  class="w-full bg-launchpadDarkLight border border-darkGray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-button"
                />
              </div>
              
              <div>
                <label class="block text-lightGray text-sm mb-2">Start Time</label>
                <input 
                  type="datetime-local"
                  bind:value={whitelistStartLocal}
                  on:change={updateWhitelistStart}
                  class="w-full bg-launchpadDarkLight border border-darkGray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-button"
                />
              </div>
              <div>
                <label class="block text-lightGray text-sm mb-2">End Time</label>
                <input 
                  type="datetime-local"
                  bind:value={whitelistEndLocal}
                  on:change={updateWhitelistEnd}
                  class="w-full bg-launchpadDarkLight border border-darkGray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-button"
                />
              </div>
            </div>
          </div>
        {:else}
          <button 
            on:click={addWhitelistMint}
            class="w-full bg-launchpadDarkMedium border border-darkGray rounded-lg p-4 mb-6 flex items-center justify-center gap-3 text-white hover:bg-darkCard transition-colors"
          >
            <div class="w-6 h-6 border border-white rounded-full flex items-center justify-center text-sm">+</div>
            Add whitelist mint
          </button>
        {/if}

        <!-- Public Mint -->
        {#if showPublicMint}
          <div class="bg-launchpadDarkMedium rounded-lg p-6 mb-6">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-white text-lg font-semibold">Public mint</h3>
              <button 
                on:click={removePublicMint}
                class="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold hover:bg-red-700"
              >
                ×
              </button>
            </div>
            
            <div class="grid grid-cols-3 gap-6">
              <div>
                <label class="block text-lightGray text-sm mb-2">Price</label>
                <input 
                  type="text"
                  bind:value={collectionData.publicMint.price}
                  class="w-full bg-launchpadDarkLight border border-darkGray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-button"
                />
              </div>
              
              <div>
                <label class="block text-lightGray text-sm mb-2">Max supply</label>
                <input 
                  type="text"
                  bind:value={collectionData.publicMint.maxSupply}
                  class="w-full bg-launchpadDarkLight border border-darkGray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-button"
                />
              </div>
              
              <div>
                <label class="block text-lightGray text-sm mb-2">Limit per address</label>
                <input 
                  type="text"
                  bind:value={collectionData.publicMint.limitPerAddress}
                  class="w-full bg-launchpadDarkLight border border-darkGray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-button"
                />
              </div>
              
              <div>
                <label class="block text-lightGray text-sm mb-2">Start Time</label>
                <input 
                  type="datetime-local"
                  bind:value={publicStartLocal}
                  on:change={updatePublicStart}
                  class="w-full bg-launchpadDarkLight border border-darkGray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-button"
                />
              </div>

              <div>
                <label class="block text-lightGray text-sm mb-2">End Time</label>
                <input 
                  type="datetime-local"
                  bind:value={publicEndLocal}
                  on:change={updatePublicEnd}
                  class="w-full bg-launchpadDarkLight border border-darkGray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-button"
                />
              </div>
            </div>
          </div>
        {:else}
          <button 
            on:click={addPublicMint}
            class="w-full bg-launchpadDarkMedium border border-darkGray rounded-lg p-4 mb-6 flex items-center justify-center gap-3 text-white hover:bg-darkCard transition-colors"
          >
            <div class="w-6 h-6 border border-white rounded-full flex items-center justify-center text-sm">+</div>
            Add public mint
          </button>
        {/if}
      </div>
    </div>

    <!-- Save Button -->
    <div class="flex justify-end mt-12">
      <button 
        on:click={onSave}
        class="bg-button hover:bg-buttonHover text-white font-semibold px-12 py-3 rounded-full transition-colors"
      >
        Save
      </button>
    </div>
  </div>
</div>