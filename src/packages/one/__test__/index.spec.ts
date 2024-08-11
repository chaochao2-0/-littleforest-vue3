import { mount } from '@vue/test-utils'
import One from '../index.vue'

describe('One.vue', () => {
  test('render', () => {
    const wrapper = mount(One, {
      props: {},
    })
    expect(wrapper.classes()).toContain('one')
  })
})
