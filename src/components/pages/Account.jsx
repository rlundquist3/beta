import React from 'react';
import {Page, ContentBlock, Navbar} from 'framework7-react';

export const Account = () => {
    return (
        <Page>
            <Navbar title="Account" backLink="Back" sliding />
            <ContentBlock inner>
                <p>username</p>
                <p>account details</p>
            </ContentBlock>
        </Page>
    );
};
