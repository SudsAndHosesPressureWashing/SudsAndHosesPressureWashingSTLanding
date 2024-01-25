<style>
    .hero {
        display: flex;
        align-items: center;
        text-align: center;
        flex-direction: row;
        height: 100vh;
    }

    .banner {
        /* Fallback background color for browsers that do not support backdrop-filter */
        background-color: rgba(150, 150, 150);

        /* Check if backdrop-filter is supported */
        @supports (backdrop-filter: blur(10px)) {
            /* Apply styles using backdrop-filter if supported */
            backdrop-filter: blur(10px);
            background-color: rgba(150, 150, 150, 0.4); /* Adjust the color and transparency as needed */
        }
    }

    .hero image {
        width: 20px;
    }
    a {color: white;}
    a:hover {
        color: #e91e63;
    }
</style>
<script>
    import logo from '$lib/images/Logo.png'
</script>

<div class="hero">
    <div class="banner">
    <img src="{logo}" alt="Logo"/>    
    <h1>
        We're working to build you a great page. In the meantime, feel free to call
        at <a href="tel:7048809955">(704) 880-9955</a>
    </h1>
</div>
</div>
