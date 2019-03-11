import { of } from 'rxjs';
import { DynamicFormGroupModel } from 'src/Lib/dynamicForm/core/model/form-group/dynamic-form-group.model';
import { DynamicDatePickerModel } from 'src/Lib/dynamicForm/core/model/datepicker/dynamic-datepicker.model';
import { DynamicSelectModel } from 'src/Lib/dynamicForm/core/model/select/dynamic-select.model';
import { DynamicInputModel } from 'src/Lib/dynamicForm/core/model/input/dynamic-input.model';
import { DynamicCheckboxGroupModel } from 'src/Lib/dynamicForm/core/model/checkbox/dynamic-checkbox-group.model';
import { DynamicCheckboxModel } from 'src/Lib/dynamicForm/core/model/checkbox/dynamic-checkbox.model';
import { DynamicRadioGroupModel } from 'src/Lib/dynamicForm/core/model/radio/dynamic-radio-group.model';
import { DynamicTextAreaModel } from 'src/Lib/dynamicForm/core/model/textarea/dynamic-textarea.model';
import { DynamicTimePickerModel } from 'src/Lib/dynamicForm/core/model/timepicker/dynamic-timepicker.model';
import { DynamicFormArrayModel } from 'src/Lib/dynamicForm/core/model/form-array/dynamic-form-array.model';

export const BOOTSTRAP_SAMPLE_FORM_MODEL = [

  new DynamicFormGroupModel({

      id: "bsFormGroup1",
      legend: "Form Group 1",
      group: [

          new DynamicDatePickerModel({

              id: "bsDatePicker",
              label: "Datepicker",
              toggleLabel: "Open",
              placeholder: "Pick a date",
              value: new Date(),
              additional: {
                  containerClass: "theme-red"
              }
          }),

          new DynamicSelectModel<string>({

              id: "bsSelect",
              label: "Select",
              options: of([
                  {
                      label: "Option 1",
                      value: "option-1",
                  },
                  {
                      label: "Option 2",
                      value: "option-2"
                  },
                  {
                      label: "Option 3",
                      value: "option-3"
                  },
                  {
                      label: "Option 4",
                      value: "option-4"
                  }
              ]),
              value: "option-3"
          }),

          new DynamicInputModel({

              hint: "Just a sample help text",
              id: "bsInput",
              label: "Input",
              maxLength: 51,
              placeholder: "Just some input",
              prefix: "Prefix",
              suffix: "Suffix",
              validators: {
                  required: null,
                  maxLength: 5
              },
              errorMessages: {
                  required: "{{ label }} is required",
                  maxLength: "Max character count is 5"
              }
          }),

          new DynamicCheckboxGroupModel({

              id: "bsCheckboxGroup",
              label: "Checkbox Group",
              group: [
                  new DynamicCheckboxModel({

                      id: "checkboxGroup1",
                      label: "Checkbox 1",
                      value: true
                  }),
                  new DynamicCheckboxModel({

                      id: "checkboxGroup2",
                      label: "Checkbox 2",
                      value: true
                  })
              ]
          })
      ]
  }),

  new DynamicFormGroupModel({

      id: "bsFormGroup2",
      legend: "Form Group 2",
      group: [
          new DynamicRadioGroupModel<string>({

              id: "bsRadioGroup",
              label: "Radio Group",
              options: [
                  {
                      label: "Option 1",
                      value: "option-1",
                  },
                  {
                      label: "Option 2",
                      value: "option-2"
                  },
                  {
                      label: "Option 3",
                      value: "option-3"
                  },
                  {
                      label: "Option 4",
                      value: "option-4"
                  }
              ],
              value: "option-3"
          }),

          new DynamicInputModel({

              hint: "Just a sample help text",
              id: "bootstrapInput2",
              label: "Input",
              maxLength: 51,
              placeholder: "example input",
              prefix: "Prefix",
              suffix: "Suffix",
              validators: {
                  maxLength: 5
              },
              relation: [
                  {
                      action: "REQUIRED",
                      when: [
                          {
                              id: "bootstrapRadioGroup",
                              value: "option-1"
                          }
                      ]
                  }
              ],
              errorMessages: {
                  required: "{{ label }} is required",
                  maxLength: "Max character count is 5"
              }
          }),

          new DynamicTextAreaModel({

              id: "bsTextArea",
              label: "Textarea",
              rows: 5,
              placeholder: "example Textarea",
              relation: [
                  {
                      action: "DISABLE",
                      connective: "OR",
                      when: [
                          {
                              id: "bsRadioGroup",
                              value: "option-2"
                          },
                          {
                              id: "bsRadioGroup",
                              value: "option-4",
                          }
                      ]
                  },
                  {
                      action: "REQUIRED",
                      when: [
                          {
                              id: "bootstrapRadioGroup",
                              value: "option-1"
                          }
                      ]
                  }
              ],
              errorMessages: {
                  required: "This field is required"
              }
          }),

          new DynamicTimePickerModel({

              id: "bsTimePicker",
              label: "Timepicker",
              meridian: true,
              showSeconds: false,
              value: new Date()
          }),

          new DynamicCheckboxModel({

              id: "bsCheckbox",
              label: "I do agree"
          }),

          new DynamicFormArrayModel({

              id: "bsFormArray",
              initialCount: 5,
              label: "Form Array",
              groupFactory: () => {
                  return [
                      new DynamicInputModel({
                          id: "bsArrayInput",
                          label: "Label",
                          placeholder: "Just some input"
                      })
                  ];
              }
          })
      ]
  })
];