// 一次全放，以後只需要導入SharedPrimengModule即可使用全部
// 檔案當前版本 11.0.0 rc1
// 註解掉的是2020聖誕節釋出的未上線新功能，無法使用
import { NgModule } from '@angular/core';

import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { BlockUIModule } from 'primeng/blockui';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CaptchaModule } from 'primeng/captcha';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { ChipsModule } from 'primeng/chips';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DataViewModule } from 'primeng/dataview';
import { DeferModule } from 'primeng/defer';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DragDropModule } from 'primeng/dragdrop';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
// import { EditorModule } from 'primeng/editor'; //這個套件需要相依套件，下方有寫
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { FocusTrapModule } from 'primeng/focustrap';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { GalleriaModule } from 'primeng/galleria';
import { GMapModule } from 'primeng/gmap';
import { InplaceModule } from 'primeng/inplace';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { KnobModule } from 'primeng/knob';
import { ListboxModule } from 'primeng/listbox';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrderListModule } from 'primeng/orderlist';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PanelModule } from 'primeng/panel';
import { PasswordModule } from 'primeng/password';
import { PickListModule } from 'primeng/picklist';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { SkeletonModule } from 'primeng/skeleton';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SliderModule } from 'primeng/slider';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SplitterModule } from 'primeng/splitter';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { TerminalModule } from 'primeng/terminal';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { TimelineModule } from 'primeng/timeline';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { VirtualScrollerModule } from 'primeng/virtualscroller';




const modules = [
  AccordionModule, AutoCompleteModule, AvatarGroupModule, AvatarModule, BadgeModule, BlockUIModule, BreadcrumbModule, ButtonModule,
  CalendarModule, CaptchaModule, CardModule, CarouselModule, CascadeSelectModule, ChartModule, CheckboxModule, ChipModule,
  ChipsModule, ColorPickerModule, ConfirmDialogModule, ConfirmPopupModule, ContextMenuModule, DataViewModule,
  DeferModule, DialogModule, DividerModule, DragDropModule, DropdownModule, DynamicDialogModule, FieldsetModule,
  FileUploadModule, FocusTrapModule, FullCalendarModule, GalleriaModule, GMapModule, InplaceModule, InputMaskModule,
  InputNumberModule, InputSwitchModule, InputTextareaModule, InputTextModule, KeyFilterModule, KnobModule, ListboxModule,
  MegaMenuModule, MenubarModule, MenuModule, MessageModule, MessagesModule, MultiSelectModule, OrderListModule, OrganizationChartModule,
  OverlayPanelModule, PaginatorModule, PanelMenuModule, PanelModule, PasswordModule, PickListModule, ProgressBarModule,
  ProgressSpinnerModule, RadioButtonModule, RatingModule, RippleModule, ScrollPanelModule, ScrollTopModule,
  SelectButtonModule, SidebarModule, SkeletonModule, SlideMenuModule, SliderModule, SplitButtonModule, SplitterModule,
  StepsModule, TableModule, TabMenuModule, TabViewModule, TagModule, TerminalModule, TieredMenuModule, TimelineModule,
  ToastModule, ToggleButtonModule, ToolbarModule, TooltipModule, TreeModule, TreeTableModule, TriStateCheckboxModule,
  VirtualScrollerModule,

];

@NgModule({
  imports: modules,
  exports: modules,
})
export class SharedPrimengModule { }

/*
 *有些套件需要安裝第三方套件
 *Schedule ->	FullCalendar 4.1.0
 *Editor ->	Quill Editor
 *GMap ->	Google Maps
 *Charts ->	Charts.js 2.7.x
 *Captcha ->	Google Recaptcha
 *
 *還有一些套件需要相應的primeNG api或其他相關套件的 import
 *import { PrimeNGConfig } from 'primeng/api';
 *import {BrowserModule} from '@angular/platform-browser';
 *import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 */
