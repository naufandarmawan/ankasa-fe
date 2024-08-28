"use client";

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  ListSubheader,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useState } from "react";

const Home = () => {
  const [alignment, setAlignment] = useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div className="">
      <div className="px-40 py-16 flex gap-10 ">
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
              <p>Hey,</p>
              <p>Where you want to go?</p>
              <div className="flex justify-between">
                <p>Recently Searched</p>
                <p> = </p>
              </div>
            </div>

            <div className="flex items-center">
              {/* <div className="w-full">
                <p>From</p>
                <p>Medan</p>
                <p>Indonesia</p>
              </div>
              <p> = </p>
              <div className="w-full flex flex-col items-end">
                <p>To</p>
                <p>Tokyo</p>
                <p>Japan</p>
              </div> */}
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="grouped-native-select">
                  Grouping
                </InputLabel>
                <Select
                  native
                  defaultValue=""
                  id="grouped-native-select"
                  label="Grouping"
                >
                  <option aria-label="None" value="" />
                  <optgroup label="Category 1">
                    <option value={1}>Option 1</option>
                    <option value={2}>Option 2</option>
                  </optgroup>
                  <optgroup label="Category 2">
                    <option value={3}>Option 3</option>
                    <option value={4}>Option 4</option>
                  </optgroup>
                </Select>
              </FormControl>
              <p> = </p>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="grouped-select">Grouping</InputLabel>
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
              {/* <div className="flex">
                <p> = </p>
                <p>One way</p>
              </div> */}
              <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
              >
                <ToggleButton value="web">One way</ToggleButton>
                <ToggleButton value="android">Round trip</ToggleButton>
              </ToggleButtonGroup>
              {/* <div className="flex">
                <p> = </p>
                <p>Round trip</p>
              </div> */}
            </div>

            <div className="flex flex-col">
              <p>Departure</p>
              <div className="flex">
                <p>Monday, 20 July 2020</p>
                <p>=</p>
              </div>
            </div>

            <div className="flex flex-col">
              <p>How many person?</p>
              <div className="flex">
                <div className="flex">
                  <p>2 Child</p>
                  <p>=</p>
                </div>
                <div className="flex">
                  <p>2 Child</p>
                  <p>=</p>
                </div>
              </div>
            </div>

            {/* <div className="flex flex-col">
              <p>Which class do you want?</p>
              <div className="flex">
                <div className="flex">
                  <p>=</p>
                  <p>Economy</p>
                </div>
                <div className="flex">
                  <p>=</p>
                  <p>Business</p>
                </div>
                <div className="flex">
                  <p>=</p>
                  <p>First Class</p>
                </div>
              </div>
            </div> */}

            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Which class do you want?
              </FormLabel>
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

            <div className="flex">
              <p>SEARCH FLIGHT</p>
              <p>=</p>
            </div>
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
          <div className="rounded-2xl px-6 py-5 h-64 flex flex-col justify-between bg-gray-400 bg-gradient-to-t from-black w-full">
            <div className="px-4 py-1 flex gap-1 bg-white bg-opacity-40 w-fit rounded-full">
              <p className="font-bold text-xs text-white">15</p>
              <p className="font-light text-xs text-white">Airlines</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-sm text-white">Tokyo,</p>
                <p className="font-semibold text-2xl text-white">Japan</p>
              </div>
              <div className="p-5 bg-white bg-opacity-40 w-fit h-fit rounded-full">
                <p className="font-semibold text-[8px] text-white">GO</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl px-6 py-5 h-64 flex flex-col justify-between bg-gray-400 bg-gradient-to-t from-black w-full">
            <div className="px-4 py-1 flex gap-1 bg-white bg-opacity-40 w-fit rounded-full">
              <p className="font-bold text-xs text-white">15</p>
              <p className="font-light text-xs text-white">Airlines</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-sm text-white">Tokyo,</p>
                <p className="font-semibold text-2xl text-white">Japan</p>
              </div>
              <div className="p-5 bg-white bg-opacity-40 w-fit h-fit rounded-full">
                <p className="font-semibold text-[8px] text-white">GO</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl px-6 py-5 h-64 flex flex-col justify-between bg-gray-400 bg-gradient-to-t from-black w-full">
            <div className="px-4 py-1 flex gap-1 bg-white bg-opacity-40 w-fit rounded-full">
              <p className="font-bold text-xs text-white">15</p>
              <p className="font-light text-xs text-white">Airlines</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-sm text-white">Tokyo,</p>
                <p className="font-semibold text-2xl text-white">Japan</p>
              </div>
              <div className="p-5 bg-white bg-opacity-40 w-fit h-fit rounded-full">
                <p className="font-semibold text-[8px] text-white">GO</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl px-6 py-5 h-64 flex flex-col justify-between bg-gray-400 bg-gradient-to-t from-black w-full">
            <div className="px-4 py-1 flex gap-1 bg-white bg-opacity-40 w-fit rounded-full">
              <p className="font-bold text-xs text-white">15</p>
              <p className="font-light text-xs text-white">Airlines</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-sm text-white">Tokyo,</p>
                <p className="font-semibold text-2xl text-white">Japan</p>
              </div>
              <div className="p-5 bg-white bg-opacity-40 w-fit h-fit rounded-full">
                <p className="font-semibold text-[8px] text-white">GO</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl px-6 py-5 h-64 flex flex-col justify-between bg-gray-400 bg-gradient-to-t from-black w-full">
            <div className="px-4 py-1 flex gap-1 bg-white bg-opacity-40 w-fit rounded-full">
              <p className="font-bold text-xs text-white">15</p>
              <p className="font-light text-xs text-white">Airlines</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-sm text-white">Tokyo,</p>
                <p className="font-semibold text-2xl text-white">Japan</p>
              </div>
              <div className="p-5 bg-white bg-opacity-40 w-fit h-fit rounded-full">
                <p className="font-semibold text-[8px] text-white">GO</p>
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
              <div className="p-2 border-4 border-sky-100 rounded-full">
                <p>Image</p>
              </div>
              <p>Paris</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="p-2 border-4 border-sky-100 rounded-full">
                <p>Image</p>
              </div>
              <p>Paris</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="p-2 border-4 border-sky-100 rounded-full">
                <p>Image</p>
              </div>
              <p>Paris</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="p-2 border-4 border-sky-100 rounded-full">
                <p>Image</p>
              </div>
              <p>Paris</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="p-2 border-4 border-sky-100 rounded-full">
                <p>Image</p>
              </div>
              <p>Paris</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
