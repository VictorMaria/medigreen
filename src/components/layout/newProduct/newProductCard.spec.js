import React from 'react';
import { mount } from 'enzyme'
import NewProductCard from './NewProductCard'

describe('NewProduct', () => {
    it('should render the New Product component correctly', () => {
      const wrapper = mount(
          <NewProductCard/>
      );
      expect(wrapper.find('input').length).toEqual(2);
      expect(wrapper.find('MdPlaylistAdd').length).toEqual(1);
     });
  });