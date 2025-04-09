import React, { useState } from "react";
import { DateCalendar } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";

const Booking = () => {
  const [value, setValue] = useState(dayjs(new Date().toISOString()));
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
      <div className="grid grid-cols-2 items-stretch content-center">
        <div>
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
                "& .Mui-selected": {
                  backgroundColor: "#A5F211",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "#A5F211", // Maintain color on hover
                  },
                },
                "& .MuiPickersDay-root.Mui-disabled": {
                  color: "#A5F211",
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
              }}
              defaultValue={dayjs(new Date().toISOString())}
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </LocalizationProvider>
        </div>
      </div>
    </div>
  );
};

export default Booking;
