import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { TopSongs } from './TopSongs';
import { mockTopSongs, mockUserInfo, mockAccessToken } from '../Utilities/mockData';

describe('TopSongs component tests', ()=>{
  const mockFunc = jest.fn();
  const wrapper = shallow(
    <TopSongs 
      accessToken={mockAccessToken}
      match={{path: '/top40'}}
      topSongs={mockTopSongs}
      userInfo={mockUserInfo}
    />
  );

  it('should match snapshot render', ()=>{
    expect(wrapper).toMatchSnapshot();
  })
  
  it('should have a default state', ()=>{
    expect(wrapper.state().selected).toEqual(null);
  })

  it('should render top songs',()=>{
    expect(wrapper.instance().renderSongs(mockTopSongs).length).toEqual(3);
  })

  it('should be able to add a selected card to state by index', ()=>{
    wrapper.instance().addSelected(1);

    expect(wrapper.state().selected).toEqual(1);
  })

  it('should be able to update selected card if a new card is clicked', ()=>{
    wrapper.instance().addSelected(1);
    wrapper.instance().addSelected(3);

    expect(wrapper.state().selected).toEqual(3);
  }) 

  it('should be able to return state to null if same card is clicked', ()=>{
    wrapper.instance().addSelected(1);
    wrapper.instance().addSelected(1);

    expect(wrapper.state().selected).toEqual(null);
  })

  it('should show two loading svgs if no top songs exist', ()=>{
    const noSongsWrapper = shallow(
      <TopSongs 
        loadSongs={mockFunc}
        match={{path: '/top40'}}
        authCodeToSagas={mockFunc}
        topSongs={[]}
        userInfo={mockUserInfo}
        accessToken={mockAccessToken}
      />
    );

    expect(noSongsWrapper.find('h2').find('img').length).toEqual(2)
  })

  it('should show user info if undefined is passed to renderInfoCard function', ()=>{
    expect(wrapper.instance().renderInfoCard(undefined).props.children[0].props.children).toEqual('Edgar the Cat')
    expect(wrapper.instance().renderInfoCard(mockTopSongs[0]).props.children[0].props.children).toEqual('In Da Club')
  })

  it('should show artist info if passed artist information',()=>{
    expect(wrapper.instance().renderInfoCard(mockTopSongs[0]).props.children[0].props.children).toEqual('In Da Club')
  })

});
