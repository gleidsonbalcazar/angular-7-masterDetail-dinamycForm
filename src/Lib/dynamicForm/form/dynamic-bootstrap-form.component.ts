import { Component, ContentChildren, EventEmitter, Input, Output, QueryList, ViewChildren } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicBootstrapFormControlContainerComponent } from "./dynamic-bootstrap-form-control-container.component";
import { DynamicFormComponent } from '../core/component/dynamic-form-component';
import { DynamicFormModel } from '../core/model/dynamic-form.model';
import { DynamicFormLayout, DynamicFormLayoutService } from '../core/service/dynamic-form-layout.service';
import { DynamicFormControlEvent } from '../core/component/dynamic-form-control.event';
import { DynamicTemplateDirective } from '../core/directive/dynamic-template.directive';
import { DynamicFormService } from '../core/service/dynamic-form.service';

@Component({
    selector: "dynamic-bootstrap-form",
    templateUrl: "./dynamic-bootstrap-form.component.html"
})
export class DynamicBootstrapFormComponent extends DynamicFormComponent {

    @Input("group") formGroup: FormGroup;
    @Input("model") formModel: DynamicFormModel;
    @Input("layout") formLayout: DynamicFormLayout;

    @Output() blur: EventEmitter<DynamicFormControlEvent> = new EventEmitter<DynamicFormControlEvent>();
    @Output() change: EventEmitter<DynamicFormControlEvent> = new EventEmitter<DynamicFormControlEvent>();
    @Output() focus: EventEmitter<DynamicFormControlEvent> = new EventEmitter<DynamicFormControlEvent>();
    @Output("bsEvent") customEvent: EventEmitter<DynamicFormControlEvent> = new EventEmitter<DynamicFormControlEvent>();

    @ContentChildren(DynamicTemplateDirective) templates: QueryList<DynamicTemplateDirective>;

    @ViewChildren(DynamicBootstrapFormControlContainerComponent) components: QueryList<DynamicBootstrapFormControlContainerComponent>;

    constructor(protected formService: DynamicFormService, protected layoutService: DynamicFormLayoutService) {
        super(formService, layoutService);
    }
}