"use client";

import {
  ExpandMore,
  KeyboardArrowDown,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  SwapHoriz,
  TrendingFlat,
} from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  InputLabel,
  ListSubheader,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useState } from "react";
import ParisTop from "../../../public/top-paris.png";
import TokyoTrending from "../../../public/trending-tokyo.png";
import HeroImage from "../../../public/hero-image.png";
import Image from "next/image";

const Home = () => {
  const [alignment, setAlignment] = useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div className="">
      <div
        className="px-40 py-16 flex gap-10"
        style={{
          backgroundImage: `url(${HeroImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="flex flex-col gap-6 w-full">
          <p className="font-semibold text-6xl text-[#414141]">
            Find your <span className="text-[#2395FF]">Flight</span>
          </p>
          <p className="font-normal text-lg text-[#979797]">
            and explore the world with us
          </p>
        </div>

        <div className="flex justify-center w-full">
          <div className="flex flex-col gap-6 py-8 px-10 border w-2/3 rounded-xl drop-shadow-xl bg-white">
            <div className="flex flex-col gap-3">
              <p className="font-medium text-base text-black">Hey,</p>
              <p className="font-medium text-xl text-black">
                Where you want to go?
              </p>
              <div className="flex justify-between">
                <p className="font-semibold text-base text-[#2395FF]">
                  Recently Searched
                </p>
                <KeyboardArrowRight style={{ color: "#2395FF" }} />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FormControl sx={{ width: "100%" }}>
                <InputLabel htmlFor="grouped-select">From</InputLabel>
                <Select defaultValue="" id="grouped-select" label="Grouping">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <ListSubheader>Category 1</ListSubheader>
                  <MenuItem value={1}>Option 1</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                  <ListSubheader>Category 2</ListSubheader>
                  <MenuItem value={3}>Option 3</MenuItem>
                  <MenuItem value={4}>Option 4</MenuItem>
                </Select>
              </FormControl>
              <SwapHoriz />
              <FormControl sx={{ width: "100%" }}>
                <InputLabel htmlFor="grouped-select">To</InputLabel>
                <Select defaultValue="" id="grouped-select" label="Grouping">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <ListSubheader>Category 1</ListSubheader>
                  <MenuItem value={1}>Option 1</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                  <ListSubheader>Category 2</ListSubheader>
                  <MenuItem value={3}>Option 3</MenuItem>
                  <MenuItem value={4}>Option 4</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="flex">
              <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
                sx={{ width: "100%" }}
              >
                <ToggleButton value="web" sx={{ width: "100%" }}>
                  One way
                </ToggleButton>
                <ToggleButton value="android" sx={{ width: "100%" }}>
                  Round trip
                </ToggleButton>
              </ToggleButtonGroup>
            </div>

            <FormControl
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
              variant="outlined"
            >
              <p className="font-medium text-sm text-[#6b6b6b]">Departure</p>
              <OutlinedInput
                id="outlined-adornment-password"
                endAdornment={
                  <InputAdornment position="end">
                    <ExpandMore />
                  </InputAdornment>
                }
                placeholder="Departure"
              />
            </FormControl>

            <div className="flex flex-col gap-2">
              <p className="font-medium text-sm text-[#6b6b6b]">
                How many person?
              </p>
              <div className="flex gap-5">
                <FormControl sx={{ width: "100%" }} variant="outlined">
                  <OutlinedInput
                    id="outlined-adornment-password"
                    endAdornment={
                      <InputAdornment position="end">Child</InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl sx={{ width: "100%" }} variant="outlined">
                  <OutlinedInput
                    id="outlined-adornment-password"
                    endAdornment={
                      <InputAdornment position="end">Adult</InputAdornment>
                    }
                  />
                </FormControl>
              </div>
            </div>

            <FormControl
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <p className="font-medium text-sm text-[#6b6b6b]">
                Which class do you want?
              </p>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="economy"
                  control={<Radio />}
                  label="Economy"
                />
                <FormControlLabel
                  value="business"
                  control={<Radio />}
                  label="Business"
                />
                <FormControlLabel
                  value="firstclass"
                  control={<Radio />}
                  label="First Class"
                />
              </RadioGroup>
            </FormControl>

            <Button
              variant="contained"
              endIcon={<TrendingFlat />}
              size="large"
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              SEARCH FLIGHT
            </Button>
          </div>
        </div>
      </div>

      <div className="px-40 py-16 flex flex-col gap-12">
        <div className="flex items-end justify-between">
          <div className="">
            <p className="font-semibold text-sm text-[#2395FF] tracking-[4px]">
              TRENDING
            </p>
            <p className="font-semibold text-2xl text-black">
              Trending destinations
            </p>
          </div>
          <p className="font-semibold text-base text-[#2395FF]">View all</p>
        </div>

        <div className="flex gap-5">
          <div
            className="rounded-2xl px-6 py-5 h-64 flex flex-col justify-between w-full"
            style={{
              backgroundImage: `linear-gradient(to top, black, transparent), url(${TokyoTrending.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="px-4 py-1 flex gap-1 bg-white bg-opacity-40 w-fit rounded-full">
              <p className="font-bold text-xs text-white">15</p>
              <p className="font-light text-xs text-white">Airlines</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-sm text-white">Tokyo,</p>
                <p className="font-semibold text-2xl text-white">Japan</p>
              </div>
              <div className="p-2 bg-white bg-opacity-40 w-fit h-fit rounded-full flex justify-between items-center">
                <KeyboardArrowRight
                  style={{ color: "#ffffff" }}
                  sx={{ fontSize: 24 }}
                />
              </div>
            </div>
          </div>

          <div
            className="rounded-2xl px-6 py-5 h-64 flex flex-col justify-between w-full"
            style={{
              backgroundImage: `linear-gradient(to top, black, transparent), url(${TokyoTrending.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="px-4 py-1 flex gap-1 bg-white bg-opacity-40 w-fit rounded-full">
              <p className="font-bold text-xs text-white">15</p>
              <p className="font-light text-xs text-white">Airlines</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-sm text-white">Tokyo,</p>
                <p className="font-semibold text-2xl text-white">Japan</p>
              </div>
              <div className="p-2 bg-white bg-opacity-40 w-fit h-fit rounded-full flex justify-between items-center">
                <KeyboardArrowRight
                  style={{ color: "#ffffff" }}
                  sx={{ fontSize: 24 }}
                />
              </div>
            </div>
          </div>

          <div
            className="rounded-2xl px-6 py-5 h-64 flex flex-col justify-between w-full"
            style={{
              backgroundImage: `linear-gradient(to top, black, transparent), url(${TokyoTrending.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="px-4 py-1 flex gap-1 bg-white bg-opacity-40 w-fit rounded-full">
              <p className="font-bold text-xs text-white">15</p>
              <p className="font-light text-xs text-white">Airlines</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-sm text-white">Tokyo,</p>
                <p className="font-semibold text-2xl text-white">Japan</p>
              </div>
              <div className="p-2 bg-white bg-opacity-40 w-fit h-fit rounded-full flex justify-between items-center">
                <KeyboardArrowRight
                  style={{ color: "#ffffff" }}
                  sx={{ fontSize: 24 }}
                />
              </div>
            </div>
          </div>

          <div
            className="rounded-2xl px-6 py-5 h-64 flex flex-col justify-between w-full"
            style={{
              backgroundImage: `linear-gradient(to top, black, transparent), url(${TokyoTrending.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="px-4 py-1 flex gap-1 bg-white bg-opacity-40 w-fit rounded-full">
              <p className="font-bold text-xs text-white">15</p>
              <p className="font-light text-xs text-white">Airlines</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-sm text-white">Tokyo,</p>
                <p className="font-semibold text-2xl text-white">Japan</p>
              </div>
              <div className="p-2 bg-white bg-opacity-40 w-fit h-fit rounded-full flex justify-between items-center">
                <KeyboardArrowRight
                  style={{ color: "#ffffff" }}
                  sx={{ fontSize: 24 }}
                />
              </div>
            </div>
          </div>

          <div
            className="rounded-2xl px-6 py-5 h-64 flex flex-col justify-between w-full"
            style={{
              backgroundImage: `linear-gradient(to top, black, transparent), url(${TokyoTrending.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="px-4 py-1 flex gap-1 bg-white bg-opacity-40 w-fit rounded-full">
              <p className="font-bold text-xs text-white">15</p>
              <p className="font-light text-xs text-white">Airlines</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-sm text-white">Tokyo,</p>
                <p className="font-semibold text-2xl text-white">Japan</p>
              </div>
              <div className="p-2 bg-white bg-opacity-40 w-fit h-fit rounded-full flex justify-between items-center">
                <KeyboardArrowRight
                  style={{ color: "#ffffff" }}
                  sx={{ fontSize: 24 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-40 py-16 rounded-full">
        <div className="p-16 flex flex-col gap-12 bg-[#2395FF] rounded-[60px]">
          <div className="flex flex-col items-center gap-2">
            <p className="font-medium text-sm text-white tracking-[4px]">
              TOP 10
            </p>
            <p className="font-semibold text-2xl text-white">
              Top 10 destinations
            </p>
          </div>

          <div className="flex gap-8 justify-center">
            <div className="flex flex-col items-center gap-6">
              <Image
                src={ParisTop}
                className="p-2 border-4 border-sky-100 rounded-full"
              />
              <p className="font-normal text-lg text-white">Paris</p>
            </div>

            <div className="flex flex-col items-center gap-6">
              <Image
                src={ParisTop}
                className="p-2 border-4 border-sky-100 rounded-full"
              />
              <p className="font-normal text-lg text-white">Paris</p>
            </div>

            <div className="flex flex-col items-center gap-6">
              <Image
                src={ParisTop}
                className="p-2 border-4 border-sky-100 rounded-full"
              />
              <p className="font-normal text-lg text-white">Paris</p>
            </div>

            <div className="flex flex-col items-center gap-6">
              <Image
                src={ParisTop}
                className="p-2 border-4 border-sky-100 rounded-full"
              />
              <p className="font-normal text-lg text-white">Paris</p>
            </div>

            <div className="flex flex-col items-center gap-6">
              <Image
                src={ParisTop}
                className="p-2 border-4 border-sky-100 rounded-full"
              />
              <p className="font-normal text-lg text-white">Paris</p>
            </div>
          </div>

          <div className="flex gap-8 justify-center">
            <div className="flex justify-center items-center py-4 px-7 border border-white rounded-xl">
              <KeyboardArrowLeft
                style={{ color: "#ffffff" }}
                sx={{ fontSize: 24 }}
              />
            </div>
            <div className="flex justify-center items-center py-4 px-7 bg-white rounded-xl">
              <KeyboardArrowRight
                style={{ color: "#2395FF" }}
                sx={{ fontSize: 24 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
