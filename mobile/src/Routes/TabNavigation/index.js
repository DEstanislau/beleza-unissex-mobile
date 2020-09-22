import React from 'react';

import HomeIcon from '~/assets/img/home.svg';
import SearchIcon from '~/assets/img/search.svg';
import TodayIcon from '~/assets/img/today.svg';
import FavoriteIcon from '~/assets/img/favorite.svg';
import AccountIcon from '~/assets/img/account.svg';

import {TabArea, TabItem, TabItemCenter} from './styles';

export default function TabNavigation({navigation, state}) {
  const goTo = screenName => {
    navigation.navigate(screenName);
  };

  return (
    <TabArea>
      <TabItem onPress={() => goTo('Home')}>
        <HomeIcon
          style={{opacity: state.index === 0 ? 1 : 0.5}}
          width="24"
          height="24"
          fill="#FFFFFF"
        />
      </TabItem>
      {/* <TabItem onPress={() => goTo('Search')}>
        <SearchIcon
          style={{opacity: state.index === 1 ? 1 : 0.5}}
          width="24"
          height="24"
          fill="#FFFFFF"
        />
      </TabItem> */}
      <TabItemCenter onPress={() => goTo('Dashboard')}>
        <TodayIcon width="32" height="32" fill="#4EADBE" />
      </TabItemCenter>
      {/* <TabItem onPress={() => goTo('Favorites')}>
        <FavoriteIcon
          style={{opacity: state.index === 3 ? 1 : 0.5}}
          width="24"
          height="24"
          fill="#FFFFFF"
        />
      </TabItem> */}
      <TabItem onPress={() => goTo('Profile')}>
        <AccountIcon
          style={{opacity: state.index === 2 ? 1 : 0.5}}
          width="24"
          height="24"
          fill="#FFFFFF"
        />
      </TabItem>
    </TabArea>
  );
}
