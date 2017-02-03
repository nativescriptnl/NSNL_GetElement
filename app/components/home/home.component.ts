import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {Label} from "ui/label";

@Component({
    selector: "home",
    templateUrl: "./components/home/home.component.html"
})

export class HomeComponent implements OnInit {

    @ViewChild("question1") question1: ElementRef;
    @ViewChild("question2") question2: ElementRef;

    answer1: string;
    answer2: string;

    public constructor() {
    }

    public ngOnInit() {
        this.answer1 = '5';
        this.answer2 = '14';
    }

    public check() {
        this._checkValue('question1', this.answer1);
        this._checkValue('question2', this.answer2);
    }

    private _checkValue(question: string, value: string) {
        // get the right StackLayout
        let container;
        switch(question) {
            case 'question1':
                container = this.question1.nativeElement;
                break;
            case 'question2':
                container = this.question2.nativeElement;
                break;
        }

        // get the TextField
        let input = container.getChildAt(1);

        // get the optional error Label
        let error = container.getChildAt(2);

        // check if value < 10
        if (Number(value) < 10) {
            // set TextField color to red
            input.setInlineStyle('border-color: #AE1D28');

            // check if error Label exists
            if (!error) {
                // if not; create and add error Label
                let label = new Label();
                container.addChild(label);
                // get the optional error Label
                error = container.getChildAt(2);
            }

            // set error message in error Label
            error.text = "Too low!";
        }
        else {
            // set TextField color to green
            input.setInlineStyle('border-color: #1ADC1E');
            // check if error Label is displayed
            if (error) {
                // remove the error Label
                container.removeChild(error);
            }
        }
    }

}
