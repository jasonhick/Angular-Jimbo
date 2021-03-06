import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-form-page',
  templateUrl: './dynamic-form-page.component.html'
})
export class DynamicFormPageComponent {

    config = [
        {
            type: 'input',
            label: 'Reference',
            name: 'reference',
            placeholder: 'Enter your reference',
        },
        {
            type: 'group',
            name: 'personal',
            controls: [
                {
                    type: 'input',
                    label: 'First name',
                    name: 'firstname',
                    placeholder: 'Enter your first name',
                },
                {
                    type: 'input',
                    label: 'Last name',
                    name: 'lastname',
                    placeholder: 'Enter your first name',

                },
                {
                    type: 'input',
                    label: 'Email',
                    name: 'email',
                    placeholder: 'Enter your email',
                }
            ],
        },
        {
            type: 'group',
            name: 'parents',
            controls: [
                {
                    type: 'group',
                    name: 'father',
                    controls: [
                        {
                            type: 'input',
                            label: 'First name',
                            name: 'firstname',
                            placeholder: 'Enter your first name',
                        },
                        {
                            type: 'input',
                            label: 'Last name',
                            name: 'lastname',
                            placeholder: 'Enter your first name',
                        },
                        {
                            type: 'input',
                            label: 'Email',
                            name: 'email',
                            placeholder: 'Enter your email',
                        },
                    ],
                },
                {
                    type: 'group',
                    name: 'mother',
                    controls: [
                        {
                            type: 'input',
                            label: 'First name',
                            name: 'firstname',
                            placeholder: 'Enter your first name',
                        },
                        {
                            type: 'input',
                            label: 'Last name',
                            name: 'lastname',
                            placeholder: 'Enter your first name',
                        },
                        {
                            type: 'input',
                            label: 'Email',
                            name: 'email',
                            placeholder: 'Enter your email',
                        },
                    ],
                },
            ],
        },
        {
            type: 'group',
            name: 'address',
            controls: [
                {
                    type: 'input',
                    label: 'Address 1',
                    name: 'address1',
                    placeholder: 'Enter your address line 1',
                },
                {
                    type: 'input',
                    label: 'Address 2',
                    name: 'address2',
                    placeholder: 'Enter your address line 2',
                },
                {
                    type: 'input',
                    label: 'City',
                    name: 'city',
                    placeholder: 'Enter your city',
                },
                {
                    type: 'input',
                    label: 'Postcode',
                    name: 'postcode',
                    placeholder: 'Enter your postcode',
                },
            ]
        },
        {
            type: 'input',
            label: 'Signature',
            name: 'signature',
            placeholder: 'Please sign',
        },
        {
            label: 'Submit',
            name: 'submit',
            type: 'button',
        }
    ];

    submit(value: {[name: string]: any}) {
        console.log(value);
    }
}
