class Shape{
    constructor(clr, txt, txtClr) {
        this.clr = clr;
        this.txt = txt;
        this.txtClr = txtClr;
      }
}
class Circle extends Shape{
    constructor(clr, txt, txtClr) {
        super(clr, txt, txtClr)
    }

    render(){
        return `<circle cx="25" cy="75" r="20" fill='${this.clr}'/>  
        <svg width="150" height="150" xmlns="http://www.w3.org/2000/svg">
        <text x="100" y="100" fill="${this.txtClr}" text-anchor="middle">${this.txt}</text>
    </svg>`;
    }
}

class Square extends Shape{
    constructor(clr, txt, txtClr) {
        super(clr, txt, txtClr)
    }
    render() {
        return `>
        <rect x="90" y="40" width="120" height="120" fill='${this.clr}'/>
        <svg width="150" height="150" xmlns="http://www.w3.org/2000/svg">
        <text x="100" y="100" fill="${this.txtClr}" text-anchor="middle">${this.txt}</text>
    </svg>`;

    }
}

class Triangle extends Shape{
    constructor(clr, txt, txtClr) {
        super(clr, txt, txtClr)
    }
    render() {
        return `<polygon points="100,10 150,190 50,190" fill="${this.clr}" />  
        <svg width="150" height="150" xmlns="http://www.w3.org/2000/svg">
        <text x="100" y="100" fill="${this.txtClr}" text-anchor="middle">${this.txt}</text>
    </svg>`;
    }
}


module.exports = { Circle, Triangle, Square };
