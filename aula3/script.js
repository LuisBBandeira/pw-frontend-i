
window.onload = () => {

    let animID=null;
    const button = document.querySelector("button");
    button.onclick = () => {
        if (animID) {
            cancelAnimationFrame(animID);
            animID= null;
            button.innerText = "Start";
        }else{
            draw();
            button.innerText="Stop";

        }
    }


    const canvas = document.querySelector("canvas")
    const ctx = canvas.getContext("2d");

    const width = canvas.width
    const height = canvas.height

    console.log(width , height);

    const colors = ["blue" ,"yellow", "pink" , "gray", "cyan", "purple", "violet", "cadetblue" ]
    const blockWidth = width / colors.length;

    for (let i = 0; i < colors.length; i++) {
        ctx.fillStyle = colors[i];
        ctx.fillRect(blockWidth*i, 0, blockWidth, height);
    }

    const vetor = {
        x: 0,
        y:0,
    }

    const gradient = ctx.createLinearGradient(0, 0, 170, 0);
    gradient.addColorStop("0", "gray");
    gradient.addColorStop("0.5", "cyan");
    gradient.addColorStop("1.0", "red");

    const draw = () => {

        ctx.strokeStyle = "black";
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(vetor.x,vetor.y);
        ctx.stroke();

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(320,0);
        ctx.lineTo(vetor.x,vetor.y);
        ctx.stroke();


        vetor.x +=1
        vetor.y +=0.75

        animID= requestAnimationFrame(draw);
    }

    draw();




    // ctx.strokeStyle = "blue";
    // ctx.lineWidth = 5;
    // ctx.beginPath();
    // ctx.moveTo(100,150);
    // ctx.bezierCurveTo(200,200 , 300 , 200 ,400 , 150);
    // ctx.stroke();
}