let disSS=document.getElementById("section");
console.log(disSS.style.display)
if(disSS.style.display!=='none') {
    console.log('A')
    let brojac = 1;
    let g = document.querySelectorAll('.go');
//out.removeChild(g[1])
//out.removeChild(g[2]);
    /*g[1].remove();
    g[2].remove()
    */

    g[1].style.visibility = "hidden";
    g[2].style.visibility = "hidden";
    g[1].style.display = 'none'
    g[2].style.display = 'none'

    document.getElementById("right").addEventListener("click", function right() {

        let slide1 = g[0];
        let slide2 = g[1];
        let slide3 = g[2];
        //brojac++;
        let inside = 0;
        if (brojac == 3) {
            brojac = 1
        } else {
            brojac++;
        }

        if (brojac == 1) {
            g[0].style.transform = "translateX(100%)";
            g[1].style.transform = "translateX(100%)";
            g[2].style.transform = "translateX(100%)";
            g[0].style.display = 'flex'
            g[0].style.visibility = "visible";


            g[1].style.visibility = "hidden";
            g[2].style.visibility = "hidden";
            g[1].style.display = 'none'
            g[2].style.display = 'none'
        }

        if (brojac == 2) {
            g[0].style.transform = "translateX(0%)";
            g[1].style.transform = "translateX(100%)";
            g[2].style.transform = "translateX(100%)";
            g[0].style.visibility = "hidden";
            g[1].style.display = 'flex'
            g[1].style.visibility = "visible";

            g[2].style.visibility = "hidden";
            g[0].style.display = 'none'
            g[2].style.display = 'none'
        }

        if (brojac == 3) {
            g[0].style.transform = "translateX(-100%)";
            g[1].style.transform = "translateX(-100%)";
            g[2].style.transform = "translateX(100%)";
            g[0].style.visibility = "hidden";
            g[1].style.visibility = "hidden";
            g[0].style.display = 'none'
            g[1].style.display = 'none'
            g[2].style.display = 'flex'
            g[2].style.visibility = "visible";


            //brojac=0;
        }
    });
    document.getElementById("left").addEventListener("click", function left() {
        let slide1 = g[0];
        let slide2 = g[1];
        let slide3 = g[2];

        let inside = 0;

        if (brojac == 1) {
            brojac = 3
        } else {
            brojac--;
        }

        if (brojac == 1) {
            g[0].style.transform = "translateX(100%)";
            g[1].style.transform = "translateX(100%)";
            g[2].style.transform = "translateX(100%)";
            g[0].style.display = 'flex'
            g[0].style.visibility = "visible";


            g[1].style.visibility = "hidden";
            g[2].style.visibility = "hidden";
            g[1].style.display = 'none'
            g[2].style.display = 'none'
        }

        if (brojac == 2) {
            g[0].style.transform = "translateX(0%)";
            g[1].style.transform = "translateX(100%)";
            g[2].style.transform = "translateX(100%)";
            g[0].style.visibility = "hidden";
            g[1].style.display = 'flex'
            g[1].style.visibility = "visible";

            g[2].style.visibility = "hidden";
            g[0].style.display = 'none'
            g[2].style.display = 'none'
        }

        if (brojac == 3) {
            g[0].style.transform = "translateX(-100%)";
            g[1].style.transform = "translateX(-100%)";
            g[2].style.transform = "translateX(100%)";
            g[0].style.visibility = "hidden";
            g[1].style.visibility = "hidden";
            g[0].style.display = 'none'
            g[1].style.display = 'none'
            g[2].style.display = 'flex'
            g[2].style.visibility = "visible";


            //brojac=0;
        }
    });

    function right() {
        let slide1 = g[0];
        let slide2 = g[1];
        let slide3 = g[2];
        //brojac++;
        let inside = 0;
        if (brojac == 3) {
            brojac = 1
        } else {
            brojac++;
        }

        if (brojac == 1) {
            g[0].style.transform = "translateX(100%)";
            g[1].style.transform = "translateX(100%)";
            g[2].style.transform = "translateX(100%)";
            g[0].style.visibility = "visible";
            g[1].style.visibility = "hidden";
            g[2].style.visibility = "hidden";
        }

        if (brojac == 2) {
            g[0].style.transform = "translateX(0%)";
            g[1].style.transform = "translateX(0%)";
            g[2].style.transform = "translateX(0%)";
            g[0].style.visibility = "hidden";
            g[1].style.visibility = "visible";
            g[2].style.visibility = "hidden";
        }

        if (brojac == 3) {
            g[0].style.transform = "translateX(-100%)";
            g[1].style.transform = "translateX(-100%)";
            g[2].style.transform = "translateX(-100%)";
            g[0].style.visibility = "hidden";
            g[1].style.visibility = "hidden";
            g[2].style.visibility = "visible";
            //brojac=0;
        }
    }

    function left() {
        let slide1 = g[0];
        let slide2 = g[1];
        let slide3 = g[2];

        let inside = 0;

        if (brojac == 1) {
            brojac = 3
        } else {
            brojac--;
        }

        if (brojac == 1) {
            g[0].style.transform = "translateX(100%)";
            g[1].style.transform = "translateX(100%)";
            g[2].style.transform = "translateX(100%)";
            g[0].style.visibility = "visible";
            g[1].style.visibility = "hidden";
            g[2].style.visibility = "hidden";
        }

        if (brojac == 2) {
            g[0].style.transform = "translateX(0%)";
            g[1].style.transform = "translateX(0%)";
            g[2].style.transform = "translateX(0%)";
            g[0].style.visibility = "hidden";
            g[1].style.visibility = "visible";
            g[2].style.visibility = "hidden";
        }

        if (brojac == 3) {
            g[0].style.transform = "translateX(-100%)";
            g[1].style.transform = "translateX(-100%)";
            g[2].style.transform = "translateX(-100%)";
            g[0].style.visibility = "hidden";
            g[1].style.visibility = "hidden";
            g[2].style.visibility = "visible";
            //brojac=0;
        }
    }

    document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") {
            left()
        } else if (e.key === "ArrowRight") {

            right()
        }
    })
}
let blocks=document.querySelectorAll(".blocks");
const representing=function (entry,observer){
    const [enter]=entry;
    enter.target.style.opacity="1";




}
const Observer=new IntersectionObserver(representing,{
    root: null,
    threshold: 0.15,
})
blocks.forEach(function (items){
    Observer.observe(items);
    items.style.opacity="0";
})