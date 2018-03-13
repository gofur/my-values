import React, {Component} from 'react';
import { Container, Content, Text,
  Header, Body, List, ListItem,
  Left, Right, CheckBox, Fab, Icon, Tab, Tabs } from 'native-base';

import {FlatList} from 'react-native';

import Tab1 from './TabOne';
import Tab2 from './TabTwo';

export default class Cards extends Component {

  render(){
    return(
      <Container>
      <Content>
        <Tabs>
          <Tab heading="CARDS">
            <Tab1 />
          </Tab>
          <Tab heading="OFFERS">
            <Tab2 />
          </Tab>
        </Tabs>

        </Content>

        <Fab
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate('TodosCreate')}>
            <Icon name="add" />
          </Fab>
      </Container>
    );
  }
}
