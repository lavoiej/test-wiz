import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'wizard',  // <wizard></wizard>
  templateUrl: './wizard.component.html'
})
export class WizardComponent {
    questions = {
        "q1": {
            "key": "q1",
            "prev": null,
            "next": "q2"
        },
        "q2": {
            "key": "q2",
            "prev": "q1",
            "next": "q3"
        },
        "q3": {
            "key": "q3",
            "prev": "q2",
            "next": null
        }
    };

    // Ou mettre dans function dans le next / prev () => { return null}

    currentQuestion = this.questions["q1"];

    model = {
        "q1": null,
        "q2": null,
        "q3": null
    };

    constructor(public router: Router) {
        
    }

    prev() {
        
        console.log("PREV");

        if (this.currentQuestion.prev == null) {
            console.log("WTF %");
        } else {
            this.currentQuestion = this.questions[this.currentQuestion.prev];
        }
    }

    next() {
        console.log("NEXT");

        if (this.currentQuestion.next == null) {
            console.log("DONE");
            this.router.navigate(['/about']);

        } else {
            this.currentQuestion = this.questions[this.currentQuestion.next];
        }
    }

    get hasPrev() { return this.currentQuestion.prev != null }

    get diagnostic() { return JSON.stringify(this.model); }  
}