import React from 'react';
import { mount } from 'enzyme'
import EditableProductCard from './EditableProductCard'


const name = 'folic acid'
const price = 5
const prices = [ { id: '0n3', price: '5', date: '2019-01-01T17:16:32+00:00' } ]
describe('EditableProductCard', () => {
    it('should render the Editable Product Card component correctly', () => {
      const props = {
        name,
        price,
        prices,
      };
  
      const wrapper = mount(
          <EditableProductCard {...props} />
      );
      expect(wrapper.find('input').length).toEqual(2);
      expect(wrapper.find('MdDoneAll').length).toEqual(1);
      expect(wrapper.find('MdCancel').length).toEqual(1);
    });
  });