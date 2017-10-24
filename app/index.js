import "./styles/styles.scss";
console.log("entry point");

const showAlert = () => {
    console.log(window.test);
    console.log("Hello, world!");
}

window.showAlert = showAlert;