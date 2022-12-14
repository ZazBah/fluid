const settings = {
    particles: {
        number: {
            value: 70,
            density: {
                enable: true,
                value_area: 1000
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.2,
            random: true,
            anim: {
                enable: false
            }
        },
        size: {
            value: 3,
            random: false
        },
        line_linked: {
            enable: true,
            distance: 100,
            color: "#ffffff",
            opacity: 0.3,
            width: 1
        },
        move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "bounce",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: false
            },
            onclick: {
                enable: false
            },
            resize: true
        }
    },
    retina_detect: true
};
particlesJS("particle-js", settings, function () {
    console.log("callback - particles.js config loaded");
});
particlesJS("particle-js-user", settings, function () {
    console.log("callback - particles.js config loaded");
});
particlesJS("particle-js-details", settings, function () {
    console.log("callback - particles.js config loaded");
});