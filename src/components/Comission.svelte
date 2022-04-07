<script lang="ts">
    export let comission

    let button: HTMLButtonElement

    const toggleLike = () =>{
        comission.like = !comission.like
        if(!comission.like){
            button.classList.remove('LikeAnimation')
        }else{
            button.classList.add('LikeAnimation')
        }
    }
</script>

<style>
    .Comission{
        position: relative;
    }

    img{
        border-radius: 10px;
        height: 500px;
        object-fit: contain;
        -webkit-box-shadow: 10px 10px 0px 0px rgba(166,2,76,1);
        -moz-box-shadow: 10px 10px 0px 0px rgba(166,2,76,1);
        box-shadow: 10px 10px 0px 0px rgba(166,2,76,1);
    }

    figcaption {
        position: absolute;
        color: white;
        top: 20px;
        font-size: 1.2rem;
        left: 20px;
        font-family: 'Oswald', sans-serif;
    }

    button {
        cursor: pointer;
        position: absolute;
        bottom: 10px;
        background-color: transparent;
        border: none;
        left: 10px;
        bottom: 20px;
    }

    i {
        color: white;
        font-size: 20px;
    }

    .Like i{
        color: var(--color-main);
    }

    @media(max-width: 767.98px){
        img {
            height: 300px;
        }

        figcaption {
            top: 10px;
            left: 10px;
            font-size: 1.2rem;
        }
    }
</style>

<article class="Comission">
    <figure>
        <img src={comission.image} alt="">
        <figcaption>Titulo-1</figcaption>
    </figure>
    <button on:click={toggleLike} bind:this={button} class:Like={comission.like}>
        <i class="fa-solid fa-heart"></i>
    </button>
</article>