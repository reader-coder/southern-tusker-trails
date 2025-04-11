import React, { useState, useRef, useEffect } from "react";
import { DateCalendar, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import emailjs from "@emailjs/browser";
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
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from "../../lib";
import { Loader2 } from "lucide-react";
import { toast } from "react-toastify";

const calendarTheme = createTheme({
  components: {
    MuiPickersDay: {
      styleOverrides: {
        root: {
          borderRadius: "5px",
          "&.Mui-selected": {
            backgroundColor: "#A5F211 !important",
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
            backgroundColor: "#A5F211 !important",
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
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState(false);
  const form = useRef();

  useEffect(() => {
    emailjs.init({
      publicKey: EMAILJS_PUBLIC_KEY,
      blockHeadless: true,
      limitRate: {
        id: "app",
        throttle: 10000,
      },
    });
  }, []);

  const disablePastDates = (date) => {
    return dayjs(date).isBefore(dayjs().startOf("day"));
  };

  const handleChange = (event) => {
    setPlan(event.target.value);
  };

  const firstNameValidator = (name) => {
    const firstNameRegEx = /^[A-Za-z\s'-]+$/;
    return !!name && firstNameRegEx.test(name);
  };

  const emailValidator = (email) => {
    const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return !!email && emailRegEx.test(email);
  };

  const phoneValidator = (phone) => {
    const phoneRegEx = /^[0-9]{10}$/;
    return !!phone && phoneRegEx.test(phone);
  };

  const planValidator = (plan) => {
    return !!plan;
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName") || "";
    const email = formData.get("email");
    const phone = formData.get("phone");

    const isFirstNameValid = firstNameValidator(firstName);
    const isEmailValid = emailValidator(email);
    const isPhoneValid = phoneValidator(phone);
    const isPlanValid = planValidator(plan);
    const isDateValid = !!value;

    const newErrors = {
      firstNameError: !isFirstNameValid,
      lastNameError: false,
      emailError: !isEmailValid,
      phoneError: !isPhoneValid,
      planError: !isPlanValid,
      dateError: !isDateValid,
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((err) => err === true);
    if (hasErrors) {
      return;
    }

    try {
      setIsSending(true);
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          firstName,
          lastName,
          phone,
          email,
          plan,
          date: dayjs(value).format("dddd DD MMMM YYYY"),
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );
      if (sendError) {
        setSendError(false);
      }
      toast.success("Thank you. We will call you soon!", {
        position: "bottom-right",
      });
    } catch (error) {
      setSendError(true);
      console.log(error);
    } finally {
      setIsSending(false);
    }
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
            ref={form}
            className="max-w-none lg:max-w-[600px] flex flex-col gap-3"
            onSubmit={handleFormSubmission}
          >
            <span className="flex justify-between gap-3">
              <TextField
                error={errors.firstNameError}
                helperText={
                  errors.firstNameError ? "Provide a valid name" : ""
                }
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
                id={
                  errors.planError
                    ? "demo-simple-select-error"
                    : "demo-simple-select"
                }
                value={plan}
                label="plan"
                onChange={(e) => handleChange(e)}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              {errors.planError && (
                <FormHelperText sx={{ color: "#d32f2f" }}>
                  Please select a plan
                </FormHelperText>
              )}
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
            <div className="w-full flex flex-col md:flex-row md:items-center gap-3">
              <button
                disabled={isSending}
                type="submit"
                className={`w-[200px] flex justify-center items-center  transition-all duration-500 py-4 px-8 font-[manrope] font-semibold ${
                  isSending
                    ? "cursor-not-allowed bg-gray-200"
                    : "cursor-pointer bg-[#A5F211] hover:bg-[#7ef211]"
                }`}
              >
                {isSending ? (
                  <span className="flex items-center gap-1">
                    <Loader2 className="animate-spin text-black" />
                    {"Sending..."}
                  </span>
                ) : (
                  "Enquire"
                )}
              </button>
              {sendError && (
                <span>
                  <p className="text-red-500 font-[manrope]">
                    Something went wrong. Please try again!
                  </p>
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
