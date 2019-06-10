import React, { Component } from "react";
//import GaugeChart from "react-gauge-chart";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
//import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
//import { sizing } from "@material-ui/system";
//import GridList from "@material-ui/core/GridList";
//import GridListTile from "@material-ui/core/GridListTile";
//import Gauge from "react-radial-gauge";
import { color } from "d3-color";
import { interpolateRgb } from "d3-interpolate";
import LiquidFillGauge from "react-liquid-gauge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ReactPlayer from "react-player";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import canvas from "canvas-gauges";
import LinearProgress from "@material-ui/core/LinearProgress";

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  }
}));

class Proj extends Component {
  state = {
    value: 50,
    completed: 0
  };
  startColor = "#cf6679"; // cornflowerblue
  endColor = "#b00020"; // crimson

  componentDidMount() {
    this.timer = setInterval(this.progress, 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    if (completed === 100) {
      this.setState({ completed: 0 });
    } else {
      const diff = Math.random() * 10;
      var dist = Math.min(completed + diff, 100);
      this.setState({ completed: dist });
    }
  };
  render() {
    const { classes } = this.props;
    /*const bull = <span className={classes.bullet}>•</span>;*/
    const radius = 115;
    const interpolate = interpolateRgb(this.startColor, this.endColor);
    const fillColor = interpolate(this.state.value / 100);
    const gradientStops = [
      {
        key: "0%",
        stopColor: color(fillColor)
          .darker(0.5)
          .toString(),
        stopOpacity: 1,
        offset: "0%"
      },
      {
        key: "50%",
        stopColor: fillColor,
        stopOpacity: 0.75,
        offset: "50%"
      },
      {
        key: "100%",
        stopColor: color(fillColor)
          .brighter(0.5)
          .toString(),
        stopOpacity: 0.5,
        offset: "100%"
      }
    ];
    const degree = 66;
    return (
      <div>
        <div className={classes.root} style={{ backgroundColor: "#000000" }}>
          <Container maxWidth="lg" className={classes.container}>
            <Grid
              container
              spacing="2"
              direction="row"
              justify="space-around"
              alignItems="flex-start"
              style={{ paddingTop: "10px" }}
            >
              <Grid item xs={4} md={4} lg={4}>
                <Card
                  className={classes.card}
                  style={{
                    width: 400,
                    height: 300,
                    backgroundColor: "#282D33"
                  }}
                >
                  <CardContent>
                    <ReactPlayer
                      url="https://www.youtube.com/watch?v=zcikLQZI5wQ"
                      playing
                      width="100%"
                      height={225}
                      position="absolute"
                    />
                    <h4
                      style={{
                        color: "#f88",
                        textAlign: "center"
                      }}
                    >
                      Video Feed
                    </h4>
                  </CardContent>
                  <CardActions />
                </Card>
              </Grid>
              <Grid item xs={5} md={5} lg={5}>
                <Card
                  className={classes.card}
                  style={{
                    width: 500,
                    height: 300,
                    backgroundColor: "#282D33"
                  }}
                >
                  <CardContent>
                    <h3
                      style={{
                        color: "#f88",
                        textAlign: "center",

                        paddingBottom: "10px"
                      }}
                    >
                      Pod Orientation
                    </h3>
                    <div
                      style={{
                        width: "30%",
                        display: "inline-block",
                        marginLeft: "15px",
                        paddingRight: "5px"
                      }}
                    >
                      <CircularProgressbar
                        value={degree}
                        minValue={0}
                        maxValue={360}
                        text={`${degree}°`}
                        styles={buildStyles({
                          // Rotation of path and trail, in number of turns (0-1)
                          rotation: 0.25,

                          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                          strokeLinecap: "butt",

                          // Text size
                          textSize: "16px",

                          // How long animation takes to go from one percentage to another, in seconds
                          pathTransitionDuration: 0.5,

                          // Can specify path transition in more detail, or remove it entirely
                          // pathTransition: 'none',

                          // Colors
                          pathColor: `rgba(62, 152, 199, ${degree / 360})`,
                          textColor: "#f88",
                          trailColor: "#d6d6d6"
                        })}
                      />
                      <h5
                        style={{
                          color: "#f88",
                          textAlign: "center",

                          paddingBottom: "10px"
                        }}
                      >
                        Roll
                      </h5>
                    </div>
                    <div
                      style={{
                        width: "30%",
                        display: "inline-block",
                        paddingRight: "5px"
                      }}
                    >
                      <CircularProgressbar
                        value={27}
                        minValue={0}
                        maxValue={360}
                        text={`${27}°`}
                        styles={buildStyles({
                          // Rotation of path and trail, in number of turns (0-1)
                          rotation: 0.25,

                          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                          strokeLinecap: "butt",

                          // Text size
                          textSize: "16px",

                          // How long animation takes to go from one percentage to another, in seconds
                          pathTransitionDuration: 0.5,

                          // Can specify path transition in more detail, or remove it entirely
                          // pathTransition: 'none',

                          // Colors
                          pathColor: `rgba(62, 152, 199, ${degree / 360})`,
                          textColor: "#f88",
                          trailColor: "#d6d6d6"
                        })}
                      />
                      <h5
                        style={{
                          color: "#f88",
                          textAlign: "center",

                          paddingBottom: "10px"
                        }}
                      >
                        Pitch
                      </h5>
                    </div>
                    <div
                      style={{
                        width: "30%",
                        display: "inline-block"
                      }}
                    >
                      <CircularProgressbar
                        value={0}
                        minValue={0}
                        maxValue={360}
                        text={`${0}°`}
                        styles={buildStyles({
                          // Rotation of path and trail, in number of turns (0-1)
                          rotation: 0.25,

                          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                          strokeLinecap: "butt",

                          // Text size
                          textSize: "16px",

                          // How long animation takes to go from one percentage to another, in seconds
                          pathTransitionDuration: 0.5,

                          // Can specify path transition in more detail, or remove it entirely
                          // pathTransition: 'none',

                          // Colors
                          pathColor: `rgba(62, 152, 199, ${degree / 360})`,
                          textColor: "#f88",
                          trailColor: "#d6d6d6"
                        })}
                      />
                      <h5
                        style={{
                          color: "#f88",
                          textAlign: "center",

                          paddingBottom: "10px"
                        }}
                      >
                        Yaw
                      </h5>
                    </div>
                  </CardContent>
                  <CardActions />
                </Card>
              </Grid>
              <Grid item xs={3} md={3} lg={3}>
                <Card
                  className={classes.card}
                  style={{
                    width: 300,
                    height: 300,
                    backgroundColor: "#282D33"
                  }}
                >
                  <CardContent>
                    <img
                      alt=""
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjuz7haMESW57roBghEMKFkEDXlw8g9Rybktq3_pZlS7yKjvEn"
                      width="270"
                      height="150"
                      display="block"
                      marginLeft="auto"
                      marginRight="auto"
                    />
                    <h1
                      style={{
                        color: "#f88",
                        textAlign: "center"
                      }}
                    >
                      37%
                    </h1>
                    <h3
                      style={{
                        color: "#f88",
                        textAlign: "center"
                      }}
                    >
                      Battery Status
                    </h3>
                  </CardContent>
                  <CardActions />
                </Card>
              </Grid>
            </Grid>
          </Container>
        </div>
        <div className={classes.root} style={{ backgroundColor: "#000000" }}>
          <Container maxWidth="lg" className={classes.container}>
            <Grid
              container
              spacing={2}
              direction="row"
              justify="space-around"
              alignItems="center"
              style={{ paddingTop: "10px" }}
            >
              <Grid item xs={9} md={9} lg={9}>
                <Card
                  className={classes.card}
                  style={{
                    width: 910,
                    height: 300,
                    backgroundColor: "#282D33"
                  }}
                  justify="flex-start"
                  alignItems="flex-start"
                  direction="row"
                >
                  <CardContent>
                    <Grid
                      container
                      spacing={5}
                      direction="row"
                      justify="flex-start"
                      alignItems="flex-start"
                      style={{ paddingTop: "10px" }}
                    >
                      <Grid item xs={4} md={4} lg={4}>
                        <div style={{ marginLeft: "25px" }}>
                          <canvas
                            data-type="radial-gauge"
                            data-width="225"
                            data-height="225"
                            data-units="Km/h"
                            data-min-value="0"
                            data-max-value="220"
                            data-major-ticks="0,20,40,60,80,100,120,140,160,180,200,220"
                            data-minor-ticks="2"
                            data-stroke-ticks="true"
                            data-highlights='[{"from": 160, "to": 220, "color": "rgba(200, 50, 50, .75)"}]'
                            data-color-plate="#fff"
                            data-border-shadow-width="0"
                            data-borders="false"
                            data-needle-type="arrow"
                            data-needle-width="2"
                            data-needle-circle-size="7"
                            data-needle-circle-outer="true"
                            data-needle-circle-inner="false"
                            data-animation-duration="1500"
                            data-animation-rule="linear"
                          />
                          <h4
                            style={{
                              color: "#f88",
                              textAlign: "center",
                              paddingBottom: "5px"
                            }}
                          >
                            Speed
                          </h4>
                        </div>
                      </Grid>
                      <Grid item xs={4} md={4} lg={4}>
                        <div style={{ marginLeft: "25px" }}>
                          <canvas
                            data-type="radial-gauge"
                            data-width="225"
                            data-height="225"
                            data-units="Km/h"
                            data-min-value="0"
                            data-max-value="220"
                            data-major-ticks="0,20,40,60,80,100,120,140,160,180,200,220"
                            data-minor-ticks="2"
                            data-stroke-ticks="true"
                            data-highlights='[{"from": 160, "to": 220, "color": "rgba(200, 50, 50, .75)"}]'
                            data-color-plate="#fff"
                            data-border-shadow-width="0"
                            data-borders="false"
                            data-needle-type="arrow"
                            data-needle-width="2"
                            data-needle-circle-size="7"
                            data-needle-circle-outer="true"
                            data-needle-circle-inner="false"
                            data-animation-duration="1500"
                            data-animation-rule="linear"
                          />
                          <h4
                            style={{
                              color: "#f88",
                              textAlign: "center",
                              paddingBottom: "25px"
                            }}
                          >
                            Acceleration
                          </h4>
                        </div>
                      </Grid>
                      <Grid item xs={4} md={4} lg={4}>
                        <LiquidFillGauge
                          style={{ margin: "0 auto" }}
                          width={radius * 2}
                          height={radius * 2}
                          value={this.state.value}
                          percent="%"
                          textSize={1}
                          textOffsetX={0}
                          textOffsetY={0}
                          textRenderer={props => {
                            const value = Math.round(props.value);
                            const radius = Math.min(
                              props.height / 2,
                              props.width / 2
                            );
                            const textPixels = (props.textSize * radius) / 2;
                            const valueStyle = {
                              fontSize: textPixels
                            };
                            const percentStyle = {
                              fontSize: textPixels * 0.6
                            };

                            return (
                              <tspan>
                                <tspan className="value" style={valueStyle}>
                                  {value}
                                </tspan>
                                <tspan style={percentStyle}>
                                  {props.percent}
                                </tspan>
                              </tspan>
                            );
                          }}
                          riseAnimation
                          waveAnimation
                          waveFrequency={2}
                          waveAmplitude={1}
                          gradient
                          gradientStops={gradientStops}
                          circleStyle={{
                            fill: fillColor
                          }}
                          waveStyle={{
                            fill: fillColor
                          }}
                          textStyle={{
                            fill: color("#444").toString(),
                            fontFamily: "Arial"
                          }}
                          waveTextStyle={{
                            fill: color("#f88").toString(),
                            fontFamily: "Arial"
                          }}
                        />
                        <h4
                          style={{
                            color: "#f88",
                            textAlign: "center"
                          }}
                        >
                          Fuel Indicator
                        </h4>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={3} md={3} lg={3}>
                <Card
                  className={classes.card}
                  style={{
                    width: 300,
                    height: 300,
                    backgroundColor: "#282D33"
                  }}
                >
                  <Container maxWidth="lg" className={classes.container}>
                    <Grid
                      container
                      spacing={2}
                      direction="row"
                      justify="center"
                      alignItems="center"
                    >
                      <Grid item xs sm md lg>
                        <canvas
                          data-type="linear-gauge"
                          data-width="100"
                          data-height="250"
                          data-units="°C"
                          data-min-value="0"
                          data-max-value="220"
                          data-major-ticks="0,20,40,60,80,100,120,140,160,180,200,220"
                          data-minor-ticks="2"
                          data-stroke-ticks="true"
                          data-highlights='[ {"from": 100, "to": 220, "color": "rgba(200, 50, 50, .75)"} ]'
                          data-color-plate="#fff"
                          data-border-shadow-width="0"
                          data-borders="false"
                          data-needle-type="arrow"
                          data-needle-width="2"
                          data-animation-duration="1500"
                          data-animation-rule="linear"
                          data-tick-side="left"
                          data-number-side="left"
                          data-needle-side="left"
                          data-bar-stroke-width="7"
                          data-bar-begin-circle="false"
                          data-value="75"
                        />
                        <h4
                          style={{
                            color: "#f88",
                            textAlign: "center"
                          }}
                        >
                          Temperature
                        </h4>
                      </Grid>
                      <Grid item xs sm md lg>
                        <canvas
                          data-type="linear-gauge"
                          data-width="100"
                          data-height="250"
                          data-units="Pa"
                          data-min-value="0"
                          data-start-angle="90"
                          data-ticks-angle="180"
                          data-value-box="false"
                          data-max-value="220"
                          data-major-ticks="0,20,40,60,80,100,120,140,160,180,200,220"
                          data-minor-ticks="2"
                          data-stroke-ticks="true"
                          data-highlights='[ {"from": 100, "to": 220, "color": "rgba(200, 50, 50, .75)"} ]'
                          data-color-plate="#fff"
                          data-border-shadow-width="0"
                          data-borders="false"
                          data-needle-type="arrow"
                          data-needle-width="2"
                          data-needle-circle-size="7"
                          data-needle-circle-outer="true"
                          data-needle-circle-inner="false"
                          data-animation-duration="1500"
                          data-animation-rule="linear"
                          data-bar-width="10"
                          data-value="35"
                        />
                        <h4
                          style={{
                            color: "#f88",
                            textAlign: "center"
                          }}
                        >
                          Pressure
                        </h4>
                      </Grid>
                    </Grid>
                  </Container>
                </Card>
              </Grid>
            </Grid>
          </Container>
          <div className={classes.root} style={{ backgroundColor: "#000000" }}>
            <Container maxWidth="lg" className={classes.container}>
              <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                style={{ paddingTop: "10px" }}
              >
                <Grid item xs={9} md={9} lg={9}>
                  <Card
                    className={classes.card}
                    style={{
                      width: 910,
                      height: 100,
                      backgroundColor: "#282D33"
                    }}
                  >
                    <CardContent>
                      <LinearProgress
                        color="secondary"
                        variant="determinate"
                        value={this.state.completed}
                      />

                      <p
                        style={{
                          color: "#f88",
                          textAlign: "center"
                        }}
                      >
                        {this.state.completed}
                      </p>
                      <h5
                        style={{
                          color: "#f88",
                          textAlign: "center"
                        }}
                      >
                        Distance Travelled
                      </h5>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={3} md={3} lg={3}>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    style={{
                      width: 300,
                      height: 100,
                      textSize: 100
                      //backgroundColor: "#282D33"
                    }}
                  >
                    EMERGENCY STOP
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

Proj.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Proj);
