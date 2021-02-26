(function() {
    // Add event listener
    document.querySelector("#container_4wd").addEventListener("mousemove", parallax);
    document.querySelector("#container_4wd").addEventListener("mouseleave", resetParallax);

    const elem1 = document.querySelector("#_x31_1");
    const elem2 = document.querySelector("#_x31_0");
    const elem3 = document.querySelector("#_x30_9");
    const elem4 = document.querySelector("#_x30_8");
    const elem5 = document.querySelector("#_x30_7");
    const elem6 = document.querySelector("#_x30_6");
    const elem7 = document.querySelector("#_x30_5");
    const elem8 = document.querySelector("#_x30_4");
    const elem9 = document.querySelector("#_x30_3");
    const elem10 = document.querySelector("#_x30_2");
    const elem11 = document.querySelector("#_x30_1");
    const elem12 = document.querySelector("#land_cruiser");

    // Parallax function
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${ - (_mouseX - _w) * 0.001}%, ${ - (_mouseY - _h) * 0.001}%`;
        let _depth2 = `${ - (_mouseX - _w) * 0.002}%, ${ - (_mouseY - _h) * 0.002}%`;
        let _depth3 = `${ - (_mouseX - _w) * 0.003}%, ${ - (_mouseY - _h) * 0.003}%`;
        let _depth4 = `${ - (_mouseX - _w) * 0.003}%, ${ - (_mouseY - _h) * 0.004}%`;
        let _depth5 = `${ - (_mouseX - _w) * 0.003}%, ${ - (_mouseY - _h) * 0.005}%`;

        elem1.style.transform = `translate(${_depth2})`;
        elem2.style.transform = `translate(${_depth3})`;
        elem3.style.transform = `translate(${_depth4})`;
        elem4.style.transform = `translate(${_depth5})`;
        elem5.style.transform = `translate(${_depth2})`;
        elem6.style.transform = `translate(${_depth3})`;
        elem7.style.transform = `translate(${_depth4})`;
        elem8.style.transform = `translate(${_depth5})`;
        elem9.style.transform = `translate(${_depth2})`;
        elem10.style.transform = `translate(${_depth3})`;
        elem11.style.transform = `translate(${_depth4})`;
        elem12.style.transform = `translate(${_depth1})`;
    }

    // Re-initializes to original position
    function resetParallax(e) {
        elem1.style.transform = `translate(0,0)`;
        elem2.style.transform = `translate(0,0)`;
        elem3.style.transform = `translate(0,0)`;
        elem4.style.transform = `translate(0,0)`;
        elem5.style.transform = `translate(0,0)`;
        elem6.style.transform = `translate(0,0)`;
        elem7.style.transform = `translate(0,0)`;
        elem8.style.transform = `translate(0,0)`;
        elem9.style.transform = `translate(0,0)`;
        elem10.style.transform = `translate(0,0)`;
        elem11.style.transform = `translate(0,0)`;
        elem12.style.transform = `translate(0,0)`;
    }

})();