
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>First Name</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.firstName" type="text" name="name" />
        <div v-if="userFormGroup.controls.firstName.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.firstName.errors.maxLength.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Middle Name</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.middleName" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditionalExpression on 'Middle Name', then enter 'Bharat' in 'First Name'<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'function'<br/></small>
       <div v-if="userFormGroup.controls.middleName.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.middleName.errors.maxLength.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Last Name</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.lastName" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditionalExpression on 'Last Name', then enter 'Bharat' in 'First Name'<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'string'<br/></small>
       <div v-if="userFormGroup.controls.lastName.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.lastName.errors.maxLength.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>User Name</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.userName" type="text" name="name" />
        <div v-if="userFormGroup.controls.userName.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.userName.errors.maxLength.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Full Name</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.fullName" type="text" name="name" />
        <div v-if="userFormGroup.controls.fullName.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.fullName.errors.maxLength.message}}<br/></small>	
       </div>
      </div>  
       <button class="btn btn-primary">Submit</button>
     </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { required,RxFormBuilder,IFormGroup } from "@rxweb/reactive-forms"
import { User } from './user.model';

@Component
export default class MaxLengthCompleteComponent extends Vue {
 userFormGroup: IFormGroup<User>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userFormGroup = this.formBuilder.formGroup(User) as IFormGroup<User>;
   }
}
</script> 
