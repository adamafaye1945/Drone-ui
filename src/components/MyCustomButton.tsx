import { Button } from "@mui/material";
import { ButtonInterface } from "../types/droneTypes";
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
  sx,
}: ButtonInterface): JSX.Element {
  return (
    <Button
      variant="contained"
      onClick={action}
      sx={{
        // Responsive width: full width on extra-small screens, and fallback to the "size" prop on small screens and above.
        width: { xs: "100%", sm: size || "auto" },

        // Responsive height: adjust the height based on screen size.

        // Responsive padding: smaller on mobile devices, larger on bigger screens.
        padding: { xs: "8px", sm: "10px 20px" },

        // Set the background color based on the type.
        backgroundColor: type === "navigate" ? "#86A788" : "red",
        borderRadius: "20px",
        // Merge any additional styles passed via the sx prop.
        ...sx,
      }}
    >
      {text}
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
interface CustomizedRadiosProps {
  taskValue: "patrol" | "transport" | "charging";
  setTaskValue: React.Dispatch<
    React.SetStateAction<"patrol" | "transport" | "charging">
  >;
}
export default function CustomizedRadios({
  taskValue,
  setTaskValue,
}: CustomizedRadiosProps) {
  console.log(taskValue);
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
        value={taskValue}
        onChange={(e) =>
          setTaskValue(e.target.value as "patrol" | "transport" | "charging")
        }
      >
        <FormControlLabel value="patrol" control={<BpRadio />} label="patrol" />

        <FormControlLabel
          value="transport"
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
