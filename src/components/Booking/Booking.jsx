import React, {useState } from "react";
import { DateCalendar, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import {
  createTheme,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ThemeProvider,
} from "@mui/material";

const calendarTheme = createTheme({
  components: {
    MuiPickersDay: {
      styleOverrides: {
        root: {
          borderRadius: "5px",
          "&.Mui-selected": {
            backgroundColor: "#A5F211 !important", // <- force it
            color: "#000 !important",
            "&:hover": {
              backgroundColor: "#A5F211 !important",
            },
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#000",
          color: "#fff",
          borderRadius: "12px",
        },
      },
    },
  },
});

const mobCalendarTheme = createTheme({
  components: {
    MuiPickersDay: {
      styleOverrides: {
        root: {
          borderRadius: "5px",
          "&.Mui-selected": {
            backgroundColor: "#A5F211 !important", // <- force it
            color: "#000 !important",
            "&:hover": {
              backgroundColor: "#A5F211 !important",
            },
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          color: "#000",
          borderRadius: "12px",
        },
      },
    },
  },
});

const Booking = () => {
  const [value, setValue] = useState(dayjs(new Date().toISOString()));
  const [plan, setPlan] = useState("");
  const [errors, setErrors] = useState({
    firstNameError: false,
    lastNameError: false,
    emailError: false,
    phoneError: false,
    planError: false,
    dateError: false,
  });
  const disablePastDates = (date) => {
    return dayjs(date).isBefore(dayjs().startOf("day")); // disable if before today
  };
  const handleChange = (event) => {
    setPlan(event.target.value);
  };

  const firstNameValidator = (name) => {
    if (!name) {
      return setErrors((prev) => ({ ...prev, firstNameError: true }));
    }
    const firstNameRegEx = /^[A-Za-z\s'-]+$/;
    if (!firstNameRegEx.test(name)) {
      return setErrors((prev) => ({ ...prev, firstNameError: true }));
    } else{
        return setErrors((prev) => ({ ...prev, firstNameError: false }));
    }
  };

  const emailValidator = (email) => {
    if (!email) {
      return setErrors((prev) => ({ ...prev, emailError: true }));
    }
    const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegEx.test(email)) {
      return setErrors((prev) => ({ ...prev, emailError: true }));
    } else {
        return setErrors((prev) => ({ ...prev, emailError: false }));
    }
  };

  const phoneValidator = (phone) => {
    if (!phone) {
      return setErrors((prev) => ({ ...prev, phoneError: true }));
    }
    const phoneRegEx = /^\+?[0-9]{10,15}$/;
    if (!phoneRegEx.test(phone)) {
      return setErrors((prev) => ({ ...prev, phoneError: true }));
    } else {
        return setErrors((prev) => ({ ...prev, phoneError: false }));
    }
  };

  const planValidator = (plan)=>{
    if(plan.length < 1 || !plan){
        return setErrors(prev=>({...prev, planError:true}))
    } else{
        return setErrors(prev=>({...prev, planError:false}))
    }
  }

  const handleFormSubmission = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const firstName = formData.get("firstName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    firstNameValidator(firstName);
    emailValidator(email);
    phoneValidator(phone);
    planValidator(plan)
    console.log(plan, errors.planError)
    
  };

  return (
    <div className="h-fit px-8 lg:px-20 xl:px-32 2xl:px-56 py-20 xl:py-24 2xl:py-40 flex flex-col gap-14">
      <div className="flex flex-col items-center justify-center xl:items-start gap-6">
        <h3 className="font-[manrope] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
          Book an Adventure
        </h3>
        <p className="font-[manrope] text-md md:text-lg lg:text-xl text-center md:text-left">
          Global Adventures, Local Explorations, and the Enchantment of Kerala:
          Your Gateway to Diverse Travel Experiences!
        </p>
      </div>
      <div className="grid grid-rows-1 gap-4 lg:grid-cols-2 items-stretch content-center">
        <div className="w-full hidden lg:flex flex-col gap-3">
          <h3 className="text-center font-[manrope] font-semibold text-2xl">
            Select a date
          </h3>
          <ThemeProvider theme={calendarTheme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                sx={{
                    bgcolor: "black",
                    color: "white",
                    borderRadius: 2,
                    overflow: "hidden",
                    "& .MuiPickersDay-root": {
                      color: "white",
                    },
                    "& .MuiPickersDay-root.Mui-disabled": {
                      color: "gray !important",
                    },
                    "& .MuiPickersDay-root:hover": {
                      backgroundColor: "#A5F21144",
                    },
                    "& .MuiTypography-root": {
                      color: "white",
                    },
                    "& .MuiIconButton-root": {
                      color: "#A5F211",
                    },
                    "& .MuiPickersCalendarHeader-label": {
                      color: "white",
                    },
                    "& .MuiButtonBase-root-MuiPickersDay-root.Mui-selected": {
                      backgroundColor: "#A5F211",
                      color: "white",
                    },
                  }}
                value={value}
                shouldDisableDate={disablePastDates}
                onChange={(newValue) => setValue(newValue)}
              />
            </LocalizationProvider>
          </ThemeProvider>
        </div>
        <div>
          <form
            className="max-w-none lg:max-w-[600px] flex flex-col gap-3"
            onSubmit={handleFormSubmission}
          >
            <span className="flex justify-between gap-3">
              <TextField
                error={errors.firstNameError}
                helperText={errors.firstNameError ? "Provide a valid name" : ""}
                className="w-full"
                required
                id="outlined-required"
                label="First Name"
                name="firstName"
              />
              <TextField
                helperText=""
                className="w-full"
                id="outlined"
                label="Last Name"
                name="lastName"
              />
            </span>
            <TextField
              error={errors.emailError}
              helperText={
                errors.emailError ? "Please provide a valid email" : ""
              }
              className="w-full"
              id="outlined"
              label="Email"
              name="email"
              type="email"
            />
            <TextField
              error={errors.phoneError}
              helperText={
                errors.phoneError
                  ? "Please provide a valid 10 digit phone number"
                  : ""
              }
              className="w-full"
              required
              id="outlined-required"
              label="Phone"
              name="phone"
              type="tel"
            />
            <span className="hidden lg:block w-full">
              <TextField
                className="w-full"
                disabled
                id="outlined-disabled"
                label="Date"
                value={dayjs(value).format("dddd DD MMMM YYYY")}
              />
            </span>
            <FormControl>
              <InputLabel id="demo-simple-select-label">Plan *</InputLabel>
              <Select
                error={errors.planError}
                labelId="demo-simple-select-label"
                id={errors.planError? "demo-simple-select-error":"demo-simple-select"}
                value={plan}
                label="plan"
                onChange={(e) => handleChange(e)}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              {
                errors.planError && <FormHelperText sx={{color:"#d32f2f"}}>Please select a plan</FormHelperText>
              }
            </FormControl>
            <span className="w-full lg:hidden">
              <ThemeProvider theme={mobCalendarTheme}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    className="w-full"
                    label="Select a date"
                    shouldDisableDate={disablePastDates}
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                  />
                </LocalizationProvider>
              </ThemeProvider>
            </span>
            <button
              type="submit"
              className="bg-[#A5F211] hover:bg-[#7ef211] transition-all duration-500 py-4 px-8 font-[manrope] w-fit font-semibold cursor-pointer"
            >
              Enquire
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
