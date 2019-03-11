import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { TimepickerComponent } from "ngx-bootstrap/timepicker";
import { DynamicFormControlComponent } from '../../core/component/dynamic-form-control.component';
import { DynamicFormLayout, DynamicFormLayoutService } from '../../core/service/dynamic-form-layout.service';
import { DynamicTimePickerModel } from '../../core/model/timepicker/dynamic-timepicker.model';
import { DynamicFormValidationService } from '../../core/service/dynamic-form-validation.service';


@Component({
    selector: "dynamic-bootstrap-timepicker",
    templateUrl: "./dynamic-bootstrap-timepicker.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicBootstrapTimePickerComponent extends DynamicFormControlComponent {

    @Input() group: FormGroup;
    @Input() layout: DynamicFormLayout;
    @Input() model: DynamicTimePickerModel;

    @Output() blur: EventEmitter<any> = new EventEmitter();
    @Output() change: EventEmitter<any> = new EventEmitter();
    @Output() focus: EventEmitter<any> = new EventEmitter();

    @ViewChild(TimepickerComponent) bsTimePicker: TimepickerComponent;

    constructor(protected layoutService: DynamicFormLayoutService,
                protected validationService: DynamicFormValidationService) {

        super(layoutService, validationService);
    }
}
