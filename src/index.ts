import { addObserver, appState } from "./store";
import { dispatch } from "./store";
import { addInfo } from "./store/actions";
import { CardAttributes } from "./components/card/card";
import "./components"
import { getFromDatabase, addToDataBase } from "./utils/firebase";

class AppContainer extends HTMLElement{

constructor(){
    super();
    this.attachShadow({mode:"open"})
    addObserver(this);
}

async updateAppState(){

    const databaseRetrieve = async () => {
        try{
            const database = await getFromDatabase();
            console.log("this is database" + database);
            return database
            
        }
        catch{console.log("mamaguevo")}
    }

    const dataFromApp =async () => {
        const dataArray = await databaseRetrieve();
        if(dataArray!==undefined){
            dispatch(addInfo(dataArray))
            const read = appState.array;
            console.log("appstate is" + read)
            return read
        }
    }
        
     dataFromApp().then((taskData)=>{
        
        const taskList = this.shadowRoot?.querySelector('.tasks')
        taskData?.forEach((data:any) => {
            console.log("porf" + data);
            const card = this.ownerDocument.createElement('card-element')
            card.setAttribute(CardAttributes.titleTask,data.title)
            card.setAttribute(CardAttributes.description,data.description)
            taskList?.appendChild(card);
        })
    })
}

connectedCallback(){
    this.render();
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
       dispatch(addToDataBase(title, description));
    } else {
       console.error('Title and description must be defined.');
    }
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

        const form = this.shadowRoot.querySelector('.form');
        form?.addEventListener('submit', (event) => {
            event.preventDefault();
        });

        const button = this.shadowRoot.querySelector('.button');
        button?.addEventListener("click", (event) => {
            event.preventDefault();
            this.addInfo();
            this.updateAppState();
        });
    }
}
}

customElements.define('app-container', AppContainer)