function clock() {
    const now = new Date();
    console.log(now);

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // Setup canvas
    ctx.save();
    ctx.clearRect(0, 0, 500, 500);
    ctx.translate(250, 250);
    ctx.rotate(-Math.PI / 2);

    // Set some default styles
    ctx.strokeStyle = '#000000';
    ctx.fillStyle = '#f4f4f4';
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';

    // Draw clock face
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 14;
    ctx.strokeStyle = '#800000';
    ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.fill();
    ctx.restore();

    // Draw hour lines
    ctx.save();
    for (let i = 0; i < 12; i++){
        ctx.beginPath();
        ctx.moveTo(100, 0);
        ctx.lineTo(120, 0);
        ctx.rotate(Math.PI / 6); 
        ctx.stroke();
    }
    ctx.restore();

    // Draw minute lines 
    ctx.save();
    ctx.lineWidth = 4;
    for (let i = 0; i < 60; i++){
        if (i % 5 !== 0) {
            ctx.beginPath();
            ctx.moveTo(117, 0);
            ctx.lineTo(120, 0);
            ctx.stroke();
        }
        ctx.rotate(Math.PI / 30); 
    }
    ctx.restore();

    // Creating hands 
    const hr = now.getHours() % 12; 
    const min = now.getMinutes();
    const sec = now.getSeconds();
    console.log(`${hr}:${min}:${sec}`);

    ctx.strokeStyle = '#8000000';


    // Draw hour hand
    ctx.save();
    ctx.rotate((Math.PI / 6) * hr + ((Math.PI / 6) / 60) * min + ((Math.PI / 6) / 3600) * sec);
    // Math.PI / 6hr = 180deg / 6hr = 30deg per hr
    // Math.PI / 6hr => 30deg per hr, 30deg per hr / 60mins = 0.5deg per mins 
    // Math.PI / 6hr => 30deg per hr, 30deg per hr / 3600secs = 0.0083deg per second
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    ctx.lineTo(80, 0);
    ctx.stroke();
    ctx.restore();


    // Draw minute hand
    ctx.save();
    ctx.rotate((Math.PI / 30) * min + ((Math.PI / 30) / 60) * sec);
    //Math.PI / 30 = 180deg / 30mins = 6deg per min 
    //Math.PI / 30 => 6deg per min, 6deg / 60sec = 0.1deg per sec 
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(-28, 0);
    ctx.lineTo(112, 0);
    ctx.stroke();
    ctx.restore();


    // Draw second hand
    ctx.save();
    ctx.rotate((Math.PI / 30) * sec);
    // Math.PI / 30 = 180deg / 30secs = 6deg per second 
    ctx.strokeStyle = '#FF7F50';
    ctx.fillStyle = '#FF7F50';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(-30, 0);
    ctx.lineTo(100, 0);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.restore();
    
    ctx.restore();
    
    requestAnimationFrame(clock);
}

requestAnimationFrame(clock);



