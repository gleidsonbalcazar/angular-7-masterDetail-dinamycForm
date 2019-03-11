import {
    Component,
    ComponentFactoryResolver,
    ContentChildren,
    EventEmitter,
    Input,
    Output,
    QueryList,
    Type,
    ViewChild,
    ViewContainerRef
} from "@angular/core";
import { FormGroup } from "@angular/forms";

import { DynamicBootstrapCheckboxComponent } from "./checkbox/dynamic-bootstrap-checkbox.component";
import { DynamicBootstrapDatePickerComponent } from "./datepicker/dynamic-bootstrap-datepicker.component";
import { DynamicBootstrapFormArrayComponent } from "./form-array/dynamic-bootstrap-form-array.component";
import { DynamicBootstrapFormGroupComponent } from "./form-group/dynamic-bootstrap-form-group.component";
import { DynamicBootstrapInputComponent } from "./input/dynamic-bootstrap-input.component";
import { DynamicBootstrapRadioGroupComponent } from "./radio-group/dynamic-bootstrap-radio-group.component";
import { DynamicBootstrapRatingComponent } from "./rating/dynamic-bootstrap-rating.component";
import { DynamicBootstrapSelectComponent } from "./select/dynamic-bootstrap-select.component";
import { DynamicBootstrapTextAreaComponent } from "./textarea/dynamic-bootstrap-textarea.component";
import { DynamicBootstrapTimePickerComponent } from "./timepicker/dynamic-bootstrap-timepicker.component";
import { DynamicFormControlContainerComponent } from '../core/component/dynamic-form-control-container.component';
import { DynamicTemplateDirective } from '../core/directive/dynamic-template.directive';
import { DynamicFormArrayGroupModel, DYNAMIC_FORM_CONTROL_TYPE_ARRAY } from '../core/model/form-array/dynamic-form-array.model';
import { DynamicFormLayout, DynamicFormLayoutService } from '../core/service/dynamic-form-layout.service';
import { DynamicFormControlModel } from '../core/model/dynamic-form-control.model';
import { DynamicFormControlEvent } from '../core/component/dynamic-form-control.event';
import { DynamicFormControl } from '../core/component/dynamic-form-control.interface';
import { DynamicFormValidationService } from '../core/service/dynamic-form-validation.service';
import { DynamicFormInstancesService } from '../core/service/dynamic-form-instances.service';
import { DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX } from '../core/model/checkbox/dynamic-checkbox.model';
import { DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP } from '../core/model/checkbox/dynamic-checkbox-group.model';
import { DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER } from '../core/model/datepicker/dynamic-datepicker.model';
import { DYNAMIC_FORM_CONTROL_TYPE_GROUP } from '../core/model/form-group/dynamic-form-group.model';
import { DYNAMIC_FORM_CONTROL_TYPE_INPUT } from '../core/model/input/dynamic-input.model';
import { DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP } from '../core/model/radio/dynamic-radio-group.model';
import { DYNAMIC_FORM_CONTROL_TYPE_RATING } from '../core/model/rating/dynamic-rating.model';
import { DYNAMIC_FORM_CONTROL_TYPE_SELECT } from '../core/model/select/dynamic-select.model';
import { DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA } from '../core/model/textarea/dynamic-textarea.model';
import { DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER } from '../core/model/timepicker/dynamic-timepicker.model';

@Component({
    selector: "dynamic-bootstrap-form-control",
    templateUrl: "./dynamic-bootstrap-form-control-container.component.html"
})
export class DynamicBootstrapFormControlContainerComponent extends DynamicFormControlContainerComponent {

    @ContentChildren(DynamicTemplateDirective) contentTemplateList: QueryList<DynamicTemplateDirective> | undefined;
    @Input("templates") inputTemplateList: QueryList<DynamicTemplateDirective> | undefined;

    @Input() asBootstrapFormGroup: boolean = true;
    @Input() context: DynamicFormArrayGroupModel | null = null;
    @Input() group: FormGroup;
    @Input() layout: DynamicFormLayout;
    @Input() model: DynamicFormControlModel;

    @Output() blur: EventEmitter<DynamicFormControlEvent> = new EventEmitter<DynamicFormControlEvent>();
    @Output() change: EventEmitter<DynamicFormControlEvent> = new EventEmitter<DynamicFormControlEvent>();
    @Output() focus: EventEmitter<DynamicFormControlEvent> = new EventEmitter<DynamicFormControlEvent>();
    @Output("bsEvent") customEvent: EventEmitter<DynamicFormControlEvent> = new EventEmitter<DynamicFormControlEvent>();

    @ViewChild("componentViewContainer", {read: ViewContainerRef}) componentViewContainerRef: ViewContainerRef;

    get componentType(): Type<DynamicFormControl> | null {
        return this.layoutService.getCustomComponentType(this.model) || bootstrapUIFormControlMapFn(this.model);
    }

    constructor(protected componentFactoryResolver: ComponentFactoryResolver,
                protected layoutService: DynamicFormLayoutService,
                protected validationService: DynamicFormValidationService,
                protected dynamicFormInstancesService: DynamicFormInstancesService) {

        super(componentFactoryResolver, layoutService, validationService, dynamicFormInstancesService);
    }
}

export function bootstrapUIFormControlMapFn(model: DynamicFormControlModel): Type<DynamicFormControl> | null {

    switch (model.type) {

        case DYNAMIC_FORM_CONTROL_TYPE_ARRAY:
            return DynamicBootstrapFormArrayComponent;

        case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX:
            return DynamicBootstrapCheckboxComponent;

        case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP:
            return DynamicBootstrapFormGroupComponent;

        case DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER:
            return DynamicBootstrapDatePickerComponent;

        case DYNAMIC_FORM_CONTROL_TYPE_GROUP:
            return DynamicBootstrapFormGroupComponent;

        case DYNAMIC_FORM_CONTROL_TYPE_INPUT:
            return DynamicBootstrapInputComponent;

        case DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP:
            return DynamicBootstrapRadioGroupComponent;

        case DYNAMIC_FORM_CONTROL_TYPE_RATING:
            return DynamicBootstrapRatingComponent;

        case DYNAMIC_FORM_CONTROL_TYPE_SELECT:
            return DynamicBootstrapSelectComponent;

        case DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA:
            return DynamicBootstrapTextAreaComponent;

        case DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER:
            return DynamicBootstrapTimePickerComponent;

        default:
            return null;
    }
}
