<script lang="ts" context="module">
    export function load({ url }){
        return {
            status: 200,
            props: {
                path: url.pathname,  
            },
        }
    }
</script>

<script lang="ts">
    export let path: string

    import Menu from '$components/Menu.svelte'
</script>

<style>
    .Main {
        width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
    }

    .Main__content{
        max-width: 2000px;
		width: 100%;
    }
</style>

<Menu path={path} />

<main class="Main">
    <section class="Main__content">
        <slot />
    </section>
</main>