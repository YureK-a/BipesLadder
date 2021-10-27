import React, { useRef, useEffect } from "react";
import { useDrag } from "react-dnd";
import { COMPONENT } from "./constants";
import TextField from "@material-ui/core/TextField";
import { Button, Modal, Box, Typography } from "@material-ui/core";

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
  const ref = useRef(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [address, setAddress] = React.useState("");

  const [{ isDragging }, drag] = useDrag({
    item: { type: COMPONENT, id: data.id, path },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(ref);

  const component = components[data.id];

  const changeProperty = () => {
    setAddress(document.getElementById("changeAddress").value);

    setOpen(false);
  };

  useEffect(() => {
    if (component.id !== "lineComponent" && address !== "") {
      //setAddress(component.type);
      //console.log(address);
      //addressFromComponent([address, path, component.content]);
      addressFromComponent({
        address: address,
        path: path,
        type: component.component.content,
      });
    }
  }, [address]);

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
            />
            <Button onClick={changeProperty}>Salvar</Button>
          </Box>
        </Modal>
      </div>
      <svg width="120px" height="70px">
        {console.log(component)}
        <g fill="none" stroke={component.component.color}>
          {component.component.svg.map(function (svg_element, index) {
            return <path stroke-width="3" d={svg_element} fill="none" />;
          })}
        </g>
      </svg>
    </div>
  );
};
export default Component;
