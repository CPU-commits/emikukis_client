<script>
    import Contact from "$components/Contact.svelte"
import dark from "$stores/dark";
</script>

<style>
    .Contact{
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
</style>

<section class="Contact">
    <Contact />
    <span class:DarkCl={$dark}>
        Email:
        <a class:DarkCl={$dark} href="mailto:emixcpartist@gmail.com">emixcpartist@gmail.com</a>
    </span>
    <span class:DarkCl={$dark}>
        Discord:
        Emikukis#6666
    </span>
</section>
