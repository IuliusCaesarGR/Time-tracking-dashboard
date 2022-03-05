//button
export class boton extends HTMLElement{
    constructor(){
        super();
        this.time = this.getAttribute('time');
        this.attachShadow( { mode: "open" } );
    }
    static get observedAttributes(){
        return [ 'time'];
    }
    attributeChangedCallback(attribute, oldvalue, newvalue){
        switch(attribute){
            case 'time':
                this.time = newvalue;
                break;
            default:
                console.log('Error');
                break;
        }
    }
    style(){
        return `
        <style>
        button{
            color: hsl(235, 45%, 61%);
            display: inline-block;
            margin-top: 20px;
            font-weight: 400;
            border: none;
            font-size: 18px;
            background-color: hsl(235, 46%, 20%);
            width: 70px;
            height: auto;
        }
        button:hover{
            color: white;
        }
        @media (min-width: 600px){
            button{
                margin: 0px;
                height: 60px;
            }
        }
        @media (min-width: 1024px){
            button{
                text-align: start;
                height: 45px;
            }
        }
        </style>
        `;
    }
    template(){
        let boton = document.createElement('template');
        boton.innerHTML = `
            <button>${this.time}</button>
            ${this.style()}
        `;
        return boton;
    }
    render(){
        this.shadowRoot.appendChild(this.template().content.cloneNode(true));
    }
    connectedCallback(){
        this.render();
    }
}
