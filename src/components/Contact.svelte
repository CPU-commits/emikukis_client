<script>

import dark from "$stores/dark";

</script>
<style>
    form{
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 20px;
        align-items: center;
    }

    .Input {
        padding: 15px;
        width: 100%;
        box-sizing: border-box;
        max-width: 500px;
        -webkit-box-shadow: 6px 6px 0px 0px rgba(166,2,76,1);
        -moz-box-shadow: 6px 6px 0px 0px rgba(166,2,76,1);
        box-shadow: 6px 6px 0px 0px rgba(166,2,76,1);
        border: none;
        border-radius: 5px;
    }

    Input:focus{
        outline: none;
    }

    textarea{
        width: 100%;
        height: 150px;
        resize: none;
    }

    button{
        background-color: var(--color-main);
        cursor: pointer;
        padding: 15px;
        color: white;
        border: none;
    }
</style>

<form>
    <label class:DarkCl={$dark} for="name">Nombre</label>
    <input class="Input" type="text" id="name">
    <label class:DarkCl={$dark} for="email">Email</label>
    <input class="Input" type="email" id="email">
    <label class:DarkCl={$dark} for="message">Mensaje</label>
    <textarea class="Input" id="message" />
    <button type="submit">
        Env&iacute;ar respuesta
    </button>
</form>