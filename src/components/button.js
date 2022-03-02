//button
export class boton extends HTMLElement{
    constructor(){
        super();
        this.time = this.getAttribute('time');
        this.attachShadow( { mode: "open" } );
    }
    static get observedAttributes(){
        return [ "time" ];
    }
    attributeChangedCallback(attribute, oldvalue, newvalue){
        this.time = newvalue;
    }
    style(){
        return `
        <style>
        ::slotted([white]){
            color: white;
        }
        button{
            display: inline-block;
            color: hsl(235, 45%, 61%);
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
    hi(){
        this.addEventListener('click', hello)
        function hello(){
            console.log('¡Hello, World!')
        }
    }
    template(){
        let boton = document.createElement('template');
        boton.innerHTML = `
            <button onclick="${this.hi()}">${this.time}</button>
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
