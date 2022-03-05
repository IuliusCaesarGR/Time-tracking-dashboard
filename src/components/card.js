window.customElements.define('card-session', class session extends HTMLElement{
    constructor(){
        super();
        this.backColor = this.getAttribute('backColor');
        this.icon = this.getAttribute('icon');
        this.title = this.getAttribute('title');
        this.attachShadow({ mode: 'open'});
    }
    static get observedAttribute(){
        return ['backColor', 'icon', 'title'];
    }
    attributesChangesCallback(attribute, oldValue, newValue){
        switch(attribute){
            case 'backColor':
                this.backColor = this.setAttribute(newValue);
            break;
            case 'hours':
                this.hours = newValue;
            break;
            case 'last':
                this.lastHours = newValue;
            break;
            default:
                console.error(Error('Error'));
            break;
        }
    }
    styles(){
        return `
        <style>
            :host{
                color: white;
                width: 90%;
                max-width: 410px;
                min-width: 265px;
                border-radius: 12px;
            }
            .main{
                width: 100%;
                height: 65px;
                border-radius: 12px;
                z-index: 10;
            }
            .main img{
                width: 73px;
                position: relative;
                left: 100%;
                transform: translate(-100px, 0px);
                object-fit: cover;
                height: 50px;
            }
            .main img:hover{
                background-color: transparent;
            }
            .statistics{
                width: 100%;
                height: 130px;
                position: relative;
                bottom: 30px;
                z-index: 1;
                background-color: hsl(235, 46%, 20%);
                border-radius: 12px;
                padding: 25px 20px 25px 25px;
                box-sizing: border-box;
                cursor: pointer;
            }
            :hover{
                background-color: hsl(236, 46%, 30%)
            }
            .head{
                display: flex;
                justify-content: space-between;
            }
            .head figure{
                width: 21px;
                margin: 0;
            }
            .head figure :hover{
                cursor: pointer;
            }
            .head p{
                font-size: 18px;
                font-weight: 500;
                margin: 0;
            }
            .date{
                display: flex;
                margin-top: 20px;
                justify-content: space-between;
                align-items: center;
            }
            #hour{
                font-size: 35px;
                font-weight: 300;
            }
            #last{
                color: hsl(236, 100%, 87%);
                font-size: 15px;
            }
            .orange{
                background-color: hsl(15, 100%, 70%);
            }
            .blue{
                background-color: hsl(195, 74%, 62%);
            }
            .red{
                background-color: hsl(348, 100%, 68%);
            }
            .green{
                background-color: hsl(145, 58%, 55%);
            }
            .purple{
                background-color: hsl(264, 64%, 52%);
            }
            .yellow{
                background-color: hsl(43, 84%, 65%);
            }
            @media (min-width: 1024px){
                :host{
                    width: 100%;
                    min-width: 224px;
                    max-width: 280px;
                }
                .statistics{
                    height: 200px;
                    bottom: 25px;
                    align-items: center;
                }
                .date{
                    margin-top: 45px;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: space-between;
                    width: 100%;
                    height: 74px;
                }
                .main img {
                        width: 71px;
                        transform: translate(-90px, 0px);
                }
                #hour{
                    font-size: 2.7rem;
                }
            }
        </style>
        `;
    }
    Template(){
        let card = document.createElement('template');
        card.innerHTML = `
            <div class="main ${this.backColor}">
                <img src="${this.icon}" alt="icono of ${this.title}">
            </div>
            <section class="statistics"">
                <div class="head">
                    <p>${this.title}</p>
                    <figure><img src="/images/icon-ellipsis.svg" alt="icon of ellipsis"></figure>
                </div>
                <div class="date">
                    <slot name="hour" id="hour"><p></p></slot>
                    <slot name="last" id="last"><p></p></slot>
                </div>
            </section>
        ${this.styles()}`;
        return card;
    }
    renderTemplate(){
        this.shadowRoot.appendChild(this.Template().content.cloneNode(true));
    }
    connectedCallback(){
        this.renderTemplate();
    }
})