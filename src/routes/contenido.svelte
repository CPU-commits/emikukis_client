<script>
    import dark from "$stores/dark"
</script>
<style>
    .Content {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }

    img {
        border-radius: 10px;
        max-width: 900px;
        width: 100%;
        object-fit: cover;
    }

    h2, i {
        color: var(--color-main);
        margin-bottom: 20px;
    }
</style>

<section class="Content">
    <h2><i class="fa-brands fa-twitch"></i> Twitch</h2>
    <figure>
        <a href="https://www.twitch.tv/emikukis" target="blank" rel="external">
            <img src="/images/twitch.png" alt="">
        </a>
        <figcaption class:DarkCl={$dark}>
            Veme en Twitch
        </figcaption>
    </figure>
    <h2><i class="fa-brands fa-discord"></i> Discord</h2>
    <figure>
        <a href="https://discord.gg/zrCSrmxeyY" target="blank" rel="external">
            <img src="/images/discord.png" alt="">
        </a>
        <figcaption class:DarkCl={$dark}>
            ¡&Uacute;nete a Discord!
        </figcaption>
    </figure>
    <h2><i class="fa-brands fa-youtube"></i> Youtube</h2>
    <figure>
        <a href="https://www.youtube.com/channel/UC9FiQBM0hU4iZeXblu7pmqQ" target="blank" rel="external">
            <img src="/images/youtube.png" alt="">
        </a>
        <figcaption class:DarkCl={$dark}>
            Suscr&iacute;bete a Youtube
        </figcaption>
    </figure>
    <h2><i class="fa-brands fa-tiktok"></i> TikTok</h2>
    <figure>
        <a href="https://www.tiktok.com/@emikukiss" target="blank" rel="external">
            <img src="/images/tiktok.png" alt="">
        </a>
        <figcaption class:DarkCl={$dark}>
            S&iacute;gueme en Tiktok
        </figcaption>
    </figure>
    <h2><i class="fa-brands fa-twitter"></i> Twitter</h2>
    <figure>
        <a href="https://twitter.com/emikukis" target="blank" rel="external">
            <img src="/images/twitter.png" alt="">
        </a>
    </figure>
    <h2><i class="fa-brands fa-instagram"></i> Instagram</h2>
</section>