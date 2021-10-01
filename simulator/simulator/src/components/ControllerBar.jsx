import React from "react";
import Title from "./Title";
import PropTypes from "prop-types";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import { Typography } from "@material-ui/core";
import Chip from "@mui/material/Chip";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import PlayCircle from "@mui/icons-material/PlayCircle";
import StopCircle from "@mui/icons-material/StopCircle";
import RestartCircle from "@mui/icons-material/RestartAltRounded";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from '@mui/material/styles';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import Stack from '@mui/material/Stack';

const ControllerBar = (props) => {
  const startPointPanel = { x: -1150, y: -200 };
  const [play, setPlay] = React.useState(false);
  const [disabledPlay, setDisabledPlay] = React.useState(false);
  const [colorPlay, setColorPlay] = React.useState("#568");
  const [colorStop, setColorStop] = React.useState("#568");
  const [colorRestart, setColorRestart] = React.useState("#568");
  const [openMsg, setOpenMsg] = React.useState(false);
  const [program, setProgram] = React.useState("");


  const handleControl = (event, newControl) => {
    console.log(newControl);
    if (newControl == "play") {
      props.runSimulation();
      setDisabledPlay(true);
    }
    if (newControl == "stop"){
      props.stopSimulation();
      setDisabledPlay(false);
    } 
  };

  let rectStyle = {
    x: startPointPanel.x,
    y: startPointPanel.y,
    width: 390,
    height: 200,
    style: {
      fill: "#F0F8FF",
      stroke: "#444",
      strokeWidth: "2px",
    },
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenMsg(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const handlePlay = () => {
    if (play) {
      setColorPlay("#568");
      setPlay(false);
      setOpenMsg(false);
    } else {
      setColorPlay("#7CFC00");
      setPlay(true);
      setOpenMsg(true);
    }
    props.play(play);
  };

  const Input = styled('input')({
    display: 'none',
  });

  const handleChange = e => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
      console.log(e.target.result);
      setProgram(e.target.result);
      props.code(e.target.result);
    }
  }
  
  function UploadButtons() {
    return (
      <Stack direction="row" alignItems="center" spacing={1}>
        <label htmlFor="contained-button-file">
          <Input accept=".json,application/json" id="contained-button-file" multiple="false" type="file" onChange={handleChange} />
          <Button variant="primary" component="span">
            Carregar programa
          </Button>
        </label>
        <label htmlFor="icon-button-file">
          <Input accept="image/*" id="icon-button-file" type="file" />
          <IconButton color="primary" aria-label="upload picture" component="span">
            <FileCopyIcon />
          </IconButton>
        </label>
      </Stack>
    );
  }

  return (
    <div>
      <Divider textAlign="left">
        <Chip label="Painel de Controle"></Chip>
      </Divider>
      <div
        className="controlPanel"
        style={{
          paddingLeft: "170px",
          paddingRight: "170px",
          marginTop: "30px",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          
          <Grid container spacing={1}>
            <Grid xs={4}>
              <ToggleButtonGroup
                size="large"
                exclusive
                aria-label="control"
                onChange={handleControl}
              >
                <ToggleButton
                  value="play"
                  aria-label="left aligned"
                  id="playButton"
                  disabled={disabledPlay}
                >
                  <PlayCircle></PlayCircle>
                  <Typography>Iniciar</Typography>
                </ToggleButton>
                <ToggleButton value="stop" aria-label="centered">
                  <StopCircle></StopCircle>
                  <Typography>Parar</Typography>
                </ToggleButton>
                <ToggleButton value="restart" aria-label="right aligned">
                  <RestartCircle></RestartCircle>
                  <Typography>Reiniciar</Typography>
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>
            <Grid xs={8}>
              <TextField
                id="outlined-multiline-static"
                label="Log"
                multiline
                rows={4}
                defaultValue="Não esqueça de pressionar o botão [Iniciar] para energizar o CLP..."
                style={{ width: "100%" }}
              />
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

ControllerBar.propTypes = {
  runSimulation: PropTypes.func.isRequired,
  stopSimulation: PropTypes.func.isRequired,
};

export default ControllerBar;
