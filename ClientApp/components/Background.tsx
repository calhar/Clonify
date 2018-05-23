interface Color {
    r: number;
    g: number;
    b: number;
}

let colors: Color[] = [
    { r: 0x00, g: 0x7b, b: 0xff },
    { r: 0x66, g: 0x10, b: 0xf2 },
    { r: 0x6f, g: 0x42, b: 0xc1 },
    { r: 0xe8, g: 0x3e, b: 0x8c },
    { r: 0xdc, g: 0x35, b: 0x45 },
    { r: 0xfd, g: 0x7e, b: 0x14 },
    { r: 0xff, g: 0xc1, b: 0x07 },
    { r: 0x28, g: 0xa7, b: 0x45 },
    { r: 0x20, g: 0xc9, b: 0x97 },
    { r: 0x17, g: 0xa2, b: 0xb8 },
    { r: 0x34, g: 0x3a, b: 0x40 },
    { r: 0x00, g: 0x7b, b: 0xff },
    { r: 0x86, g: 0x8e, b: 0x96 },
    { r: 0x28, g: 0xa7, b: 0x45 },
    { r: 0x17, g: 0xa2, b: 0xb8 },
    { r: 0xff, g: 0xc1, b: 0x07 },
    { r: 0xdc, g: 0x35, b: 0x45 }]

function rgb(c: Color){
    let r = Math.floor(c.r);
    let g = Math.floor(c.g);
    let b = Math.floor(c.b);
    return ['rgb(',r,',',g,',',b,')'].join('')
}

export function SetBgGradient() {
    let colorHigh = colors[Math.floor(Math.random() * colors.length)];
    let colorLow: Color = {r: Math.floor(colorHigh.r / 10), g: Math.floor(colorHigh.g / 10), b: Math.floor(colorHigh.b / 10)};
    let bgElement = document.getElementsByClassName('bg-gradient');
    let bgImage = 'background-image: linear-gradient(' + rgb(colorHigh) + ', ' + rgb(colorLow) + ' 85%);';
    (bgElement.length > 0) && bgElement.item(0).setAttribute('style', bgImage);
}