export enum CardAttributes {
    "titleTask" = "titleTask",
    "description" = "description"
}

class CardElement extends HTMLElement{

    titleTask?:string;
    description?:string;

static get observedAttributes(){
    const attrs: Record<CardAttributes, null> = {
        titleTask: null,
        description: null,
    }

    return Object.keys(attrs);
}

attributeChangedCallback(
    propName: CardAttributes,
    _: unknown,
    newValue: string
    ) {
        switch (propName) {
            default:
            this[propName] = newValue;
            break;
        }}


constructor(){
    super();
    this.attachShadow({mode:"open"})
}

connectedCallback(){
    this.render()
}

render(){
    if(this.shadowRoot){
        this.shadowRoot.innerHTML= `
            <div class="card">
                <div class="task">"${this.titleTask}"</div>
                <div class="desc">"${this.description}"</div>
            </div>
        `
    }

}
}

export default CardElement
customElements.define('card-element', CardElement)