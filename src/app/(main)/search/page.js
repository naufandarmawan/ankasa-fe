"use client";

import {
  ExpandLess,
  FlightTakeoff,
  LunchDining,
  SwapHoriz,
  SwapVert,
  Wifi,
  Work,
} from "@mui/icons-material";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Slider,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const Search = () => {
  // Filter states
  const [filters, setFilters] = useState({
    transit: [],
    facilities: {
      luggage: false,
      meal: false,
      wifi: false,
    },
    departure_time_range: null,
    arrival_time_range: null,
    airlines: [],
    price_range: {
      min: 145,
      max: 300,
    },
  });

  // Tickets state
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  // Sorting state
  const [sortBy, setSortBy] = useState("price");
  const [sortOrder, setSortOrder] = useState("asc");

  // Time range options
  const timeRanges = [
    { label: "00:00 - 06:00", value: "00:00-06:00" },
    { label: "06:00 - 12:00", value: "06:00-12:00" },
    { label: "12:00 - 18:00", value: "12:00-18:00" },
    { label: "18:00 - 24:00", value: "18:00-24:00" },
  ];

  // Airlines options
  const airlineOptions = ["Garuda Indonesia", "Air Asia", "Lion Air"];

  // Handle filter changes
  const handleTransitChange = (transit) => {
    setFilters((prev) => ({
      ...prev,
      transit: prev.transit.includes(transit)
        ? prev.transit.filter((t) => t !== transit)
        : [...prev.transit, transit],
    }));
  };

  const handleFacilityChange = (facility) => {
    setFilters((prev) => ({
      ...prev,
      facilities: {
        ...prev.facilities,
        [facility]: !prev.facilities[facility],
      },
    }));
  };

  const handleTimeRangeChange = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const handleAirlineChange = (airline) => {
    setFilters((prev) => ({
      ...prev,
      airlines: prev.airlines.includes(airline)
        ? prev.airlines.filter((a) => a !== airline)
        : [...prev.airlines, airline],
    }));
  };

  const handlePriceRangeChange = (event, newValue) => {
    setFilters((prev) => ({
      ...prev,
      price_range: {
        min: newValue[0],
        max: newValue[1],
      },
    }));
  };

  const handleSort = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  // Reset filters
  const handleReset = () => {
    setFilters({
      transit: [],
      facilities: {
        luggage: false,
        meal: false,
        wifi: false,
      },
      departure_time_range: null,
      arrival_time_range: null,
      airlines: [],
      price_range: {
        min: 145,
        max: 300,
      },
    });
  };

  // Fetch tickets with filters
  const fetchTickets = async () => {
    setLoading(true);
    try {
      const params = {
        ...filters,
        sortBy,
        order: sortOrder,
      };

      // Convert the params object to a query string
      const queryString = new URLSearchParams(
        Object.entries(params).reduce((acc, [key, value]) => {
          if (typeof value === "object" && value !== null) {
            // Flatten object values for nested parameters (e.g., facilities, price_range)
            Object.entries(value).forEach(([subKey, subValue]) => {
              acc[`${key}[${subKey}]`] = subValue;
            });
          } else {
            acc[key] = value;
          }
          return acc;
        }, {})
      ).toString();

      const response = await fetch(`/api/tickets?${queryString}`);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setTickets(data.data.tickets);
      setTotalCount(data.data.total_count);
    } catch (error) {
      console.error("Error fetching tickets:", error);
    }
    setLoading(false);
  };

  // Fetch tickets when filters change
  useEffect(() => {
    fetchTickets();
  }, [filters, sortBy, sortOrder]);

  return (
    // <div className="flex flex-col bg-[#F5F6FA]">
    //     <div className="flex justify-between items-center px-40 py-16 bg-[#2395FF]">
    //       <div className="flex gap-5 items-center">
    //         <p>Logo</p>

    //         <div className="flex flex-col gap-2 items-start">
    //           <div>
    //             <div className="flex justify-between text-xs font-normal text-white">
    //               <p>From</p>
    //               <p>To</p>
    //             </div>
    //             <div className="flex w-full items-center gap-4">
    //               <div className="flex gap-2 text-base font-semibold text-white">
    //                 <p>Medan</p>
    //                 <p>(IDN)</p>
    //               </div>
    //               <SwapHoriz
    //                 style={{ color: "#ffffff" }}
    //                 sx={{ fontSize: 26 }}
    //               />
    //               <div className="flex gap-2 text-base font-semibold text-white">
    //                 <p>Tokyo</p>
    //                 <p>(JPN)</p>
    //               </div>
    //             </div>
    //           </div>

    //           <div className="flex w-full gap-3 items-center text-sm font-light text-white">
    //             <p>Monday, 20 July 20</p>
    //             <div className="size-1 bg-white rounded-full" />
    //             <p>6 Passenger</p>
    //             <div className="size-1 bg-white rounded-full" />
    //             <p>Economy</p>
    //           </div>
    //         </div>
    //       </div>
    //       <p className="text-base font-semibold text-white">Change Search</p>
    //     </div>
    //     <div className="flex px-40 py-16 gap-10">
    //       <div className="w-1/4 flex flex-col gap-10">
    //         <div className="flex justify-between items-center">
    //           <p className="font-semibold text-2xl text-black">Filter</p>
    //           <p className="font-semibold text-base text-[#2395FF]">Reset</p>
    //         </div>

    //         <div className="flex flex-col gap-5 bg-white rounded-2xl p-8 drop-shadow-sm">
    //           <div className="flex flex-col gap-6">
    //             <div className="flex justify-between">
    //               <p className="text-base text-black font-semibold">Transit</p>
    //               <ExpandLess />
    //             </div>
    //             <FormGroup>
    //               <FormControlLabel
    //                 value="start"
    //                 control={<Checkbox />}
    //                 label="Start"
    //                 labelPlacement="start"
    //                 className="flex justify-between"
    //               />
    //               <FormControlLabel
    //                 value="start"
    //                 control={<Checkbox />}
    //                 label="Start"
    //                 labelPlacement="start"
    //                 className="flex justify-between"
    //               />
    //               <FormControlLabel
    //                 value="start"
    //                 control={<Checkbox />}
    //                 label="Start"
    //                 labelPlacement="start"
    //                 className="flex justify-between"
    //               />
    //             </FormGroup>

    //             {/* <div className="flex justify-between">
    //             <p className="text-sm text-black font-normal">Direct</p>
    //             <p>Checkbox</p>
    //           </div> */}
    //           </div>

    //           <div className="w-full h-[1px] bg-[#E5E5E5]" />

    //           <div className="flex flex-col gap-6">
    //             <div className="flex justify-between">
    //               <p className="text-base text-black font-semibold">Transit</p>
    //               <ExpandLess />
    //             </div>
    //             <FormGroup>
    //               <FormControlLabel
    //                 value="start"
    //                 control={<Checkbox />}
    //                 label="Start"
    //                 labelPlacement="start"
    //                 className="flex justify-between"
    //               />
    //               <FormControlLabel
    //                 value="start"
    //                 control={<Checkbox />}
    //                 label="Start"
    //                 labelPlacement="start"
    //                 className="flex justify-between"
    //               />
    //               <FormControlLabel
    //                 value="start"
    //                 control={<Checkbox />}
    //                 label="Start"
    //                 labelPlacement="start"
    //                 className="flex justify-between"
    //               />
    //             </FormGroup>

    //             {/* <div className="flex justify-between">
    //             <p className="text-sm text-black font-normal">Direct</p>
    //             <p>Checkbox</p>
    //           </div> */}
    //           </div>

    //           <div className="w-full h-[1px] bg-[#E5E5E5]" />

    //           <div className="flex flex-col gap-6">
    //             <div className="flex justify-between">
    //               <p className="text-base text-black font-semibold">Transit</p>
    //               <ExpandLess />
    //             </div>
    //             <FormGroup>
    //               <FormControlLabel
    //                 value="start"
    //                 control={<Checkbox />}
    //                 label="Start"
    //                 labelPlacement="start"
    //                 className="flex justify-between"
    //               />
    //               <FormControlLabel
    //                 value="start"
    //                 control={<Checkbox />}
    //                 label="Start"
    //                 labelPlacement="start"
    //                 className="flex justify-between"
    //               />
    //               <FormControlLabel
    //                 value="start"
    //                 control={<Checkbox />}
    //                 label="Start"
    //                 labelPlacement="start"
    //                 className="flex justify-between"
    //               />
    //             </FormGroup>

    //             {/* <div className="flex justify-between">
    //             <p className="text-sm text-black font-normal">Direct</p>
    //             <p>Checkbox</p>
    //           </div> */}
    //           </div>
    //         </div>
    //       </div>

    //       <div className="w-3/4 flex flex-col gap-10">
    //         <div className="flex justify-between items-center">
    //           <div className="flex gap-3 items-center">
    //             <p className="font-semibold text-black text-2xl">
    //               Select Ticket
    //             </p>
    //             <p className="font-medium text-base text-[#979797]">
    //               (6 flight found)
    //             </p>
    //           </div>
    //           <div className="flex gap-4">
    //             <p className="font-semibold text-base text-black">Sort by</p>
    //             <SwapVert />
    //           </div>
    //         </div>
    //         <div className="flex flex-col gap-5">
    //           <div className="p-7 bg-white drop-shadow-sm rounded-md flex flex-col gap-8">
    //             <div className="flex gap-8">
    //               <p>Logo</p>
    //               <p className="font-medium text-base text-[#595959]">
    //                 Garuda Indonesia
    //               </p>
    //             </div>

    //             <div className="flex justify-between items-center">
    //               <div className="flex items-center gap-6">
    //                 <div className="flex flex-col gap-1">
    //                   <p className="font-medium text-2xl text-black">IDN</p>
    //                   <p className="font-normal text-xs text-[#6B6B6B]">
    //                     12:33
    //                   </p>
    //                 </div>

    //                 <FlightTakeoff style={{ color: "#979797" }} />
    //                 <div className="flex flex-col gap-1">
    //                   <p className="font-medium text-2xl text-black">IDN</p>
    //                   <p className="font-normal text-xs text-[#6B6B6B]">
    //                     12:33
    //                   </p>
    //                 </div>
    //               </div>

    //               <div className="flex flex-col items-center">
    //                 <p className="font-normal text-base text-[#595959]">
    //                   3 hours 11 minutes
    //                 </p>
    //                 <p className="font-normal text-xs text-[#6B6B6B]">
    //                   (1 transit)
    //                 </p>
    //               </div>

    //               <div className="flex gap-2">
    //                 <Work style={{ color: "#979797" }} sx={{ fontSize: 26 }} />
    //                 <LunchDining
    //                   style={{ color: "#979797" }}
    //                   sx={{ fontSize: 26 }}
    //                 />
    //                 <Wifi style={{ color: "#979797" }} sx={{ fontSize: 26 }} />
    //               </div>

    //               <p className="font-medium text-sm text-[#979797]">
    //                 <span className="font-medium text-base text-[#2395FF]">
    //                   $ 214,00
    //                 </span>
    //                 /pax
    //               </p>

    //               <Button variant="contained">Select</Button>
    //             </div>
    //           </div>

    //           <div className="p-7 bg-white drop-shadow-sm rounded-md flex flex-col gap-8">
    //             <div className="flex gap-8">
    //               <p>Logo</p>
    //               <p className="font-medium text-base text-[#595959]">
    //                 Garuda Indonesia
    //               </p>
    //             </div>

    //             <div className="flex justify-between items-center">
    //               <div className="flex items-center gap-6">
    //                 <div className="flex flex-col gap-1">
    //                   <p className="font-medium text-2xl text-black">IDN</p>
    //                   <p className="font-normal text-xs text-[#6B6B6B]">
    //                     12:33
    //                   </p>
    //                 </div>

    //                 <FlightTakeoff style={{ color: "#979797" }} />
    //                 <div className="flex flex-col gap-1">
    //                   <p className="font-medium text-2xl text-black">IDN</p>
    //                   <p className="font-normal text-xs text-[#6B6B6B]">
    //                     12:33
    //                   </p>
    //                 </div>
    //               </div>

    //               <div className="flex flex-col items-center">
    //                 <p className="font-normal text-base text-[#595959]">
    //                   3 hours 11 minutes
    //                 </p>
    //                 <p className="font-normal text-xs text-[#6B6B6B]">
    //                   (1 transit)
    //                 </p>
    //               </div>

    //               <div className="flex gap-2">
    //                 <Work style={{ color: "#979797" }} sx={{ fontSize: 26 }} />
    //                 <LunchDining
    //                   style={{ color: "#979797" }}
    //                   sx={{ fontSize: 26 }}
    //                 />
    //                 <Wifi style={{ color: "#979797" }} sx={{ fontSize: 26 }} />
    //               </div>

    //               <p className="font-medium text-sm text-[#979797]">
    //                 <span className="font-medium text-base text-[#2395FF]">
    //                   $ 214,00
    //                 </span>
    //                 /pax
    //               </p>

    //               <Button variant="contained">Select</Button>
    //             </div>
    //           </div>

    //           <div className="p-7 bg-white drop-shadow-sm rounded-md flex flex-col gap-8">
    //             <div className="flex gap-8">
    //               <p>Logo</p>
    //               <p className="font-medium text-base text-[#595959]">
    //                 Garuda Indonesia
    //               </p>
    //             </div>

    //             <div className="flex justify-between items-center">
    //               <div className="flex items-center gap-6">
    //                 <div className="flex flex-col gap-1">
    //                   <p className="font-medium text-2xl text-black">IDN</p>
    //                   <p className="font-normal text-xs text-[#6B6B6B]">
    //                     12:33
    //                   </p>
    //                 </div>

    //                 <FlightTakeoff style={{ color: "#979797" }} />
    //                 <div className="flex flex-col gap-1">
    //                   <p className="font-medium text-2xl text-black">IDN</p>
    //                   <p className="font-normal text-xs text-[#6B6B6B]">
    //                     12:33
    //                   </p>
    //                 </div>
    //               </div>

    //               <div className="flex flex-col items-center">
    //                 <p className="font-normal text-base text-[#595959]">
    //                   3 hours 11 minutes
    //                 </p>
    //                 <p className="font-normal text-xs text-[#6B6B6B]">
    //                   (1 transit)
    //                 </p>
    //               </div>

    //               <div className="flex gap-2">
    //                 <Work style={{ color: "#979797" }} sx={{ fontSize: 26 }} />
    //                 <LunchDining
    //                   style={{ color: "#979797" }}
    //                   sx={{ fontSize: 26 }}
    //                 />
    //                 <Wifi style={{ color: "#979797" }} sx={{ fontSize: 26 }} />
    //               </div>

    //               <p className="font-medium text-sm text-[#979797]">
    //                 <span className="font-medium text-base text-[#2395FF]">
    //                   $ 214,00
    //                 </span>
    //                 /pax
    //               </p>

    //               <Button variant="contained">Select</Button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    <div className="flex flex-col bg-[#F5F6FA]">
      {/* Header section remains the same */}
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
        {/* Filter Section */}
        <div className="w-1/4 flex flex-col gap-10">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-2xl text-black">Filter</p>
            <p
              className="font-semibold text-base text-[#2395FF] cursor-pointer"
              onClick={handleReset}
            >
              Reset
            </p>
          </div>

          <div className="flex flex-col gap-5 bg-white rounded-2xl p-8 drop-shadow-sm">
            {/* Transit Filter */}
            <div className="flex flex-col gap-6">
              <div className="flex justify-between">
                <p className="text-base text-black font-semibold">Transit</p>
                <ExpandLess />
              </div>
              <FormGroup>
                {["direct", "transit", "transit2+"].map((option) => (
                  <FormControlLabel
                    key={option}
                    control={
                      <Checkbox
                        checked={filters.transit.includes(option)}
                        onChange={() => handleTransitChange(option)}
                      />
                    }
                    label={option.charAt(0).toUpperCase() + option.slice(1)}
                    labelPlacement="start"
                    className="flex justify-between"
                  />
                ))}
              </FormGroup>
            </div>

            <div className="w-full h-[1px] bg-[#E5E5E5]" />

            {/* Facilities Filter */}
            <div className="flex flex-col gap-6">
              <div className="flex justify-between">
                <p className="text-base text-black font-semibold">Facilities</p>
                <ExpandLess />
              </div>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={filters.facilities.luggage}
                      onChange={() => handleFacilityChange("luggage")}
                    />
                  }
                  label="Luggage"
                  labelPlacement="start"
                  className="flex justify-between"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={filters.facilities.meal}
                      onChange={() => handleFacilityChange("meal")}
                    />
                  }
                  label="Meal"
                  labelPlacement="start"
                  className="flex justify-between"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={filters.facilities.wifi}
                      onChange={() => handleFacilityChange("wifi")}
                    />
                  }
                  label="Wifi"
                  labelPlacement="start"
                  className="flex justify-between"
                />
              </FormGroup>
            </div>

            <div className="w-full h-[1px] bg-[#E5E5E5]" />

            {/* Departure Time Filter */}
            <div className="flex flex-col gap-6">
              <div className="flex justify-between">
                <p className="text-base text-black font-semibold">
                  Departure Time
                </p>
                <ExpandLess />
              </div>
              <FormGroup>
                {timeRanges.map((range) => (
                  <FormControlLabel
                    key={range.value}
                    control={
                      <Checkbox
                        checked={filters.departure_time_range === range.value}
                        onChange={() =>
                          handleTimeRangeChange(
                            "departure_time_range",
                            range.value
                          )
                        }
                      />
                    }
                    label={range.label}
                    labelPlacement="start"
                    className="flex justify-between"
                  />
                ))}
              </FormGroup>
            </div>

            <div className="w-full h-[1px] bg-[#E5E5E5]" />

            {/* Airlines Filter */}
            <div className="flex flex-col gap-6">
              <div className="flex justify-between">
                <p className="text-base text-black font-semibold">Airlines</p>
                <ExpandLess />
              </div>
              <FormGroup>
                {airlineOptions.map((airline) => (
                  <FormControlLabel
                    key={airline}
                    control={
                      <Checkbox
                        checked={filters.airlines.includes(airline)}
                        onChange={() => handleAirlineChange(airline)}
                      />
                    }
                    label={airline}
                    labelPlacement="start"
                    className="flex justify-between"
                  />
                ))}
              </FormGroup>
            </div>

            <div className="w-full h-[1px] bg-[#E5E5E5]" />

            {/* Price Range Filter */}
            <div className="flex flex-col gap-6">
              <div className="flex justify-between">
                <p className="text-base text-black font-semibold">
                  Ticket Price
                </p>
                <ExpandLess />
              </div>
              <div className="px-4">
                <Slider
                  value={[filters.price_range.min, filters.price_range.max]}
                  onChange={handlePriceRangeChange}
                  min={0}
                  max={1000}
                  valueLabelDisplay="auto"
                  valueLabelFormat={(value) => `$${value}`}
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>${filters.price_range.min}</span>
                  <span>${filters.price_range.max}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="w-3/4 flex flex-col gap-10">
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <p className="font-semibold text-black text-2xl">Select Ticket</p>
              <p className="font-medium text-base text-[#979797]">
                ({totalCount} flight found)
              </p>
            </div>
            <div className="flex gap-4 cursor-pointer" onClick={handleSort}>
              <p className="font-semibold text-base text-black">Sort by</p>
              <SwapVert />
            </div>
          </div>

          {/* Tickets List */}
          <div className="flex flex-col gap-5">
            {loading ? (
              <p>Loading...</p>
            ) : (
              tickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="p-7 bg-white drop-shadow-sm rounded-md flex flex-col gap-8"
                >
                  <div className="flex gap-8">
                    <p>Logo</p>
                    <p className="font-medium text-base text-[#595959]">
                      {ticket.airlines}
                    </p>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-6">
                      <div className="flex flex-col gap-1">
                        <p className="font-medium text-2xl text-black">
                          {ticket.departure_code}
                        </p>
                        <p className="font-normal text-xs text-[#6B6B6B]">
                          {new Date(ticket.departure_time).toLocaleTimeString(
                            [],
                            { hour: "2-digit", minute: "2-digit" }
                          )}
                        </p>
                      </div>

                      <FlightTakeoff style={{ color: "#979797" }} />
                      <div className="flex flex-col gap-1">
                        <p className="font-medium text-2xl text-black">
                          {ticket.arrival_code}
                        </p>
                        <p className="font-normal text-xs text-[#6B6B6B]">
                          {new Date(ticket.arrival_time).toLocaleTimeString(
                            [],
                            { hour: "2-digit", minute: "2-digit" }
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center">
                      <p className="font-normal text-base text-[#595959]">
                        {ticket.flight_duration}
                      </p>
                      <p className="font-normal text-xs text-[#6B6B6B]">
                        ({ticket.transit})
                      </p>
                    </div>

                    <div className="flex gap-2">
                      {ticket.luggage && (
                        <Work
                          style={{ color: "#979797" }}
                          sx={{ fontSize: 26 }}
                        />
                      )}
                      {ticket.meal && (
                        <LunchDining
                          style={{ color: "#979797" }}
                          sx={{ fontSize: 26 }}
                        />
                      )}
                      {ticket.wifi && (
                        <Wifi
                          style={{ color: "#979797" }}
                          sx={{ fontSize: 26 }}
                        />
                      )}
                    </div>

                    <p className="font-medium text-sm text-[#979797]">
                      <span className="font-medium text-base text-[#2395FF]">
                        $ {ticket.price.toFixed(2)}
                      </span>
                      /pax
                    </p>

                    <Button variant="contained">Select</Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
