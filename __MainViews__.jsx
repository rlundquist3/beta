import {getFramework7, getCurrentRoute} from './App';

const MainViews = () => (
  <Views>
    <View navbarThrough dynamicNavbar={true} main url="/">
      {/* iOS navbar gets rendered under the view */}
      {!getFramework7().params.material ?
        <Navbar title="My App" />
      ) : null}
      <Pages>
        <Page>
          {/* Material navbar gets rendered under the page */}
          {getFramework7().params.material ?
            <Navbar title="My App" />
          ) : null}
          <ContentBlock>
            <ul>
            {
                Object.keys(getCurrentRoute().params).map((paramName, index) => (
                    <li key={index}><b>{`${paramName}: `}</b>{getCurrentRoute().params[paramName]}</li>;
                ))
            }
            </ul>
          </ContentBlock>
        </Page>
      </Pages>
    </View>
  </Views>
);
