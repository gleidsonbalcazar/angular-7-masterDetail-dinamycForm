import { Component, EventEmitter, Input, Output, QueryList } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormArrayComponent } from '../../core/component/dynamic-form-array.component';
import { DynamicFormLayout, DynamicFormLayoutService } from '../../core/service/dynamic-form-layout.service';
import { DynamicFormArrayModel } from '../../core/model/form-array/dynamic-form-array.model';
import { DynamicTemplateDirective } from '../../core/directive/dynamic-template.directive';
import { DynamicFormControlCustomEvent } from '../../core/component/dynamic-form-control.event';
import { DynamicFormValidationService } from '../../core/service/dynamic-form-validation.service';


@Component({
    selector: "dynamic-bootstrap-form-array",
    templateUrl: "./dynamic-bootstrap-form-array.component.html"
})
export class DynamicBootstrapFormArrayComponent extends DynamicFormArrayComponent {

    @Input() group: FormGroup;
    @Input() layout: DynamicFormLayout;
    @Input() model: DynamicFormArrayModel;
    @Input() templates: QueryList<DynamicTemplateDirective> | undefined;

    @Output() blur: EventEmitter<any> = new EventEmitter();
    @Output() change: EventEmitter<any> = new EventEmitter();
    @Output() customEvent: EventEmitter<DynamicFormControlCustomEvent> = new EventEmitter();
    @Output() focus: EventEmitter<any> = new EventEmitter();

    constructor(protected layoutService: DynamicFormLayoutService,
                protected validationService: DynamicFormValidationService) {

        super(layoutService, validationService);
    }
}