import { createApp } from "vue";
import "./styles/main.scss";
import App from "./App.vue";
import "locomotive-scroll/dist/locomotive-scroll.min.css";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import nullResponsive from "null-responsive-vue"; // import base css file
import "null-responsive-vue/styles.css";

createApp(App)
    .use(nullResponsive, {
        inputText: "No mobile view available for this site, i don try",
        text_color: "white",
        bg_color: "black",
        breakpoint: 2000,
        imglink: "https://c.tenor.com/fkPxqJwOVhoAAAAC/qforce-stat.gif",
    })
    .mount("#app");
