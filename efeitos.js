const home = document.getElementsByClassName('texto-nome');
const homeDois = document.getElementsByClassName('texto-nome-dois')
const TextoVerde = document.getElementsByClassName('Texto-pequeno')
const navBar = document.getElementsByClassName('nav-bar');
const Button = document.getElementsByClassName('Botoes');
const Foto = document.getElementsByClassName('Foto');

TweenMax.staggerFrom(".nav-bar", 1, {
    opacity: 0, 
    x: -20,
    ease: Power3.easeInOut
}, 0.08)

TweenMax.from(".texto-nome", 1, {
    opacity: 0, 
    y: 20,
    delay: 1,
    ease: Expo.easeInOut
})

TweenMax.from(".texto-nome-dois", 1, {
    opacity: 0, 
    y: 20,
    delay: 1.2,
    ease: Expo.easeInOut
})

TweenMax.from(".Texto-pequeno", 1, {
    opacity: 0, 
    y: 20,
    delay: 0.5,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".Botoes", 1, {
    opacity: 0, 
    x: -20,
    delay: 1.5,
    ease: Power3.easeInOut
}, 0.08)

TweenMax.from(".Foto", 1, {
    opacity: 0, 
    y: -20,
    delay: 2,
    ease: Expo.easeInOut
})

gsap.registerPlugin(ScrollTrigger);

gsap.to(".movimento-texto", {
    y: -110,
    duration: 2,
    scrollTrigger: {
        trigger: ".movimento-texto",
        start: "top 30%"
    }
})

gsap.to(".Scroll-cursos", {
    x: 30,
    duration: 2,
    scrollTrigger: {
        trigger: ".Scroll-cursos",
        start: "top 30%"
    }
})

gsap.to(".efeito-rolagem", {
    x: -30,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".efeito-rolagem",
        start: "top 30%"
    }
})

