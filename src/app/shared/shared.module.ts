import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './components/popup/popup.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { RouterModule } from '@angular/router';
import { TextLimiterPipe } from './pipes/text-limiter.pipe';
import { AccordionComponent } from './components/accordion/accordion.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { OnlyLettersInputDirective } from './directives/only-letters-input.directive';
import { InputLengthLimiterDirective } from './directives/input-length-limiter.directive';


@NgModule({
  declarations: [
    PopupComponent,
    ProductCardComponent,
    AccordionComponent,
    TextLimiterPipe,
    OnlyLettersInputDirective,
    InputLengthLimiterDirective
  ],
  imports: [
    NgbAccordionModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    PopupComponent,
    ProductCardComponent,
    AccordionComponent,
    TextLimiterPipe,
    OnlyLettersInputDirective,
    InputLengthLimiterDirective
  ]
})
export class SharedModule { }
