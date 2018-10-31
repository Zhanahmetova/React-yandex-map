import React, { Component } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

import building from "../data/buildings";

import { Wrap, MapContent, Search, List, MapWrap, Card } from "./map.style";

class MyMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ""
    };
  }

  handleChangeMark = index => {
    const buildingMark = building;

    for (let i = 0; i < buildingMark.length; i++) {
      buildingMark[i].active = false;
    }

    buildingMark[index].active = true;

    this.setState({
      building: buildingMark
    });
  };

  handleDisableMark = index => {
    const buildingActive = building;

    buildingActive[index].active = false;

    this.setState({
      building: buildingActive
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { searchQuery } = this.state;
    const mapState = {
      center: [43.195, 76.894],
      zoom: 13,
      controls: []
    };
    const filteredBuildings = building.filter(val => {
      if (val.name.toLowerCase().search(searchQuery) > -1) {
        return true;
      }
      return false;
    });

    return (
      <Wrap>
        <MapWrap>
          <Search>
            <input
              name="searchQuery"
              type="search"
              placeholder="Начните искать ... "
              onChange={this.handleChange}
            />
          </Search>
          <YMaps>
            <Map state={mapState}>
              {filteredBuildings.map((val, index) => (
                <Placemark
                  key={val.id}
                  geometry={{
                    coordinates: val.location
                  }}
                  properties={{
                    iconContent: val.name
                  }}
                  options={{
                    iconLayout: "default#image",
                    iconImageHref: val.active
                      ? "/img/location-tag.svg"
                      : "/img/dis-location-tag.svg",
                    iconImageSize: [30, 42],
                    iconImageOffset: [-3, -42]
                  }}
                  onClick={e => this.handleChangeMark(index, val.id)}
                />
              ))}
            </Map>
          </YMaps>
        </MapWrap>
        <div style={{ position: "relative" }}>
          {filteredBuildings.map((val, index) => {
            return (
              (val.active && (
                <Card key={val.id} active={val.action}>
                  <h4> {val.name}</h4>
                  <p> {val.title}</p>
                  <h6
                    onClick={e => this.handleDisableMark(index)}
                    style={{ cursor: "pointer" }}
                  >
                    Закрыть
                  </h6>
                </Card>
              )) ||
              null
            );
          })}
        </div>
      </Wrap>
    );
  }
}
export default MyMap;
