import { mount, shallowMount } from '@vue/test-utils'
import Profile from '@/views/Profile'

describe('Profile.vue', () => {

  it('has data', () => {
      expect(Profile.data).toBeUndefined()
  })

  const wrapper = mount(Home);
  
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('has title', () => {
    var anchorHrefs = wrapper.find('h2');
    expect(anchorHrefs.html()).toEqual('<h2>User Profile</h2>')
  })

})
