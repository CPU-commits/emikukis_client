<script lang="ts">
    import dark from "$stores/dark"
</script>

<style>
    aside {
        top: 0;
        display: flex;
        flex-direction: column;
        gap: 50px;
        position: fixed;
        height: 100%;
        align-items: center;
        justify-content: center;
    }
</style>

<aside>
    <a href="#portafolio">
        <i class:DarkCl={$dark} class="fa-solid fa-briefcase"></i>
    </a>
    <a href="#precios">
        <i class:DarkCl={$dark} class="fa-solid fa-money-bill-1-wave"></i>
    </a>
    <a href="#terminos">
        <span class:DarkCl={$dark} class="material-icons material-icons-outlined">
            gavel
        </span>
    </a>
    <a href="#normas">
        <i class:DarkCl={$dark} class="fa-solid fa-timeline"></i>
    </a>
</aside>