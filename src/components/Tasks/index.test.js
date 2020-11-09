import Tasks from './index'
import React from 'react'
import { mount } from 'enzyme'

describe("Test component", () => {
  it("Initial length should be 0", () => {
   const component = mount(<Tasks tasks={[]} />)
   const items = component.find("li")

   expect(items).toHaveLength(0);

  })

  it ('Handle multiple tasks', () => {
    const component = mount(<Tasks tasks={[1,2,3]} />)
    const items = component.find("li");

    expect(items).toHaveLength(3);
  })
})
