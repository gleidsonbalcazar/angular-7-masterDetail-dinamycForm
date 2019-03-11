import { Component, EventEmitter, Input, Output, QueryList } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormControlComponent } from '../../core/component/dynamic-form-control.component';
import { DynamicFormLayout, DynamicFormLayoutService } from '../../core/service/dynamic-form-layout.service';
import { DynamicFormGroupModel } from '../../core/model/form-group/dynamic-form-group.model';
import { DynamicTemplateDirective } from '../../core/directive/dynamic-template.directive';
import { DynamicFormControlCustomEvent } from '../../core/component/dynamic-form-control.event';
import { DynamicFormValidationService } from '../../core/service/dynamic-form-validation.service';


@Component({
    selector: "dynamic-bootstrap-form-group",
    templateUrl: "./dynamic-bootstrap-form-group.component.html"
})
export class DynamicBootstrapFormGroupComponent extends DynamicFormControlComponent {

    @Input() group: FormGroup;
    @Input() layout: DynamicFormLayout;
    @Input() model: DynamicFormGroupModel;
    @Input() templates: QueryList<DynamicTemplateDirective> | DynamicTemplateDirective[] | undefined;

    @Output() blur: EventEmitter<any> = new EventEmitter();
    @Output() change: EventEmitter<any> = new EventEmitter();
    @Output() customEvent: EventEmitter<DynamicFormControlCustomEvent> = new EventEmitter();
    @Output() focus: EventEmitter<any> = new EventEmitter();

    constructor(protected layoutService: DynamicFormLayoutService,
                protected validationService: DynamicFormValidationService) {

        super(layoutService, validationService);
    }
}