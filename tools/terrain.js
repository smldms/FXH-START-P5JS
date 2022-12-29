function terrain(maxH, relief, clr1, clr2, dens, factor, sclX, sclY) {
    rectMode(CENTER)
    for (let y = maxH; y < height; y += sclY) {
        let row = [];
        row.push(createVector(0, y));
        for (let x = 0; x < width + sclX; x += sclX) {
            strokeWeight(fxrand() * 0.5)
            stroke(fxrand() * 250)
            let n = noise(x * relief, y * relief);
            let ampli = map(y, 0, height, factor, 0) * dens;
            let off = y + map(n, 0, 1, -ampli, ampli);
            row.push(createVector(x, off));
        }
        row.push(createVector(width, height));
        row.push(createVector(0, height));
        let lvl = map(y, maxH, height, 0, 1);
        let c = lerpColor(color(clr1), color(clr2), lvl);
        fill(c);


        beginShape();
        for (let v of row) {
            // rect(v.x, v.y, height/100,height/100);
            vertex(v.x, v.y);
        }
        endShape(CLOSE);
    }
}
