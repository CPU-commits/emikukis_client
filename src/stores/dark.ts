import { browser } from "$app/env"
import { writable } from "svelte/store"

const defaultValue = false
const initialValue = browser
    ? JSON.parse(window.localStorage.getItem('dark'))
    ?? defaultValue
    : defaultValue

export const dark = writable(initialValue)
export const darkItems = writable(0)

dark.subscribe((value) => {
    if(browser) {
        if(value){
            document.body.classList.add('Dark')
        }else{
            document.body.classList.remove('Dark')
        }
        window.localStorage.setItem('dark', value)
    }
})

export { dark as default }
