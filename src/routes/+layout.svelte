<svelte:head>
    <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css">
</svelte:head>
<script>
    import "$lib/css/main.css"
</script>
<style>
    body {
        background-image: var(--bg-image);
        background-position: center;
        background-size: cover;
    }
    body {
        width: 100vw;
        margin-left: auto;
        margin-right: auto;
        
    }
</style>
<body>
    <slot></slot>
</body>
