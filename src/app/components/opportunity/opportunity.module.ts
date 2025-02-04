import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpportunityComponent } from './opportunity.component';
import { MaterialModule } from 'src/app/material/material.module';
import { EditOpportunityComponent } from './edit-opportunity/edit-opportunity.component';
import { CreateOpportunityComponent } from './create-opportunity/create-opportunity.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OpportunityComponent,
    EditOpportunityComponent,
    CreateOpportunityComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports:[
    EditOpportunityComponent,
    OpportunityComponent,
    CreateOpportunityComponent,
  ]
})
export class OpportunityModule { }
