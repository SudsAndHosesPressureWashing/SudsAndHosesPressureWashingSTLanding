<style>
    .hero {
        display: flex;
        align-items: center;
        text-align: center;
        flex-direction: row;
        height: 100vh;
    }
    .banner {
        backdrop-filter: blur(40px);

    }
    .hero h1 {
        backdrop-filter: blur(50px);
    }
    .hero image {
        width: 20px;
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
