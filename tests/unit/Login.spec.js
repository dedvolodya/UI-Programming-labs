import { mount } from '@vue/test-utils'
import Login from '@/views/Login'
import sinon from 'sinon'

describe('Login.vue', () => {
  it('has data', () => {
    expect(typeof Login.data).toBe('function')
  })

  const wrapper = mount(Login);

  it('has user', () => {
    expect(Login.data()).toHaveProperty('user')
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('has title', () => {
    var anchorHrefs = wrapper.find('h2');
    expect(anchorHrefs.html()).toEqual('<h2>Login</h2>')
  })

  it('has all inputs', () => {
    var anchorHrefs = wrapper.findAll('input');
    expect(anchorHrefs.at(0).attributes().name).toEqual('email')
    expect(anchorHrefs.at(1).attributes().name).toEqual('password')
  })

  it('has back', () => {
    var anchorHrefs = wrapper.findAll('router-link');
    expect(anchorHrefs.at(0).attributes().to).toEqual('/')
  })

  it('has login button', async () => {
    const spy = sinon.spy()
    const wrapper2 = mount(Login, {
      methodData: {
        callTest: spy
      }
    })
    await wrapper2.find('button').trigger('click')
  
    spy.calledWith('stub')
  })  
})
