---
title: lowerCase 
description: lowerCase validation  {{validatorType}}  will allow user to enter only the lowercase alphabets.
author: rxcontributortwo
category: form-validations
subcategory: String
type:tabs
linktitle: lowerCase
---

<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>lowerCase validation  {{validatorType}}  will allow user to enter only the lowercase alphabets.</p></div>

# When to use
Suppose you want to create a User form, which contains fields like Username, FirstName, LastName and you want the user to enter any string only in lowercase. Here depending upon the requirement these scenarios may arise.
<ol class='showHideElement'>
    <li>Allow only lowercase alphabets in Username.</li>
    <li>Apply lowerCase validation based on matched condition in the form, like if the Username is `jonathan.feldman`, then only the lowerCase validation will be applied to FirstName field.</li>
    <li>Adding Custom Message on LastName Field.</li>
    <li>Shows the custom message on `State` field by using `messageKey` property.</li>
    <data-scope scope="['decorator','validator']">
    <li>Apply lowerCase validation dynamically based on server rules./li>
    </data-scope>
</ol>
Let’s see how lowerCase  {{validatorType}}  fulfil the need.

# Basic LowerCase Validation

<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
First we need to create a User class and define a property of Username in the model to achieve the functional need of point 1.
<div component="app-code" key="lowerCase-add-model"></div> 
</data-scope>
Through Angular FormBuilder service we create FormGroup in the component.
<data-scope scope="['decorator']">
Here we have covered Add and Edit form operations. 
</data-scope>

<data-scope scope="['validator','template-driven-directives','template-driven-decorators']">
Here we have covered Add form operations. 
</data-scope>

<data-scope scope="['decorator']">
<div component="app-tabs" key="basic-operations"></div>
[!TabGroup]
# [Add](#tab\basicadd)
<div component="app-code" key="lowerCase-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="lowerCase-add-html"></div> 
<div component="app-example-runner" ref-component="app-lowerCase-add"></div>
# [/Add]
# [Edit](#tab\basicedit)
<div component="app-code" key="lowerCase-edit-component"></div> 
The below code is `user-data.json` for getting data from the server
<div component="app-code" key="lowerCase-edit-json"></div> 
Next, we need to write html code.
<div component="app-code" key="lowerCase-edit-html"></div> 
<div component="app-example-runner" ref-component="app-lowerCase-edit"></div>
# [/Edit]
***
</data-scope>

<data-scope scope="['validator','template-driven-directives','template-driven-decorators']">
<div component="app-code" key="lowerCase-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="lowerCase-add-html"></div> 
<div component="app-example-runner" ref-component="app-lowerCase-add"></div>
</data-scope>

# MessageConfig 
<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@lowerCase()` decorator. If needed then use the below options.
</data-scope>
<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.lowerCase()` validator. If needed then use the below options.
</data-scope>
<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `lowerCase` validation. If needed then use the below options.
</data-scope>

<table class="table table-bordered table-striped showHideElement">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a  title="conditionalExpression">conditionalExpression</a></td><td>LowerCase validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work same as client function.</td></tr>
<tr><td><a  title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl</td></tr>
<tr><td><a (click)='scrollTo("#messageKey")' title="messageKey">messageKey</a></td><td>messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.</td></tr>
</table>

## conditionalExpression 
Type :  `Function`  |  `string` 

Lowercase validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.
If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work same as client function.

> This won't work if you return without expression or fixed boolean value true or false; like : `conditionalExpression: (x) => x.toggle`

<data-scope scope="['validator','decorator']">
> Binding `conditionalExpression` with `Function` object.
<div component="app-code" key="lowerCase-conditionalExpressionExampleFunction-model"></div> 
</data-scope>

> Binding `conditionalExpression` with `string` object.
<div component="app-code" key="lowerCase-conditionalExpressionExampleString-model"></div> 

<div component="app-example-runner" ref-component="app-lowerCase-conditionalExpression" title="lowerCase {{validatorType}} with conditionalExpression" key="conditionalExpression"></div>

## message 
Type :  `string` 

To override the global configuration message and set the custom error message on respective FormControl

<div component="app-code" key="lowerCase-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-lowerCase-message" title="lowerCase {{validatorType}} with message" key="message"></div>

## messageKey
Type : `string`

messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.

<div component="app-code" key="lowerCase-messageKeyExample-model"></div> 
<div component="app-example-runner" ref-component="app-lowerCase-messageKey" title="lowerCase {{validatorType}} with messageKey" key="messageKey"></div>

# Complete lowerCase Example

This Complete lowerCase example which includes all the MessageConfig properties will fulfil the requirement of scenarios 1, 2 and 3.

<div component="app-tabs" key="complete"></div>

[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-lowerCase-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="lowerCase-complete-model"></div> 
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="lowerCase-complete-component"></div> 
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="lowerCase-complete-html"></div> 
# [/Html]
***

<data-scope scope="['decorator','validator']">
# Dynamic lowercase Example

This Dynamic lowerCase example is executed on the basis of json passed in the formBuilderConfiguration which comes under `RxFormBuilder` of reactive-form-validators. `conditionalExpression` with function would not be applied in dynamic lowerCase example. This example will fulfil the requirement of our last point.

<div component="app-tabs" key="dynamic"></div>

[!TabGroup]
# [Example](#tab\dynamicexample)
<div component="app-example-runner" ref-component="app-lowerCase-dynamic"></div>
# [/Example]
<data-scope scope="['decorator']">
# [Model](#tab\dynamicmodel)
<div component="app-code" key="lowerCase-dynamic-model"></div>
# [/Model]
</data-scope>
# [Component](#tab\dynamiccomponent)
<div component="app-code" key="lowerCase-dynamic-component"></div>
# [/Component]
# [Json](#tab\dynamicjson)
<div component="app-code" key="lowerCase-dynamic-json"></div>
# [/Json]
# [Html](#tab\dynamichtml)
<div component="app-code" key="lowerCase-dynamic-html"></div> 
# [/Html]
***
</data-scope>
