import { boton } from './button.js';
window.customElements.define("time-button", boton);
//Profile
class profile extends HTMLElement{
    constructor(){
        super();
        this.userImage = this.getAttribute("userImage");
        this.userName = this.getAttribute("userName");
        this.attachShadow( { mode: "open" } );
    }
    static get observedAttributes(){
        return [ 'userImage', 'userName'];
    }
    attributesChangesCallback(attr, oldVa, newVa){
        switch(attr){
            case 'userImage':
                this.userImage = newVa;
                break;
            case 'userName':
                this.userName = newVa;
                break;
            default:
                console.error(Error('Error'));
                break;
        }
    }
    style(){
        return`
        <style>
            :host{
                box-sizing: border-box;
                margin: 0;
            }
            ::slotted([space]){
                display: flex;
                justify-content: space-around;
                width: 90%;
            }
            .cont{
                width: 90vw;
                max-width: 410px;
                min-width: 265px;
                height: 200px;
                border-radius: 12px;
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: hsl(235, 46%, 20%);
            }
            .user_info{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 70%;
                border-radius: 12px;
                color: white;
                font-weight: 300;
                background-color: hsl(246, 80%, 60%);
            }
            .user_info div{
                width: 55%;
            }
            .report{
                font-size: 16px;
                font-weight: 400;
                color: hsl(236, 100%, 87%);
            }
            .user_info p {
                margin: 0px 0px 10px 0px;
            }
            figure{
                margin: 0px;
            }
            .user_name {
                font-size: 24px;
            }
            .user_image{
                width: 80px;
                border: 3px solid white;
                border-radius: 50%;
                margin: 0 25px 0 0;
                box-sizing: border-box;
            }
            section .buttons{
                width: 100%;
                height: 30%;
                display: flex;
                justify-content: center;
            }
            @media (min-width: 600px){
                .cont{
                    width: 95vw;
                    max-width: 768px;
                    display: flex;
                    flex-direction: row;
                }
                ::slotted([space]) {
                    display: flex;
                    justify-content: space-around;
                    width: 50%;
                    flex-direction: column;
                }
                .user_info{
                    height: 100%;
                    border-top-right-radius: 7px;
                    border-bottom-right-radius: 7px;
                }
                .user_info img{
                    width: 100px;
                    margin-right: 30px;
                }
                .user_name{
                    font-size: 1.7rem;
                }
                section .buttons{
                    width: 50%;
                    height: 200px;
                    flex-direction: column;
                    text-align: center;
                    align-items: center;
                }
            }
            @media (min-width: 1024px){
                .cont{
                    width: 100%;
                    max-width: 250px;
                    min-width: 224px;
                    flex-direction: column;
                    height: 95%;
                    margin: 0;
                }
                .user_info{
                    box-sizing: border-box;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                    padding: 30px;
                    height: 67%;
                }
                .user_info img{
                    width: 80px;
                    margin: 0px 30px 30px 0px;
                }
                .report{
                    font-size: 1rem;
                    font-weight: 400;
                }
                .user_name{
                    font-weight: 300;
                    font-size: 2.3rem;
                }
                section .buttons{
                    width: 100%;
                    height: 33%;
                    align-items: flex-start;
                }
            }
        </style>
        `
    }
    getTemplate(){
        let container = document.createElement('template');
        container.innerHTML = `
        <section class="cont">
            <div class="user_info">
                <figure>
                    <img class="user_image" src="${this.userImage}" alt="Photo of ${this.userName}">
                </figure>
                <div>
                    <p class="report">Report for</p>
                    <p class="user_name">${this.userName}</p>
                </div>
            </div>
            <section class="buttons"><slot name=contMain></slot></section>
        </section>
        ${this.style()}`;
        return container;
    }
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback(){
        this.render();
    }
}
window.customElements.define("user-profile", profile);
