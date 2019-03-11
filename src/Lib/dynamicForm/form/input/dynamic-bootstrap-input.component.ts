import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormControlComponent } from '../../core/component/dynamic-form-control.component';
import { DynamicFormLayout, DynamicFormLayoutService } from '../../core/service/dynamic-form-layout.service';
import { DynamicInputModel } from '../../core/model/input/dynamic-input.model';
import { DynamicFormValidationService } from '../../core/service/dynamic-form-validation.service';


@Component({
    selector: "dynamic-bootstrap-input",
    templateUrl: "./dynamic-bootstrap-input.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicBootstrapInputComponent extends DynamicFormControlComponent {

    @Input() group: FormGroup;
    @Input() layout: DynamicFormLayout;
    @Input() model: DynamicInputModel;

    @Output() blur: EventEmitter<any> = new EventEmitter();
    @Output() change: EventEmitter<any> = new EventEmitter();
    @Output() focus: EventEmitter<any> = new EventEmitter();

    constructor(protected layoutService: DynamicFormLayoutService,
                protected validationService: DynamicFormValidationService) {

        super(layoutService, validationService);
    }
}