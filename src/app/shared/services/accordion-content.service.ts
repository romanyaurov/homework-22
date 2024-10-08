import { Injectable } from '@angular/core';
import { AccordionDataType } from 'src/types/accordion-data.type';

@Injectable({
  providedIn: 'root'
})
export class AccordionContentService {

  public accordionContent: AccordionDataType[] = [
    {
      id: 1,
      title: 'Собираете ли вы подарочные боксы?',
      description: 'Да, у нас есть такая услуга. Мы можем собрать подарочный бокс на любой вкус, объем и стоимость!'
    },
    {
      id: 2,
      title: 'Сколько у вас разновидностей чая?',
      description: 'У нас представлено 6 видов чайных наборов. Более подробно вы можете с ними ознакомится в каталоге выше.'
    },
    {
      id: 3,
      title: 'В какой срок осуществляется доставка?',
      description: 'Мы пользуемся услугами самой быстрой логистической компании, поэтому вы можете быть уверены, что ваш заказ будет доставлен в кротчайше возможные сроки.'
    },
    {
      id: 4,
      title: 'У вас обновляется ассортимент?',
      description: 'Мы постоянно ведем работу над расширением нашего ассортимента. Следите за новостями и тогда вы точно не пропустите новинки.'
    },
    {
      id: 5,
      title: 'Какого объема у вас пачки чая?',
      description: 'Стандартная пачка рассчитана на 10 порций готового напитка.'
    }
  ]

}
