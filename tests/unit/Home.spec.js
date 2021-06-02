import { mount, shallowMount } from '@vue/test-utils'
import Home from '@/views/Home'
import PostList from '@/components/PostList'

describe('Home.vue', () => {

  it('has data', () => {
      expect(typeof Home.data).toBe('function')
  })

  const wrapper = mount(Home);

  it('has posts', () => {
      expect(Home.data()).toHaveProperty('posts')
      expect(Home.data()).toHaveProperty('comments')
  })
  
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('has all links', () => {
    var anchorHrefs = wrapper.findAll('a');
    expect(anchorHrefs.at(0).attributes().href).toEqual('/about')
    expect(anchorHrefs.at(1).attributes().href).toEqual('/login')
    expect(anchorHrefs.at(2).attributes().href).toEqual('/register')
  })

  it('has title', () => {
    var anchorHrefs = wrapper.find('h1');
    expect(anchorHrefs.html()).toEqual('<h1>Blog Application</h1>')
  })

  it('has post list', () => {
    var pl = wrapper.find(PostList)
    console.log(pl)
    expect(pl.isVueInstance).toBeTruthy()
    expect(typeof pl).toBe('object')  
  })

})
