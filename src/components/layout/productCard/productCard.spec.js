import React from 'react';
import { mount } from 'enzyme'
import ProductCard from './ProductCard'


const name = 'folic acid'
const price = 5
const prices = [ { id: '0n3', price: '5', date: '2019-01-01T17:16:32+00:00' } ]
describe('ProductCard', () => {
    it('should render the Product Card component correctly', () => {
      const props = {
        name,
        price,
        prices,
      };
  
      const wrapper = mount(
          <ProductCard {...props} />
      );
      expect(wrapper.find('#name').length).toEqual(1);
      expect(wrapper.find('#price').length).toEqual(1);
      expect(wrapper.find('span').length).toEqual(2);
      expect(wrapper.find('MdModeEdit').length).toEqual(1);
      expect(wrapper.find('MdBackspace').length).toEqual(1);
    });
  });