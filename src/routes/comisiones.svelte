<script lang="ts">
    import Comission from "$components/Comission.svelte";
    import ComissionMenu from "$components/ComissionMenu.svelte"
    import dark from "$stores/dark"
    import { onMount } from "svelte"
    
    let mounted = false

    onMount(()=>{
        mounted = true
    })
</script>

<style>
    .Comissions{
        padding: 30px 50px;
    }
    
    .Comissions__content {
        margin-left: 80px;
    }

    h2 {
        margin-top: 10px;
        color: var(--color-main);
        margin-bottom: 20px;
    }

    .Portfolio{
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 20px;
    }

    i {
        color: var(--color-main);
    }

    table {
        margin-top: 10px;
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 10px;
    }

    table td {
        padding: 10px;
    }

    table tr td:first-child{
        background-color: var(--color-main);
        color: white;
    }

    ul{
        padding: 25px;
    }

    ul li{
        padding: 10px;
    }

    .Norms ul {
        margin-top: 15px;
        padding-left: 50px;
        border-left: 3px solid var(--color-main);
    }

    .Process {
        margin-top: 20px;
        margin-bottom: 200px;
    }

    @media(max-width: 767.98px){
        h2{
            font-size: 1.4rem;
        }

        h3 {
            font-size: 1rem;
        }

        li, td, small {
            font-size: 0.8rem;
        }
    }

    @media (max-width: 575.98px) {
        .Comissions {
            padding: 20px;
        }
    }
</style>

<section class="Comissions">
    {#if mounted}
        <ComissionMenu />
    {/if}
    <section class="Comissions__content">
        <article id="portafolio">
            <h2>Portafolio</h2>
            <section class="Portfolio">
                <Comission comission={{like: true, image: "https://static.wixstatic.com/media/178f35_3ce06aab481c4e31adc83675a086c082~mv2.png/v1/fit/w_1164,h_375,q_90/178f35_3ce06aab481c4e31adc83675a086c082~mv2.png"}} />
                <Comission comission={{like: false, image: "https://static.wixstatic.com/media/178f35_5ab782084b0d48d59e9dc1f542d723e5~mv2.png/v1/fit/w_1164,h_375,q_90/178f35_5ab782084b0d48d59e9dc1f542d723e5~mv2.png"}} />
                <Comission comission={{like: true, image: "https://static.wixstatic.com/media/178f35_fa2280e34a114df09302681f940516e6~mv2.png/v1/fit/w_1164,h_560,q_90/178f35_fa2280e34a114df09302681f940516e6~mv2.png"}} />
                <Comission comission={{like: false, image: "https://static.wixstatic.com/media/178f35_88cea3180b6346a8a49d169cbf6e80c5~mv2.png/v1/fit/w_1164,h_375,q_90/178f35_88cea3180b6346a8a49d169cbf6e80c5~mv2.png"}} />
            </section>
        </article>
        <article id="precios">
            <h2>Precios</h2>
            <span class:DarkCl={$dark}>Los precios se cobraran en <i class="fa-solid fa-euro-sign"></i></span>
            <table >
                <tr>
                    <td>Fondo png/sin fondo</td>
                    <td class:DarkCl={$dark}>Gratis</td>
                </tr>
                <tr>
                    <td>Accesorios, objetos y animales adicionales</td>
                    <td class:DarkCl={$dark}>10-50<i class="fa-solid fa-euro-sign"></i></td>
                </tr>
                <tr>
                    <td>Fondo</td>
                    <td class:DarkCl={$dark}>5-100<i class="fa-solid fa-euro-sign"></i></td>
                </tr>
                <tr>
                    <td>Comisiones NSFW</td>
                    <td class:DarkCl={$dark}>Se cobrar&aacute;n <i>1.5</i> veces m&aacute;s de comisiones habituales</td>
                </tr>
            </table>
            <small class:DarkCl={$dark}>
                * No se aplica a los emoticones / insignias / alertas / paneles de Twitch
            </small>
        </article>
        <article  id="terminos" >
            <h2>T.O.S</h2>
            <h3 class:DarkCl={$dark}>Informaci&oacute;n general</h3>
            <ul >
                <li class:DarkCl={$dark}>Puede volver a publicar mis trabajos con el <i>crédito</i> debidamente otorgado.</li>
                <li class:DarkCl={$dark}>Soy dueño del trabajo de una manera que puedo publicarlo en las redes sociales o presentarlo en otro lugar si no se discutió específicamente de antemano (si se discute, no publicaré nada relacionado con la comisión hasta que esté dispuesto a hacerlo público usted mismo o después de su "debut ”)</li>
                <li class:DarkCl={$dark}>
                    Puedo cancelar o rechazar su pedido en cualquier momento si el entorno de trabajo no cumple con mis estándares o si no me gusta la actitud del cliente. Puedo iniciar un reembolso en este caso
                </li>
                <li class:DarkCl={$dark}>No estoy a cargo de enviar WIP a menos que me lo pidan o sienta la necesidad de hacerlo, pero siempre puede solicitar WIP para que los publique en las redes sociales o simplemente para verificar cómo se ve la modelo. También puede solicitar cambios en cualquier moment</li>
                <li class:DarkCl={$dark}>...</li>
            </ul>
        </article>
        <article  class="Norms" id="normas">
            <h2>Normas</h2>
            <h3 class:DarkCl={$dark}>Informaci&oacute;n que necesitas saber</h3>
            <ul>
                <li class:DarkCl={$dark}>Pagos mediante a <i>Paypal</i>.</li>
                <li class:DarkCl={$dark}>Se deberá entregar el pago antes de empezar a realizar la ilustración</li>
                <li class:DarkCl={$dark}>Si desea prioridad en la waitlist tendrás que pagar un precio extra 100€.</li>
                <li class:DarkCl={$dark}>También puedes contactarme correo: Emixcpartist@gmail.com</li>
            </ul>
            <section class="Process">
                <h3 class:DarkCl={$dark}>Proceso</h3>

            </section>
        </article>
    </section>
</section>