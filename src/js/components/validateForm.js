import {
  validateForms
} from './../functions/validate-forms.js';

const signUpFormRules = [{
    ruleSelector: '.sign-up-form__input_name',
    rules: [{
        rule: 'minLength',
        value: 3,
        errorMessage: 'Введите пожалуйста, не менее 3 символов'
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Введите пожалуйста, не больше 30 символов'
      },
      {
        rule: 'customRegexp',
        value: /^[A-zА-яёЁ]+$/,
        errorMessage: 'Введите пожалуйста, корректное имя'
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите пожалуйста, имя'
      }
    ]
  },
  {
    ruleSelector: '.sign-up-form__input_tel',
    tel: true,
    telError: 'Введите пожалуйста, корректный телефон',
    rules: [{
      rule: 'required',
      value: true,
      errorMessage: 'Введите пожалуйста, телефон'
    }]
  },
];

const trainersFormRules = [{
    ruleSelector: '.trainers-form__input_name',
    rules: [{
        rule: 'minLength',
        value: 3,
        errorMessage: 'Введите пожалуйста, не менее 3 символов'
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Введите пожалуйста, не больше 30 символов'
      },
      {
        rule: 'customRegexp',
        value: /^[A-zА-яёЁ]+$/,
        errorMessage: 'Введите пожалуйста, корректное имя'
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите пожалуйста, имя'
      }
    ]
  },
  {
    ruleSelector: '.trainers-form__input_tel',
    tel: true,
    telError: 'Введите пожалуйста, корректный телефон',
    rules: [{
      rule: 'required',
      value: true,
      errorMessage: 'Введите пожалуйста, телефон'
    }]
  },
];

const afterForm = () => {
  alert('Отправлено');
};

validateForms('.sign-up-form__wrapper', signUpFormRules, afterForm);
validateForms('.trainers-form__wrapper', trainersFormRules, afterForm);
