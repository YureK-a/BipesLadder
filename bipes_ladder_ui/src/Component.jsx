import React, { useRef, useEffect } from "react";
import { useDrag } from "react-dnd";
import { COMPONENT } from "./constants";
import TextField from "@material-ui/core/TextField";
import {
  Button,
  Modal,
  Box,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  Checkbox,
} from "@material-ui/core";
import { AddAlarmOutlinedIcon } from "@material-ui/icons";

const style = {
  //border: "1px dashed black",
  cursor: "move",
  textAlign: "center",
};

const style_modal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "grid",
};

const Component = ({ data, components, path, addressFromComponent }) => {
  const component = components[data.id];
  const ref = useRef(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [address, setAddress] = React.useState(component.properties.address);

  const [{ isDragging }, drag] = useDrag({
    item: { type: COMPONENT, id: data.id, path },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(ref);

  const changeProperty = () => {
    let value = document.getElementById("changeAddress").value;
    console.log(address);
    setAddress(value);
    component.properties.address = value;
    console.log(component.properties.address);

    if (components[data.id].content == "timer") {
      component.properties.timerType = timerType;
      component.properties.timerDuration = timerDuration;
      component.properties.baseTime = baseTime;
      component.svg.text = svgText;
    } else if (components[data.id].content == "counter") {
      component.properties.counterType = counterType;
      component.properties.preValue = preValue;
      component.svg.text = svgText;
    }

    setOpen(false);
  };

  useEffect(() => {
    if (component.id !== "lineComponent" && address !== "") {
      console.log(address);
      addressFromComponent({
        address: address,
        path: path,
        type: component.content,
      });
    }
  }, [address]);

  const [timerType, setTimerType] = React.useState(
    component.properties.timerType
  );
  const [timerDuration, setTimerDuration] = React.useState(
    component.properties.timerDuration
  );
  const [baseTime, setBaseTime] = React.useState(component.properties.baseTime);
  const [redentiveTimer, setRedentiveTimer] = React.useState(
    component.properties.redentiveTimer
  );
  const [counterType, setCounterType] = React.useState(
    component.properties.counterType
  );
  const [preValue, setpreValue] = React.useState(component.properties.preValue);
  const [svgText, setSvgText] = React.useState(component.svg.text);
  const [svgIcon, setSvgIcon] = React.useState(component.svg.icon);

  const onAddressChange = (e) => {
    //setAddress(e.target.value);
    console.log(e.target.value);
  };

  //Hooks do Timer
  const onTimerTypeChange = (e) => {
    setTimerType(e.target.value);
    console.log(timerType);
    setSvgText(e.target.value);
    console.log(`O SVGTEXT é ${svgText}`);
  };
  const onTimerDurantionChange = (e) => {
    setTimerDuration(e.target.value);
    console.log(timerDuration);
  };
  const onBaseTimeChange = (e) => {
    setBaseTime(e.target.value);
    console.log(baseTime);
  };
  const onRedentiveTimerChange = (e) => {
    setRedentiveTimer(e.target.value);
    console.log(baseTime);
  };

  //Hooks do contador
  const onCounterTypeChange = (e) => {
    setCounterType(e.target.value);
    console.log(counterType);
    setSvgText(e.target.value);
    console.log(`O SVGTEXT é ${svgText}`);
  };
  const onPreValueChange = (e) => {
    setpreValue(e.target.value);
    console.log(preValue);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const timerParameters = () => {
    return (
      <div>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Tipo de timer
        </Typography>
        <Select
          labelId="label"
          id="timerType"
          value="20"
          component="h2"
          class=".MuiTypography-h6"
          onChange={onTimerTypeChange}
          value={timerType}
        >
          <MenuItem value="TON">TON</MenuItem>
          <MenuItem value="TOF">TOF</MenuItem>
        </Select>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Duração do Timer
        </Typography>
        <TextField
          id="timerDuration"
          label="Segundos"
          variant="outlined"
          onChange={onTimerDurantionChange}
          value={timerDuration}
        />
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Tempo Base
        </Typography>
        <TextField
          id="baseTime"
          label="Segundos"
          variant="outlined"
          onChange={onBaseTimeChange}
          value={baseTime}
        />
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Timer redentivo
        </Typography>
        <Checkbox
          {...label}
          color="blue"
          labelPlacement="top"
          id="redentiveTimer"
          onChange={onRedentiveTimerChange}
          value={redentiveTimer}
        />
      </div>
    );
  };
  const counterParameters = () => {
    return (
      <div>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Tipo de counter
        </Typography>
        <Select
          labelId="label"
          id="counterType"
          value="0"
          id="modal-modal-title"
          component="h2"
          class=".MuiTypography-h6"
          onChange={onCounterTypeChange}
          value={counterType}
        >
          <MenuItem value="ASC">Crescente</MenuItem>
          <MenuItem value="DSC">Decrescente</MenuItem>
          <MenuItem value="UDC">UDC</MenuItem>
        </Select>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Valor pre-ajustado do counter
        </Typography>
        <TextField
          id="PreValue"
          label="Segundos"
          variant="outlined"
          onChange={onPreValueChange}
          value={preValue}
        />
      </div>
    );
  };

  const [newParameters, setNewParameters] = React.useState("");
  const checkBox = () => {
    React.useEffect(() => {
      if (components[data.id].content == "timer") {
        setSvgIcon(
          <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke-width="0.1"
            x="44"
            y="14"
            width="30"
            height="30"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
        setNewParameters(timerParameters());
      } else if (components[data.id].content == "counter") {
        setSvgIcon("counter");
        setNewParameters(counterParameters());
        if (counterType == "ASC") {
          setSvgIcon(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="44"
              y="15"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-sort-numeric-up-alt"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.36 7.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.836 1.973-1.836 1.09 0 2.063.637 2.063 2.688 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z"
              />
              <path d="M12.438 8.668V14H11.39V9.684h-.051l-1.211.859v-.969l1.262-.906h1.046zM4.5 13.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z" />
            </svg>
          );
        } else if (counterType == "DSC") {
          setSvgIcon(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="44"
              y="15"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-sort-numeric-down-alt"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.36 7.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.836 1.973-1.836 1.09 0 2.063.637 2.063 2.688 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z"
              />
              <path d="M12.438 8.668V14H11.39V9.684h-.051l-1.211.859v-.969l1.262-.906h1.046zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z" />
            </svg>
          );
        } else if (counterType == "UDC") {
          setSvgIcon(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="45"
              y="13"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-arrow-down-up"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
              />
            </svg>
          );
        } else {
          setSvgIcon(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="44"
              y="15"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-list-ol"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"
              />
              <path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338v.041zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635V5z" />
            </svg>
          );
        }
      }
    });
  };

  return (
    <div ref={ref} style={{ ...style, opacity }}>
      <div>
        <Button id="btAddress" onClick={handleOpen}>
          {address}
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style_modal}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Parâmetros
            </Typography>
            <TextField
              id="changeAddress"
              label="Novo Endereço"
              variant="outlined"
              onChange={onAddressChange}
            />
            {checkBox()}
            {newParameters}
            <Button onClick={changeProperty}>Salvar</Button>
          </Box>
        </Modal>
      </div>
      <svg width="120px" height="70px">
        <g fill="none" stroke={component.color}>
          {component.svg.path.map(function (svg_element, index) {
            return <path stroke-width="3" d={svg_element} fill="none" />;
          })}
        </g>
        {svgIcon}
        <text x="44" y="55" fill="black">
          {svgText}
        </text>
      </svg>
    </div>
  );
};
export default Component;
