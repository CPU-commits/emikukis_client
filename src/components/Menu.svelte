<script lang="ts">
    export let path: string

    import { onMount } from "svelte"
    import dark from "$stores/dark"

    let openMenu: boolean
    let background: HTMLElement
    let body: HTMLElement

    const toggleMenu = () => openMenu = !openMenu

    onMount(()=>{
        body = document.body
        background.addEventListener('click', () =>{
            openMenu = false
        })
    })

    const ahref = () =>{
        body.style.overflowY = 'initial'
        openMenu = false
    }

    const toggleDark = () =>{
        dark.set(!$dark)
    }
</script>

<style>
    .Header {
        height: 60px;
        width: 100%;
    }

    .Header__container{
        display: flex;
        justify-content: space-around;
        box-sizing: border-box;
        margin: 20px;
        box-sizing: border-box;
    }

    h1{
        font-family: 'Oswald', sans-serif;
        font-size: 2.1rem;
    }

    i, h1 {
        color: var(--color-main);
        cursor: pointer;
    }

    i {
        font-size: 1.2rem;
    }

    .Header__menu {
        display: flex;
        align-items: center;
        margin-left: 10px;
        gap: 15px;
        width: 100px;
    }

    .Header__main {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .Header__media {
        display: flex;
        align-items: center;
        width: 100px;
        gap: 15px;
        margin-right: 10px;
    }

    .Menu{
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        z-index: 9;
        background-color: rgba(0, 0, 0, 0.4);
        visibility: hidden;
    }

    .Menu__container{
        width: 250px;
        background-color: var(--color-background);
        box-shadow: var(--box-shadow);
        height: 100%;
        position: absolute;
        top: 0;
        visibility: hidden;
        left: -250px;
        transition: all 0.4s ease;
    }

    a {
        text-decoration: none;
    }

    .Menu__container header {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        text-align: center;
        margin-top: 20px;
    }

    .Menu__list {
        list-style: none;
        margin-top: 10px;
        padding: 10px;
    }

    ul li {
        display: flex;
        justify-content: flex-start;
        gap: 10px;
        color: var(--color-main);
        padding: 15px;
        border-left: 3px solid transparent;
        transition: all .3s ease;
    }

    ul li:hover{
        border-left: 3px solid var(--color-main);
    }

    .Selected{
        border-left: 3px solid var(--color-main);
    }

    .OpenBg {
        visibility: visible;
    }

    .OpenMenu {
        visibility: visible;
        left: 0;
    }

    @media (max-width: 575.98px) {
        .Header__container{
            margin: 10px;
        }

        .Header__media, .Header__media {
            width: 140px;
        }

        h1{
            font-size: 1.7rem;
        }

        i{
            font-size: 1rem;
        }
    }
</style>

<menu class="Header">
    <div class="Header__container">
        <header class="Header__menu">
            <i on:click={toggleMenu} class="fa-solid fa-bars"></i>
            <i on:click={toggleDark} class="fa-solid fa-moon"></i>
        </header>
        <div class="Header__main">
            <a on:click={ahref} href="/" sveltekit:prefetch>
                <h1>Emikukis</h1>
            </a>
        </div>
        <ul class="Header__media">
            <a title="Twitch" on:click={ahref} href="https://www.twitch.tv/emikukis" target="_blank" rel="external">
                <i class="fa-brands fa-twitch"></i>
            </a>
            <a title="Twitter" on:click={ahref} href="https://twitter.com/emikukis" target="_blank" rel="external">
                <i class="fa-brands fa-twitter"></i>
            </a>
            <a title="Youtube" on:click={ahref} href="https://www.youtube.com/channel/UC9FiQBM0hU4iZeXblu7pmqQ" target="_blank" rel="external">
                <i class="fa-brands fa-youtube"></i>
            </a>
            <a title="Tik Tok" on:click={ahref} href="https://www.tiktok.com/@emikukiss" target="_blank" rel="external">
                <i class="fa-brands fa-tiktok"></i>
            </a>
            <a title="Donaciones" on:click={ahref} href="https://streamlabs.com/emikukis/tip" target="_blank" rel="external">
                <i class="fa-solid fa-coins"></i>
            </a>
        </ul>
    </div>
</menu>

<menu bind:this={background} class="Menu" class:OpenBg={openMenu}>
    <div class:OpenMenu={openMenu} class="Menu__container" class:Dark={$dark}>
        <a on:click={ahref} href="/" sveltekit:prefetch>
            <header>
                <i on:click={toggleMenu} class="fa-solid fa-bars"></i>
                <h1>Emikukis</h1>
            </header>
        </a>
        <ul class="Menu__list">
            <a sveltekit:prefetch on:click={ahref} href="/">
                <li class:Selected={path === '/'}>
                    <i class="fa-solid fa-house-chimney"></i> Inicio
                </li>
            </a>
            <a sveltekit:prefetch on:click={ahref} href="/sobre_mi">
                <li class:Selected={path === '/sobre_mi'}>
                    <i class="fa-solid fa-user-astronaut"></i> Sobre m&iacute;
                </li>
            </a>
            <a sveltekit:prefetch on:click={ahref} href="/contenido">
                <li class:Selected={path === '/contenido'}>
                    <i class="fa-brands fa-twitch"></i> Contenido
                </li>
            </a>
            <a sveltekit:prefetch on:click={ahref} href="/comisiones">
                <li class:Selected={path === '/comisiones'}>
                    <i class="fa-solid fa-pen-ruler"></i> Comisiones
                </li>
            </a>
            <a sveltekit:prefetch on:click={ahref} href="contacto">
                <li class:Selected={path === '/contacto'}>
                    <i class="fa-solid fa-circle-info"></i> Contacto
                </li>
            </a>
        </ul>
    </div>
</menu>