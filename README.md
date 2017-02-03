## GetElement experiment with @ViewChild
I now have @ViewChild hard-coded in the Object:
```
    @ViewChild("question1") question1: ElementRef;
    @ViewChild("question2") question2: ElementRef;
```

I would like to create them dynamically, based on the question parameter.
So replace this:
```
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
```

with something like this, but working. :-)
```
    private _checkValue(question: string, value: string) {
 
        @ViewChild(question) question: ElementRef;
 
        // get the right StackLayout
        let container;
        container = this.question.nativeElement;
```
