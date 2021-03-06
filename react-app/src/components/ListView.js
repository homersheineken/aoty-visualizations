import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { ResponsiveHeatMapCanvas } from '@nivo/heatmap';

const HeatMapWrapper = styled.div`
  height: 98vh;
  width: 95vw;

  ${props => props.controlPanelExpanded && css`
    width: 75vw;
  `}
`;

class ListView extends React.Component {
  constructor(props) {
    super(props);

    const defaultData = this.props.albums.slice(0, this.props.rows);

    const heatmapData = [];

    defaultData.forEach(function(album){
      heatmapData.push(album.attributes);
    });

    this.state = {
      heatmapData
    };
  }

  componentWillReceiveProps(nextProps) {
    const defaultData = nextProps.albums.slice(0, nextProps.rows);

    const heatmapData = [];

    defaultData.forEach(function(album){
      heatmapData.push(album.attributes);
    });

    this.setState({
      heatmapData
    });
  }

  render() {
    return(
      <HeatMapWrapper controlPanelExpanded={this.props.controlPanelExpanded}>
        <ResponsiveHeatMapCanvas
          data={this.state.heatmapData}
          keys={[
            "rtrade",
            "q",
            "rstone",
            "paste",
            "nme",
            "mojo",
            "drwnd",
            "cos",
            "uncut",
            "skinny",
            "cmplx",
            "crack",
            "gvsb",
            "noisey",
            "quietus",
            "strgum",
            "uproxx",
            "vnlfct",
            "wire",
            "popmat",
            "pfork",
            "npr",
            "spin",
            "line",
            "tmt",
            "altern",
            "fact"
          ]}
          indexBy="title_display"
          margin={{
            "top": 50,
            "right": 60,
            "bottom": 60,
            "left": 250
          }}
          forceSquare={false}
          axisTop={{
            "orient": "top",
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": -90,
            "legend": "",
            "legendOffset": 36
          }}
          axisLeft={{
            "orient": "left",
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "country",
            "legendPosition": "center",
            "legendOffset": -40
          }}
          cellOpacity={1}
          cellBorderColor="inherit:darker(0.4)"
          labelTextColor="#000000"
          defs={[
            {
              "id": "lines",
              "type": "patternLines",
              "background": "inherit",
              "color": "rgba(0, 0, 0, 0.1)",
              "rotation": -45,
              "lineWidth": 4,
              "spacing": 7
            }
          ]}
          fill={[
            {
              "id": "lines"
            }
          ]}
          animate={true}
          motionStiffness={80}
          motionDamping={9}
          hoverTarget="rowColumn"
          cellHoverOthersOpacity={0.25}
          colors="blues"
          minValue={1}
          maxValue={50}
        />
      </HeatMapWrapper>
    )
  }
}

ListView.propTypes = {
  albums: PropTypes.array.isRequired,
  rows: PropTypes.number.isRequired,
  controlPanelExpanded: PropTypes.bool
};

export default ListView;