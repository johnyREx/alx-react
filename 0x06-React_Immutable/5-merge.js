 import { List, Map } from 'immutable';

 export const contactElements = (page, page2) => List(page1).contact(List(page2));

 export const mergeElements = (page1, page2) => Map(page1).contact(Map(page2));