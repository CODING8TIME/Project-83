var mouseevent="empty";
var last_x, last_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_line=1;
canvas.addEventListener("mousedown", myMouseDown);

function myMouseDown(e){
    color=document.getElementById("color").value;
    width_line=document.getElementById("line_width").value;
    mouseevent="mousedown";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;
    if(mouseevent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_line;
        console.log("last_x="+last_x+", last_y="+last_y);
        ctx.moveTo(last_x, last_y);
        console.log("current_x="+current_x+", current_y"+current_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
    }
    last_x=current_x;
    last_y=current_y;
}

canvas.addEventListener("mouseUp", myMouseUp);
function myMouseUp(e){
    mouseevent="mouseUp";
}

canvas.addEventListener("mouseleave", mymouseLeave);
function mymouseLeave(e){
    mouseevent="mouseleave";
}

function clear_area(){
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
}