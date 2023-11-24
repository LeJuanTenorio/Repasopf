import { addObserver, appState } from "./store";
import { dispatch } from "./store";
import { addInfo } from "./store/actions";
import { CardAttributes } from "./components/card/card";
import "./components"

class AppContainer extends HTMLElement{

taskData?: any[] = appState.array;

constructor(){
    super();
    this.attachShadow({mode:"open"})
    addObserver(this);
}

connectedCallback(){
    this.render()
    console.log(appState)
}

async addInfo() {
    const task = this.shadowRoot?.querySelector('input[class="task"]') as HTMLInputElement;
    const info = this.shadowRoot?.querySelector('input[class="info"]') as HTMLInputElement;
 
    const title = task.value;
    const description = info.value;
 
    console.log('Title:', title);
    console.log('Description:', description);
 
    if (title && description) {
       dispatch(addInfo(title, description));
    } else {
       console.error('Title and description must be defined.');
    }
 }

renderTaskList(){
    const taskList = this.shadowRoot?.querySelector('.tasks')
    
    const taskData = this.taskData
    taskData?.forEach((data:any) => {
        const card = this.ownerDocument.createElement('card-element')
        card.setAttribute(CardAttributes.titleTask,data.title)
        card.setAttribute(CardAttributes.description,data.description)
        taskList?.appendChild(card);
    });
}

render() {
    if (this.shadowRoot) {
        this.shadowRoot.innerHTML = `
            <form class="form">
                <input placeholder="task" class="task"></input>
                <input placeholder="info" class="info"></input>
                <button type="button" class="button">Add Card</button>
            </form>
            <section class="tasks">
                <div>task</div>
                <div class="taskList"></div>
            </section>
        `;

        this.renderTaskList();

        const form = this.shadowRoot.querySelector('.form');
        form?.addEventListener('submit', (event) => {
            event.preventDefault();
        });

        const button = this.shadowRoot.querySelector('.button');
        button?.addEventListener("click", (event) => {
            event.preventDefault();
            this.addInfo();
            this.renderTaskList();
        });
    }
}
}

customElements.define('app-container', AppContainer)