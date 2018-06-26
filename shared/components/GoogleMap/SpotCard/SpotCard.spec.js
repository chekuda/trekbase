import React from 'react'
import { mount } from 'enzyme'

import SpotCard from './SpotCard'
import { getMin, getMax } from '../../../utils'

fdescribe('SpotCard', () => {
  describe('given the SpotCard component with the spots props', () => {
    const props = {
      spot: {
        dificulty: 1,
        stars: 2,
        text: 'dummy-text',
        imageList: [],
        maxAltitude: '200m',
        routes: [{ name: 'first', hours: 9 }, { name: 'second', hours: 8 }],
        id: 'uniqueId'
      },
      spotToRender: true
    }
    describe('when Im the spot to be rendered', () => {
      let component
      beforeEach(() => {
        component = mount(<SpotCard {...props}/>)
      })
      it('spotToRender will determinate if spot is rendered by transition', () => {
        expect(component.find('Transition').props().in).toBe(props.spotToRender)
      })
      it('spotCard markup should be rendered', () => {
        expect(component.find('.spotCard').length).toBe(1)
      })
      it('close button markup should be rendered', () => {
        expect(component.find('.close .fa.fa-close').length).toBe(1)
      })
      it('slider markup should be rendered', () => {
        expect(component.find('.slider').length).toBe(1)
        expect(component.find('Carousel').length).toBe(1)
      })
      it('info block markup should be rendered', () => {
        expect(component.find('.info').length).toBe(1)
        expect(component.find('.info .name').props().children).toBe(props.spot.text)
        expect(component.find('.info .hight').props().children).toEqual(['Max-hight: ', props.spot.maxAltitude])
        expect(component.find('.info .routes').props().children).toEqual(['Routes: ', props.spot.routes.length])
        expect(component.find('.info .maxhours').props().children).toEqual(['Max hours: ', getMax(props.spot.routes.map(({ hours = 0 }) => hours))])
        expect(component.find('.info .minhours').props().children).toEqual(['Min hours: ', getMin(props.spot.routes.map(({ hours = 0 }) => hours))])
        expect(component.find('.info .fa.fa-star').length).toEqual(props.spot.stars)
        expect(component.find('.info .dificulty .fa-signal').props().className).toEqual(`fa fa-signal ${props.spot.dificulty}`)
      })
    })
    describe('when the user click on spot rendered', () => {
      describe('and the callback spotClicked is passed', () => {
        const newProps = {
          ...props,
          onSpotClicked: jest.fn()
        }
        it('callback should be called with the spot id', () => {
          const component = mount(<SpotCard {...newProps}/>)

          component.find('.spotCard').simulate('click')

          expect(newProps.onSpotClicked).toHaveBeenCalledWith(newProps.spot.id)
        })
      })
    })
    describe('when the user hover on spot rendered', () => {
      describe('and the callback onOverSpot is passed', () => {
        const newProps = {
          ...props,
          onOverSpot: jest.fn()
        }
        it('callback should be called with the spot id', () => {
          const component = mount(<SpotCard {...newProps}/>)

          component.find('.spotCard').simulate('mouseOver')

          expect(newProps.onOverSpot).toHaveBeenCalledWith(newProps.spot.id)
        })
      })
    })
    describe('when the user click close on spot rendered', () => {
      describe('and the callback onCLickClose is passed', () => {
        const newProps = {
          ...props,
          onClickClose: jest.fn()
        }
        it('callback should be called', () => {
          const component = mount(<SpotCard {...newProps}/>)

          component.find('.close').simulate('click')

          expect(newProps.onClickClose).toHaveBeenCalled()
        })
      })
    })
    describe('when the transtion has ended', () => {
      describe('and the spot is the one selected', () => {
        describe('and the spotCard instance is the one within the map', () => {
          it('callback to fit spotCard in the map is called', () => {
            const newProps = {
              ...props,
              spotSelected: 'selected',
              fitInMap: true,
              fitSpotCardOnMap: jest.fn()
            }

            const mockTarget = {
              target: {
                getBoundingClientRect: () => {}
              }
            }

            const component = mount(<SpotCard {...newProps}/>)
            component.instance().transitionHasEnded(mockTarget)

            expect(newProps.fitSpotCardOnMap).toHaveBeenCalled()
          })
        })
      })
    })
  })
})