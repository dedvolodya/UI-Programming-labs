import { mount } from '@vue/test-utils'
import Register from '@/views/Register'
import sinon from 'sinon'

describe('Register.vue', () => {
  it('has data', () => {
    expect(typeof Register.data).toBe('function')
  })

  const wrapper = mount(Register);

  it('has user', () => {
    expect(Register.data()).toHaveProperty('user')
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('has title', () => {
    var anchorHrefs = wrapper.find('h2');
    expect(anchorHrefs.html()).toEqual('<h2>Register</h2>')
  })

  it('has all inputs', () => {
    var anchorHrefs = wrapper.findAll('input');
    expect(anchorHrefs.at(0).attributes().name).toEqual('firstName')
    expect(anchorHrefs.at(1).attributes().name).toEqual('lastName')
    expect(anchorHrefs.at(2).attributes().name).toEqual('username')
    expect(anchorHrefs.at(3).attributes().name).toEqual('email')
    expect(anchorHrefs.at(4).attributes().name).toEqual('password')
  })

  it('has cancel', () => {
    var anchorHrefs = wrapper.findAll('router-link');
    expect(anchorHrefs.at(0).attributes().to).toEqual('/')
  })

  it('has login button', async () => {
    const spy = sinon.spy()
    const wrapper2 = mount(Register, {
      methodData: {
        callTest: spy
      }
    })
    await wrapper2.find('button').trigger('click')
  
    spy.calledWith('stub')
  })  
})
