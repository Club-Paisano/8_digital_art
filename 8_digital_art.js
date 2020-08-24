const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'butt';
ctx.lineWidth = '50';
ctx.font = '30px Arial';
ctx.fillText('USE AS CANVAS', canvas.width / 2, canvas.height / 2);


// ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;
function handleClick(property){
    if (property !== 'butt'){
        ctx.lineCap = property.value;
    }
}
function handleChange(property){
    if (property !== '50') {
            ctx.lineWidth = property;
            console.log()
		}
}
function draw(e) {
	if (!isDrawing) return;
    console.log(e); //stop the fn from running when mouse up
    ctx.fillStyle = '#ffffff';
		console.log(ctx.fillStyle);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
	ctx.beginPath();
	//start from
	ctx.moveTo(lastX, lastY);
	//go to
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();
	[lastX, lastY] = [e.offsetX, e.offsetY];
	hue++;
	if (hue >= 360) {
		hue = 0;
	}
	// if (ctx.linewidth >= 100 || ctx.width <= 1) {
	// 	direction = !direction;
	// }
	// if (direction) {
	// 	ctx.lineWidth++;
	// } else {
	// 	ctx.lineWidth--;
	// }
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
	isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
    
});
canvas.addEventListener('mouseup', () => (isDrawing = false));
canvas.addEventListener('mouseout', () => (isDrawing = false));
