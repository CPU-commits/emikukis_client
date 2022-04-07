<script lang="ts">
    import Comission from '$components/Comission.svelte'
    import Contact from '$components/Contact.svelte'
    import dark from '$stores/dark'
    import { page } from '$app/stores'
    import 'animate.css'

    const clipBoard = (text: string) => {
        navigator.clipboard.writeText(text)
    }
</script>

<style>
    .Banner{
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        padding: 30px;
    }

    .Banner img {
        max-height: 500px;
    }

    .Banner__text{
        display: grid;
        grid-template-rows: 45px 150px;
        grid-template-areas: 
            "main main main"
            "image text text"
        ;
        align-items: center;
    }

    .Banner__text h1 {
        font-family: 'Oswald', sans-serif;
        white-space: nowrap;
        border-right: 3px solid;
        color: var(--color-main);
        display: block;
        padding: 0px 4px;
        font-size: 2rem;
        margin-bottom: 10px;
        width: 21ch;
        grid-area: main;
        height: 100%;
        animation: typing 1.5s steps(21), blink .5s infinite step-end alternate;
        overflow: hidden;
    }

    @keyframes typing{
        from { width: 0 }
    }

    @keyframes blink {
        50% { border-color: transparent }
    }

    .Banner__text img{
        grid-area: image;
        max-width: 100px;
        height: 100%;
        padding: 10px;
        object-fit: contain;
    }

    .Banner__text p {
        background-color: var(--color-main);
        color: white;
        padding: 8px 30px;
        border-radius: 10px;
        -webkit-box-shadow: 10px 10px 0px 0px rgba(166,2,76,1);
        -moz-box-shadow: 10px 10px 0px 0px rgba(166,2,76,1);
        box-shadow: 10px 10px 0px 0px rgba(166,2,76,1);
        text-align: center;
        grid-area: text;
        width: 200px;
    }

    .Sections {
        display: flex;
        justify-content: center;
        background-color: var(--color-main);
    }

    .Sections a{
        color: white;
        color: white;
        padding: 20px;
        text-decoration: none;
        font-size: 1rem;
    }

    .Sections i {
        color: white;
    }

    .Section, .Commissions {
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    header {
        display: flex;
        gap: 10px;
        align-items: center;
        margin-bottom: 20px;
        position: relative;
        cursor: pointer;
    }

    header span{
        position: absolute;
        left: -30px;
        visibility: hidden;
    }

    header:hover span{
        visibility: visible;
    }

    .Section p {
        max-width: 500px;
    }

    .Section h2, .Commissions h2{
        color: var(--color-main);
    }

    .Section i, .Section span{
        color: var(--color-main);
    }

    .Section p {
        padding: 30px;
    }

    .Section iframe{
        width: 100%;
        max-width: 900px;
    }

    .Comissions__images{
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 20px;
    }

    @media (max-width: 991.98px){
        .Banner{
            padding: 10px;
        }

        .Banner img {
            max-height: 350px;
        }

        .Banner__text p{
            padding: 10px;
            font-size: 0.8rem;
        }

        .Banner__text img {
            max-width: 80px;
        }
    }

    @media(max-width: 767.98px){
        .Banner h1{
            font-size: 1.5rem;
            border-right: 2px solid;
            height: 40px;
        }

        .Banner img {
            max-height: 250px;
        }

        .Banner__text p{
            padding: 7px;
            font-size: 0.7rem;
            -webkit-box-shadow: 6px 6px 0px 0px rgba(166,2,76,1);
            -moz-box-shadow: 6px 6px 0px 0px rgba(166,2,76,1);
            box-shadow: 6px 6px 0px 0px rgba(166,2,76,1);
        }

        .Banner__text img {
            max-width: 50px;
        }

        .Sections a{
            font-size: 0.8rem;
        }

        h2{
            font-size: 1.4rem;
        }

        .Section p{
            padding: 10px;
            font-size: 0.8rem;
        }

        .Section iframe{
            height: 340px;
        }
    }

    @media (max-width: 575.98px) {
        .Banner{
            flex-direction: column;
            align-items: center;
        }

        .Banner h1{
            text-align: center;
        }

        .Banner__text{
            grid-template-rows: 45px 90px;
        }
    }
</style>

<section class="Banner">
    <img class="animate__animated animate__fadeInLeft" 
        src="https://www.owozu.com/wp-content/uploads/2021/12/Hetto_final2.png" alt="Vtuber">
    <div class="Banner__text">
        <h1>¡ Vtuber Emikukis ! - Streamer</h1>
        <img src="https://icones.pro/wp-content/uploads/2021/05/symbole-twitch-logo-icone-violet.png" alt="">
        <p>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et 
            dolore magna aliqua.
        </p>
    </div>
</section>

<section class="Sections">
    <a sveltekit:prefetch href="/sobre_mi"><i class="fa-solid fa-user-astronaut"></i> Sobre m&iacute;</a>
    <a sveltekit:prefetch href="/contenido"><i class="fa-brands fa-twitch"></i> Contenido</a>
    <a sveltekit:prefetch href="/comisiones"><i class="fa-solid fa-pen-ruler"></i> Comisiones</a>
    <a sveltekit:prefetch href="/contacto"><i class="fa-solid fa-circle-info"></i> Contacto</a>
</section>

<section class="Section">
    <header on:click={()=>clipBoard(`${$page.url.origin}/sobre_mi`)}>
        <span class="material-icons material-icons-outlined">
            link
        </span>
        <h2>Sobre m&iacute;</h2>
    </header>
    <p class:DarkCl={$dark}>
        Hey there!
        I'm Emikukis, I'm an anime-style artist
        who make illustrations and Vtuber model art/rigs within Live2d for streamers and such.
        Since July 2021 art and being a vtuber are my full time job and biggest passion :D
    </p>
</section>

<section class="Section">
    <header on:click={()=>clipBoard(`${$page.url.origin}/contenido`)}>
        <span class="material-icons material-icons-outlined">
            link
        </span>
        <h2><i class="fa-brands fa-youtube"></i> Contenido</h2>
    </header>
    <iframe width="942" height="539"
        src="https://www.youtube.com/embed/-Ow0oKeyqlA" title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</section>

<section class="Commissions">
    <header on:click={()=>clipBoard(`${$page.url.origin}/comisiones`)}>
        <span class="material-icons material-icons-outlined">
            link
        </span>
        <h2>Comisiones</h2>
    </header>
    <section class="Comissions__images">
        <Comission comission={{like: true, image: "https://static.wixstatic.com/media/178f35_3ce06aab481c4e31adc83675a086c082~mv2.png/v1/fit/w_1164,h_375,q_90/178f35_3ce06aab481c4e31adc83675a086c082~mv2.png"}} />
        <Comission comission={{like: false, image: "https://static.wixstatic.com/media/178f35_5ab782084b0d48d59e9dc1f542d723e5~mv2.png/v1/fit/w_1164,h_375,q_90/178f35_5ab782084b0d48d59e9dc1f542d723e5~mv2.png"}} />
        <Comission comission={{like: true, image: "https://static.wixstatic.com/media/178f35_fa2280e34a114df09302681f940516e6~mv2.png/v1/fit/w_1164,h_560,q_90/178f35_fa2280e34a114df09302681f940516e6~mv2.png"}} />
        <Comission comission={{like: false, image: "https://static.wixstatic.com/media/178f35_88cea3180b6346a8a49d169cbf6e80c5~mv2.png/v1/fit/w_1164,h_375,q_90/178f35_88cea3180b6346a8a49d169cbf6e80c5~mv2.png"}} />
    </section>    
</section>

<section class="Section">
    <header on:click={()=>clipBoard(`${$page.url.origin}/contacto`)}>
        <span class="material-icons material-icons-outlined">
            link
        </span>
        <h2>Contacto</h2>
    </header>
    <Contact />
</section>