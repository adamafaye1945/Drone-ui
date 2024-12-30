import { Button } from "@mui/material";
import { ButtonInterface, DroneInformation } from "../types/droneTypes";
import { styled } from "@mui/material/styles";
import Radio, { RadioProps } from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export function CustomButton({
  text,
  type,
  size,
  action,
  children,
}: ButtonInterface): JSX.Element {
  return (
    <Button
      variant="contained"
      sx={{
        width: size,
        backgroundColor: type == "navigate" ? "#86A788" : "red",
      }}
      onClick={action}
    >
      {text}
      {children}
    </Button>
  );
}
interface closeProps {
  onClose: () => void;
}
export const CloseButton = ({ onClose }: closeProps) => {
  return (
    <button
      style={{
        background: "none",
        border: "1px solid #ccc",
        fontSize: "16px",
        fontWeight: "bold",
        padding: "4px 8px",
        borderRadius: "5px",
        cursor: "pointer",
        display: "inline-block",
        color: "#86A788",
      }}
      onClick={onClose}
      aria-label="Close"
    >
      &times;
    </button>
  );
};

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 16,
  height: 16,
  boxShadow:
    "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: "#86A788",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: "#86A788",
    ...theme.applyStyles("dark", {
      backgroundColor: "#30404d",
    }),
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background: "rgba(206,217,224,.5)",
    ...theme.applyStyles("dark", {
      background: "rgba(57,75,89,.5)",
    }),
  },
  ...theme.applyStyles("dark", {
    boxShadow: "0 0 0 1px rgb(16 22 26 / 40%)",
    backgroundColor: "#86A788",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))",
  }),
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#137cbd",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&::before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
});

// Inspired by blueprintjs
function BpRadio(props: RadioProps) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

export default function CustomizedRadios() {
  return (
    <FormControl>
      <FormLabel
        id="demo-customized-radios"
        sx={{
          color: "#86A788",
          "&.Mui-focused": {
            color: "#86A788",
          },
        }}
      >
        Task Selection
      </FormLabel>
      <RadioGroup
        defaultValue="patrol"
        aria-labelledby="demo-customized-radios"
        name="customized-radios"
      >
        <FormControlLabel value="female" control={<BpRadio />} label="patrol" />
        <FormControlLabel
          value="transportation"
          control={<BpRadio />}
          label="deliver load"
        />
        <FormControlLabel
          value="charging"
          control={<BpRadio />}
          label="charging"
        />
      </RadioGroup>
    </FormControl>
  );
}
