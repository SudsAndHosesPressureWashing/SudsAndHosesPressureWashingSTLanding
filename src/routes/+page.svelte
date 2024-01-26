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
        background-color: rgba(150, 150, 150);
        @supports (backdrop-filter: blur(10px)) {
            backdrop-filter: blur(10px);
            background-color: rgba(150, 150, 150, 0.4); 
        }
    }

    .banner::after {
        content: "";
        transform: skewY(15deg);
        backdrop-filter: blur(10px);
    }

    .hero img {
        width: 50vh;
        margin-left: auto;
        margin-right: auto;
    }
    a {
        color: white;
        white-space: nowrap;
    }
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
