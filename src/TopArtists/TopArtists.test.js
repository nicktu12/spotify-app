import React from 'react';
import { shallow } from 'enzyme';
import { TopArtists }  from './TopArtists';
import { 
  mockTopArtists, 
  mockUserInfo, 
  mockAccessToken,
} from '../Utilities/mockData';


describe('TopArtists component tests', ()=>{
  const mockFunc = jest.fn();
  const wrapper = shallow(
    <TopArtists 
      authCodeToSagas={mockFunc}
      topArtists={mockTopArtists}
      userInfo={mockUserInfo}
      token={mockAccessToken}
    />
  ); 

  it('should match snapshot render', ()=>{
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state', ()=>{
    expect(wrapper.state().selected).toEqual(null);
  });

  it('should render top artists', ()=>{
    expect(
      wrapper.instance().renderTopArtists(mockTopArtists).length
    ).toEqual(3);
  });

  it('should be able to add a selected card to state by index', ()=>{
    wrapper.instance().addSelected(1);

    expect(wrapper.state().selected).toEqual(1);
  });

  it('should be able to update selected card if a new card is clicked', ()=>{
    wrapper.instance().addSelected(1);
    wrapper.instance().addSelected(3);

    expect(wrapper.state().selected).toEqual(3);
  }); 

  it('should be able to return state to null if same card is clicked', ()=>{
    wrapper.instance().addSelected(1);
    wrapper.instance().addSelected(1);

    expect(wrapper.state().selected).toEqual(null);
  });

  it('should show two loading svgs if no top artists exist', ()=>{
    const noArtistsWrapper = shallow(
      <TopArtists 
        authCodeToSagas={mockFunc}
        topArtists={[]}
        userInfo={mockUserInfo}
        token={mockAccessToken}
      />
    );

    expect(noArtistsWrapper.find('h2').find('img').length).toEqual(2);
  });

  it('should show user info if undefined is passed to renderInfoCard', ()=>{
    expect(
      wrapper.instance().renderInfoCard(
        undefined
      ).props.children[0].props.children
    ).toEqual('Edgar the Cat');
    expect(
      wrapper.instance().renderInfoCard(
        mockTopArtists[0]
      ).props.children[0].props.children
    ).toEqual('Snoop Dogg');
  });

  it('should show artist info if passed artist information', ()=>{
    expect(
      wrapper.instance().renderInfoCard(
        mockTopArtists[0]
      ).props.children[0].props.children
    ).toEqual('Snoop Dogg');
  });
});
