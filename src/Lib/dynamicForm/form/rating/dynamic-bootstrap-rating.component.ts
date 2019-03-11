import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormControlComponent } from '../../core/component/dynamic-form-control.component';
import { DynamicFormLayout, DynamicFormLayoutService } from '../../core/service/dynamic-form-layout.service';
import { DynamicRatingModel } from '../../core/model/rating/dynamic-rating.model';
import { DynamicFormValidationService } from '../../core/service/dynamic-form-validation.service';

@Component({
    selector: "dynamic-bootstrap-rating",
    templateUrl: "./dynamic-bootstrap-rating.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicBootstrapRatingComponent extends DynamicFormControlComponent {

    @Input() group: FormGroup;
    @Input() layout: DynamicFormLayout;
    @Input() model: DynamicRatingModel;

    @Output() blur: EventEmitter<any> = new EventEmitter();
    @Output() change: EventEmitter<any> = new EventEmitter();
    @Output() focus: EventEmitter<any> = new EventEmitter();

    constructor(protected layoutService: DynamicFormLayoutService,
                protected validationService: DynamicFormValidationService) {

        super(layoutService, validationService);
    }
}
