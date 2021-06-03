import { mount } from '@vue/test-utils'
import About from '@/views/About'

describe('About.vue', () => {
  it('has no data', () => {
      expect(About.data).toBeUndefined()
  })
  const wrapper = mount(About);

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<div><a href=\"/\" class=\"link\">Back</a>\n'
    + '  <h1>My blog web-application using Vue JS</h1>\n'
    + '  <p>This application was made for stydying</p>\n'
    + '</div>')
  })
})
