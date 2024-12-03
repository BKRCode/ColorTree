const canvas = document.getElementById('ColorTree');
const ctx = canvas.getContext('2d');
const complexitySlider = document.getElementById('complexity');

const treeParams = {
    complexity: 4,
    angleVariation: 20,
    branchLength: 100,
    lineWidthMultiplier: 0.6,
};

function resizeCanvas() {
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.8;
    drawTree();
}

function drawTree() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBranch(canvas.width / 2, canvas.height, -90, treeParams.complexity, treeParams.branchLength);
}

function drawBranch(x, y, angle, depth, length) {
    if (depth === 0) return;

    const x2 = x + Math.cos(angle * Math.PI / 180) * length;
    const y2 = y + Math.sin(angle * Math.PI / 180) * length;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = `hsl(${depth * 30}, 100%, 50%)`;
    ctx.lineWidth = depth * treeParams.lineWidthMultiplier;
    ctx.stroke();

    const angleVar = treeParams.angleVariation;
    const lengthFactor = 0.7;

    drawBranch(x2, y2, angle - angleVar, depth - 1, length * lengthFactor);
    drawBranch(x2, y2, angle + angleVar, depth - 1, length * lengthFactor);
}


complexitySlider.addEventListener('input', (e) => {
    treeParams.complexity = +e.target.value;
    drawTree();
});

window.addEventListener('resize', resizeCanvas);


resizeCanvas();
