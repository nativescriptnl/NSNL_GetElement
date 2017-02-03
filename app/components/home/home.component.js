"use strict";
var core_1 = require("@angular/core");
var label_1 = require("ui/label");
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.answer1 = '5';
        this.answer2 = '14';
    };
    HomeComponent.prototype.check = function () {
        this._checkValue('question1', this.answer1);
        this._checkValue('question2', this.answer2);
    };
    HomeComponent.prototype._checkValue = function (question, value) {
        // get the right StackLayout
        var container;
        switch (question) {
            case 'question1':
                container = this.question1.nativeElement;
                break;
            case 'question2':
                container = this.question2.nativeElement;
                break;
        }
        // get the TextField
        var input = container.getChildAt(1);
        // get the optional error Label
        var error = container.getChildAt(2);
        // check if value < 10
        if (Number(value) < 10) {
            // set TextField color to red
            input.setInlineStyle('border-color: #AE1D28');
            // check if error Label exists
            if (!error) {
                // if not; create and add error Label
                var label = new label_1.Label();
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
    };
    return HomeComponent;
}());
__decorate([
    core_1.ViewChild("question1"),
    __metadata("design:type", core_1.ElementRef)
], HomeComponent.prototype, "question1", void 0);
__decorate([
    core_1.ViewChild("question2"),
    __metadata("design:type", core_1.ElementRef)
], HomeComponent.prototype, "question2", void 0);
HomeComponent = __decorate([
    core_1.Component({
        selector: "home",
        templateUrl: "./components/home/home.component.html"
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXVFO0FBQ3ZFLGtDQUErQjtBQU8vQixJQUFhLGFBQWE7SUFRdEI7SUFDQSxDQUFDO0lBRU0sZ0NBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFTSw2QkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU8sbUNBQVcsR0FBbkIsVUFBb0IsUUFBZ0IsRUFBRSxLQUFhO1FBQy9DLDRCQUE0QjtRQUM1QixJQUFJLFNBQVMsQ0FBQztRQUNkLE1BQU0sQ0FBQSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDZCxLQUFLLFdBQVc7Z0JBQ1osU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO2dCQUN6QyxLQUFLLENBQUM7WUFDVixLQUFLLFdBQVc7Z0JBQ1osU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO2dCQUN6QyxLQUFLLENBQUM7UUFDZCxDQUFDO1FBRUQsb0JBQW9CO1FBQ3BCLElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFcEMsK0JBQStCO1FBQy9CLElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFcEMsc0JBQXNCO1FBQ3RCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLDZCQUE2QjtZQUM3QixLQUFLLENBQUMsY0FBYyxDQUFDLHVCQUF1QixDQUFDLENBQUM7WUFFOUMsOEJBQThCO1lBQzlCLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDVCxxQ0FBcUM7Z0JBQ3JDLElBQUksS0FBSyxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7Z0JBQ3hCLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzFCLCtCQUErQjtnQkFDL0IsS0FBSyxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEMsQ0FBQztZQUVELG1DQUFtQztZQUNuQyxLQUFLLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztRQUM1QixDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRiwrQkFBK0I7WUFDL0IsS0FBSyxDQUFDLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQzlDLG9DQUFvQztZQUNwQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNSLHlCQUF5QjtnQkFDekIsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFFTCxvQkFBQztBQUFELENBQUMsQUFuRUQsSUFtRUM7QUFqRTJCO0lBQXZCLGdCQUFTLENBQUMsV0FBVyxDQUFDOzhCQUFZLGlCQUFVO2dEQUFDO0FBQ3RCO0lBQXZCLGdCQUFTLENBQUMsV0FBVyxDQUFDOzhCQUFZLGlCQUFVO2dEQUFDO0FBSHJDLGFBQWE7SUFMekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSx1Q0FBdUM7S0FDdkQsQ0FBQzs7R0FFVyxhQUFhLENBbUV6QjtBQW5FWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TGFiZWx9IGZyb20gXCJ1aS9sYWJlbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJob21lXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbFwiXG59KVxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBAVmlld0NoaWxkKFwicXVlc3Rpb24xXCIpIHF1ZXN0aW9uMTogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwicXVlc3Rpb24yXCIpIHF1ZXN0aW9uMjogRWxlbWVudFJlZjtcblxuICAgIGFuc3dlcjE6IHN0cmluZztcbiAgICBhbnN3ZXIyOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmFuc3dlcjEgPSAnNSc7XG4gICAgICAgIHRoaXMuYW5zd2VyMiA9ICcxNCc7XG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrKCkge1xuICAgICAgICB0aGlzLl9jaGVja1ZhbHVlKCdxdWVzdGlvbjEnLCB0aGlzLmFuc3dlcjEpO1xuICAgICAgICB0aGlzLl9jaGVja1ZhbHVlKCdxdWVzdGlvbjInLCB0aGlzLmFuc3dlcjIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NoZWNrVmFsdWUocXVlc3Rpb246IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuICAgICAgICAvLyBnZXQgdGhlIHJpZ2h0IFN0YWNrTGF5b3V0XG4gICAgICAgIGxldCBjb250YWluZXI7XG4gICAgICAgIHN3aXRjaChxdWVzdGlvbikge1xuICAgICAgICAgICAgY2FzZSAncXVlc3Rpb24xJzpcbiAgICAgICAgICAgICAgICBjb250YWluZXIgPSB0aGlzLnF1ZXN0aW9uMS5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncXVlc3Rpb24yJzpcbiAgICAgICAgICAgICAgICBjb250YWluZXIgPSB0aGlzLnF1ZXN0aW9uMi5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZ2V0IHRoZSBUZXh0RmllbGRcbiAgICAgICAgbGV0IGlucHV0ID0gY29udGFpbmVyLmdldENoaWxkQXQoMSk7XG5cbiAgICAgICAgLy8gZ2V0IHRoZSBvcHRpb25hbCBlcnJvciBMYWJlbFxuICAgICAgICBsZXQgZXJyb3IgPSBjb250YWluZXIuZ2V0Q2hpbGRBdCgyKTtcblxuICAgICAgICAvLyBjaGVjayBpZiB2YWx1ZSA8IDEwXG4gICAgICAgIGlmIChOdW1iZXIodmFsdWUpIDwgMTApIHtcbiAgICAgICAgICAgIC8vIHNldCBUZXh0RmllbGQgY29sb3IgdG8gcmVkXG4gICAgICAgICAgICBpbnB1dC5zZXRJbmxpbmVTdHlsZSgnYm9yZGVyLWNvbG9yOiAjQUUxRDI4Jyk7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIGVycm9yIExhYmVsIGV4aXN0c1xuICAgICAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgICAgICAgIC8vIGlmIG5vdDsgY3JlYXRlIGFuZCBhZGQgZXJyb3IgTGFiZWxcbiAgICAgICAgICAgICAgICBsZXQgbGFiZWwgPSBuZXcgTGFiZWwoKTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYWRkQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgb3B0aW9uYWwgZXJyb3IgTGFiZWxcbiAgICAgICAgICAgICAgICBlcnJvciA9IGNvbnRhaW5lci5nZXRDaGlsZEF0KDIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBzZXQgZXJyb3IgbWVzc2FnZSBpbiBlcnJvciBMYWJlbFxuICAgICAgICAgICAgZXJyb3IudGV4dCA9IFwiVG9vIGxvdyFcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIHNldCBUZXh0RmllbGQgY29sb3IgdG8gZ3JlZW5cbiAgICAgICAgICAgIGlucHV0LnNldElubGluZVN0eWxlKCdib3JkZXItY29sb3I6ICMxQURDMUUnKTtcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIGVycm9yIExhYmVsIGlzIGRpc3BsYXllZFxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBlcnJvciBMYWJlbFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==