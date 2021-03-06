import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { JsonDecoratorsExtendedModule } from "src/assets/examples/reactive-form-validators/decorators/json/json-decorators-extended.module";
import { JsonTemplateDrivenValidationDirectivesExtendedModule } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/json/json-validation-directives-extended.module";
import { JsonTemplateDrivenValidationDecoratorsExtendedModule } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/json/json-validation-decorators-extended.module";

import { JsonValidatorsExtendedModule } from "src/assets/examples/reactive-form-validators/validators/json/json-validators-extended.module";
import { JSON_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/json/json.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { JSON_ROUTING } from "src/app/components/form-validation/json/json.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [JSON_ROUTING ,JsonDecoratorsExtendedModule ,JsonValidatorsExtendedModule,JsonTemplateDrivenValidationDirectivesExtendedModule, JsonTemplateDrivenValidationDecoratorsExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: JSON_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class JsonModule { }

