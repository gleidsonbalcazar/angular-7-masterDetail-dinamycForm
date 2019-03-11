import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { BsDatepickerDirective } from "ngx-bootstrap/datepicker";
import { DynamicFormControlComponent } from '../../core/component/dynamic-form-control.component';
import { DynamicFormLayout, DynamicFormLayoutService } from '../../core/service/dynamic-form-layout.service';
import { DynamicDatePickerModel } from '../../core/model/datepicker/dynamic-datepicker.model';
import { DynamicFormControlCustomEvent } from '../../core/component/dynamic-form-control.event';
import { DynamicFormValidationService } from '../../core/service/dynamic-form-validation.service';

@Component({
    selector: "dynamic-bootstrap-datepicker",
    templateUrl: "./dynamic-bootstrap-datepicker.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicBootstrapDatePickerComponent extends DynamicFormControlComponent {

    @Input() group: FormGroup;
    @Input() layout: DynamicFormLayout;
    @Input() model: DynamicDatePickerModel;

    @Output() blur: EventEmitter<any> = new EventEmitter();
    @Output() change: EventEmitter<any> = new EventEmitter();
    @Output() customEvent: EventEmitter<DynamicFormControlCustomEvent> = new EventEmitter();
    @Output() focus: EventEmitter<any> = new EventEmitter();

    @ViewChild(BsDatepickerDirective) bsDatePicker: BsDatepickerDirective;

    constructor(protected layoutService: DynamicFormLayoutService,
                protected validationService: DynamicFormValidationService) {

        super(layoutService, validationService);
    }
}
