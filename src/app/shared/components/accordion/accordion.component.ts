import { Component } from '@angular/core';
import { AccordionContentService } from '../../services/accordion-content.service';
import { AccordionDataType } from 'src/types/accordion-data.type';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {

  protected accordionItems: AccordionDataType[];

  constructor(
    private accordionContentService: AccordionContentService
  ) {
    this.accordionItems = accordionContentService.accordionContent;
  }

}
