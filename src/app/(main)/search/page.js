import {
  ExpandLess,
  FlightTakeoff,
  LunchDining,
  SwapHoriz,
  SwapVert,
  Wifi,
  Work,
} from "@mui/icons-material";
import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";

const Search = () => {
  return (
    <div className="flex flex-col bg-[#F5F6FA]">
      <div className="flex justify-between items-center px-40 py-16 bg-[#2395FF]">
        <div className="flex gap-5 items-center">
          <p>Logo</p>

          <div className="flex flex-col gap-2 items-start">
            <div>
              <div className="flex justify-between text-xs font-normal text-white">
                <p>From</p>
                <p>To</p>
              </div>
              <div className="flex w-full items-center gap-4">
                <div className="flex gap-2 text-base font-semibold text-white">
                  <p>Medan</p>
                  <p>(IDN)</p>
                </div>
                <SwapHoriz style={{ color: "#ffffff" }} sx={{ fontSize: 26 }} />
                <div className="flex gap-2 text-base font-semibold text-white">
                  <p>Tokyo</p>
                  <p>(JPN)</p>
                </div>
              </div>
            </div>

            <div className="flex w-full gap-3 items-center text-sm font-light text-white">
              <p>Monday, 20 July 20</p>
              <div className="size-1 bg-white rounded-full" />
              <p>6 Passenger</p>
              <div className="size-1 bg-white rounded-full" />
              <p>Economy</p>
            </div>
          </div>
        </div>
        <p className="text-base font-semibold text-white">Change Search</p>
      </div>
      <div className="flex px-40 py-16 gap-10">
        <div className="w-1/4 flex flex-col gap-10">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-2xl text-black">Filter</p>
            <p className="font-semibold text-base text-[#2395FF]">Reset</p>
          </div>

          <div className="flex flex-col gap-5 bg-white rounded-2xl p-8 drop-shadow-sm">
            <div className="flex flex-col gap-6">
              <div className="flex justify-between">
                <p className="text-base text-black font-semibold">Transit</p>
                <ExpandLess />
              </div>
              <FormGroup>
                <FormControlLabel
                  value="start"
                  control={<Checkbox />}
                  label="Start"
                  labelPlacement="start"
                  className="flex justify-between"
                />
                <FormControlLabel
                  value="start"
                  control={<Checkbox />}
                  label="Start"
                  labelPlacement="start"
                  className="flex justify-between"
                />
                <FormControlLabel
                  value="start"
                  control={<Checkbox />}
                  label="Start"
                  labelPlacement="start"
                  className="flex justify-between"
                />
              </FormGroup>

              {/* <div className="flex justify-between">
                <p className="text-sm text-black font-normal">Direct</p>
                <p>Checkbox</p>
              </div> */}
            </div>

            <div className="w-full h-[1px] bg-[#E5E5E5]" />

            <div className="flex flex-col gap-6">
              <div className="flex justify-between">
                <p className="text-base text-black font-semibold">Transit</p>
                <ExpandLess />
              </div>
              <FormGroup>
                <FormControlLabel
                  value="start"
                  control={<Checkbox />}
                  label="Start"
                  labelPlacement="start"
                  className="flex justify-between"
                />
                <FormControlLabel
                  value="start"
                  control={<Checkbox />}
                  label="Start"
                  labelPlacement="start"
                  className="flex justify-between"
                />
                <FormControlLabel
                  value="start"
                  control={<Checkbox />}
                  label="Start"
                  labelPlacement="start"
                  className="flex justify-between"
                />
              </FormGroup>

              {/* <div className="flex justify-between">
                <p className="text-sm text-black font-normal">Direct</p>
                <p>Checkbox</p>
              </div> */}
            </div>

            <div className="w-full h-[1px] bg-[#E5E5E5]" />

            <div className="flex flex-col gap-6">
              <div className="flex justify-between">
                <p className="text-base text-black font-semibold">Transit</p>
                <ExpandLess />
              </div>
              <FormGroup>
                <FormControlLabel
                  value="start"
                  control={<Checkbox />}
                  label="Start"
                  labelPlacement="start"
                  className="flex justify-between"
                />
                <FormControlLabel
                  value="start"
                  control={<Checkbox />}
                  label="Start"
                  labelPlacement="start"
                  className="flex justify-between"
                />
                <FormControlLabel
                  value="start"
                  control={<Checkbox />}
                  label="Start"
                  labelPlacement="start"
                  className="flex justify-between"
                />
              </FormGroup>

              {/* <div className="flex justify-between">
                <p className="text-sm text-black font-normal">Direct</p>
                <p>Checkbox</p>
              </div> */}
            </div>
          </div>
        </div>

        <div className="w-3/4 flex flex-col gap-10">
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <p className="font-semibold text-black text-2xl">Select Ticket</p>
              <p className="font-medium text-base text-[#979797]">
                (6 flight found)
              </p>
            </div>
            <div className="flex gap-4">
              <p className="font-semibold text-base text-black">Sort by</p>
              <SwapVert />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="p-7 bg-white drop-shadow-sm rounded-md flex flex-col gap-8">
              <div className="flex gap-8">
                <p>Logo</p>
                <p className="font-medium text-base text-[#595959]">
                  Garuda Indonesia
                </p>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                  <div className="flex flex-col gap-1">
                    <p className="font-medium text-2xl text-black">IDN</p>
                    <p className="font-normal text-xs text-[#6B6B6B]">12:33</p>
                  </div>

                  <FlightTakeoff style={{ color: "#979797" }} />
                  <div className="flex flex-col gap-1">
                    <p className="font-medium text-2xl text-black">IDN</p>
                    <p className="font-normal text-xs text-[#6B6B6B]">12:33</p>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <p className="font-normal text-base text-[#595959]">
                    3 hours 11 minutes
                  </p>
                  <p className="font-normal text-xs text-[#6B6B6B]">
                    (1 transit)
                  </p>
                </div>

                <div className="flex gap-2">
                  <Work style={{ color: "#979797" }} sx={{ fontSize: 26 }} />
                  <LunchDining
                    style={{ color: "#979797" }}
                    sx={{ fontSize: 26 }}
                  />
                  <Wifi style={{ color: "#979797" }} sx={{ fontSize: 26 }} />
                </div>

                <p className="font-medium text-sm text-[#979797]">
                  <span className="font-medium text-base text-[#2395FF]">
                    $ 214,00
                  </span>
                  /pax
                </p>

                <Button variant="contained">Select</Button>
              </div>
            </div>

            <div className="p-7 bg-white drop-shadow-sm rounded-md flex flex-col gap-8">
              <div className="flex gap-8">
                <p>Logo</p>
                <p className="font-medium text-base text-[#595959]">
                  Garuda Indonesia
                </p>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                  <div className="flex flex-col gap-1">
                    <p className="font-medium text-2xl text-black">IDN</p>
                    <p className="font-normal text-xs text-[#6B6B6B]">12:33</p>
                  </div>

                  <FlightTakeoff style={{ color: "#979797" }} />
                  <div className="flex flex-col gap-1">
                    <p className="font-medium text-2xl text-black">IDN</p>
                    <p className="font-normal text-xs text-[#6B6B6B]">12:33</p>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <p className="font-normal text-base text-[#595959]">
                    3 hours 11 minutes
                  </p>
                  <p className="font-normal text-xs text-[#6B6B6B]">
                    (1 transit)
                  </p>
                </div>

                <div className="flex gap-2">
                  <Work style={{ color: "#979797" }} sx={{ fontSize: 26 }} />
                  <LunchDining
                    style={{ color: "#979797" }}
                    sx={{ fontSize: 26 }}
                  />
                  <Wifi style={{ color: "#979797" }} sx={{ fontSize: 26 }} />
                </div>

                <p className="font-medium text-sm text-[#979797]">
                  <span className="font-medium text-base text-[#2395FF]">
                    $ 214,00
                  </span>
                  /pax
                </p>

                <Button variant="contained">Select</Button>
              </div>
            </div>

            <div className="p-7 bg-white drop-shadow-sm rounded-md flex flex-col gap-8">
              <div className="flex gap-8">
                <p>Logo</p>
                <p className="font-medium text-base text-[#595959]">
                  Garuda Indonesia
                </p>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                  <div className="flex flex-col gap-1">
                    <p className="font-medium text-2xl text-black">IDN</p>
                    <p className="font-normal text-xs text-[#6B6B6B]">12:33</p>
                  </div>

                  <FlightTakeoff style={{ color: "#979797" }} />
                  <div className="flex flex-col gap-1">
                    <p className="font-medium text-2xl text-black">IDN</p>
                    <p className="font-normal text-xs text-[#6B6B6B]">12:33</p>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <p className="font-normal text-base text-[#595959]">
                    3 hours 11 minutes
                  </p>
                  <p className="font-normal text-xs text-[#6B6B6B]">
                    (1 transit)
                  </p>
                </div>

                <div className="flex gap-2">
                  <Work style={{ color: "#979797" }} sx={{ fontSize: 26 }} />
                  <LunchDining
                    style={{ color: "#979797" }}
                    sx={{ fontSize: 26 }}
                  />
                  <Wifi style={{ color: "#979797" }} sx={{ fontSize: 26 }} />
                </div>

                <p className="font-medium text-sm text-[#979797]">
                  <span className="font-medium text-base text-[#2395FF]">
                    $ 214,00
                  </span>
                  /pax
                </p>

                <Button variant="contained">Select</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
