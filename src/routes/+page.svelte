<style>
    .hero {
        display: flex;
        align-items: center;
        text-align: center;
        flex-direction: row;
        height: 100vh;
    }

    .banner {
padding: 10px;
        /* Fallback background color for browsers that do not support backdrop-filter */
        background-color: rgba(150, 150, 150);

        /* Check if backdrop-filter is supported */
        @supports (backdrop-filter: blur(10px)) {
            /* Apply styles using backdrop-filter if supported */
            backdrop-filter: blur(10px);
            background-color: rgba(150, 150, 150, 0.4); /* Adjust the color and transparency as needed */
        }
    }

    .hero img {
        width: 80px;
margin-left: auto;
margin-right: auto;
    }
    a {color: white;}
    a:hover {
        color: #c80f0f;
    }
</style>
<script>
    import logo from '$lib/images/Logo.png'
</script>

<div class="hero">
    <div class="banner">
    <img src="{logo}" alt="Logo"/>    
    <h1>
        We're working to build you a great website. In the meantime, feel free to call
        at <a href="tel:7048809955">(704) 880-9955</a>
    </h1>
</div>
</div>
