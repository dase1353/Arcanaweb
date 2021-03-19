import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { BadgeModule } from 'primeng/badge';

const modules = [
  ButtonModule, BadgeModule, ChipModule, DialogModule, DropdownModule, InputNumberModule, InputTextModule,
  KeyFilterModule, MegaMenuModule, MenubarModule, MenuModule, RatingModule, RippleModule,
  SelectButtonModule, SplitButtonModule, TableModule, TooltipModule

];

@NgModule({
  imports: modules,
  exports: modules,
})
export class SharedPrimengModule { }
