class Options {
    constructor(height, width, bg, fontSize, textAlign, textColor) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
        this.textColor = textColor;
    }

    newElement() {
        let element = document.createElement('div');
        element.textContent = prompt("Введите текст блока: ", "");
        let textCss = `height:${this.height}px; width:${this.width}px;background-color:${this.bg};font-size:${this.fontSize}px;text-align:${this.textAlign};color:${this.textColor}`;
        element.style.cssText = textCss;
        document.body.appendChild(element);
    }
}

let newDiv = new Options(250, 350, "blue", 22, "right", "white");
newDiv.newElement();