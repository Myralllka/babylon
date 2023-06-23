import React, { useState, useEffect } from "react";
import {
  Select,
  MenuItem,
  ListItemIcon,
  ListItemText,
  FormControl,
  TextField,
  Button,
  Card,
  CardContent,
  InputLabel,
} from "@mui/material";

import { iconOptions } from "./HomeIcons";
import "./Home.scss";
import Edit_green from "./icons/Edit_green.svg";
import Delete_red from "./icons/Delete_red.svg";
import Add_green from "./icons/Add_green.svg";
import Reset_green from "./icons/Reset_green.svg";
import { CurrencyList } from "./CurrencyList";

const HomeMainExpencesItems = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [text, setText] = useState("");
  const [counter, setCounter] = useState("");
  const [currency, setCurrency] = useState(null);
  const [renews, setRenews] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [editIndex, setEditIndex] = useState(-1);

  useEffect(() => {
    const getCurrentTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const formattedTime = `${hours}:${minutes}:${seconds}`;
      setCurrentTime(formattedTime);
    };

    getCurrentTime();

    const timer = setInterval(getCurrentTime, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleSendTime = () => {
    console.log("Sending operation at:", currentTime);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleTextChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= 15) {
      setText(inputText);
    }
  };

  const handleCounterChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue >= 0.01 && inputValue <= 1000000) {
      setCounter(inputValue);
    }
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const getCurrencySymbol = (value) => {
    const currencyItem = CurrencyList.find((item) => item.value === value);
    return currencyItem ? currencyItem.label : "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      selectedOption === "" ||
      text === "" ||
      counter === "" ||
      currency === ""
    ) {
      alert("All fields are required!");
    } else {
      if (editIndex === -1) {
        const newRenew = {
          time: currentTime,
          icon: selectedOption,
          text: text,
          counter: counter,
          currency: currency,
        };
        setRenews([...renews, newRenew]);
        setTotalAmount((prevAmount) =>
          parseFloat((prevAmount + parseFloat(counter)).toFixed(2))
        );
      } else {
        const updatedRenew = {
          time: currentTime,
          icon: selectedOption,
          text: text,
          counter: counter,
          currency: currency,
        };
        const updatedRenews = [...renews];
        const deletedAmount = parseFloat(updatedRenews[editIndex].counter);
        updatedRenews[editIndex] = updatedRenew;
        setRenews(updatedRenews);
        setTotalAmount((prevAmount) =>
          parseFloat(
            (prevAmount - deletedAmount + parseFloat(counter)).toFixed(2)
          )
        );
        setEditIndex(-1);
      }

      // Clear the form
      setCurrentTime("");
      setSelectedOption("");
      setText("");
      setCounter("");
      setCurrency("");
    }
  };

  const handleReset = () => {
    setCurrentTime("");
    setSelectedOption("");
    setText("");
    setCounter("");
    setCurrency("");
  };

  const handleDelete = (index) => {
    const deletedAmount = parseFloat(renews[index].counter);
    const updatedRenews = [...renews];
    updatedRenews.splice(index, 1);
    setRenews(updatedRenews);
    setTotalAmount((prevAmount) =>
      parseFloat((prevAmount - deletedAmount).toFixed(2))
    );
  };

  const handleEdit = (index) => {
    const renewToEdit = renews[index];
    setCurrentTime(renewToEdit.time);
    setSelectedOption(renewToEdit.icon);
    setText(renewToEdit.text);
    setCounter(renewToEdit.counter);
    setCurrency(renewToEdit.currency);
    setEditIndex(index);
  };

  return (
    <div>
      <div className="home__card">
        {renews &&
          renews.map((item, i) => (
            <Card
              variant="outlined"
              elevation={0}
              style={{
                backgroundColor: "transparent",
                padding: "3px",
                marginBottom: "5px",
              }}
              key={i}
            >
              <CardContent
                className="home__card-items"
                style={{ backgroundColor: "transparent", padding: "0px" }}
              >
                <div className="home__card-items__time">{item.time}</div>
                <div className="home__card-items__image">
                  {item.icon && <img src={item.icon} alt="icon" />}
                </div>
                <div className="home__card-items__descrip">{item.text}</div>
                <div className="home__card-items__currency">
                  {getCurrencySymbol(item.currency)}
                </div>
                <div className="home__card-items__counter">{item.counter}</div>
                                <button
                  className="btn__wrapper card__btn"
                  onClick={() => handleDelete(i)}
                >
                  <img
                    src={Delete_red}
                    alt="icon_delete"
                    className="card__btn__delete-image btn"
                  ></img>
                </button>
                <button
                  className="btn__wrapper card__btn"
                  onClick={() => handleEdit(i)}
                >
                  <img
                    src={Edit_green}
                    alt="icon_edit"
                    className="card__btn__edit-image btn"
                  ></img>
                </button>
              </CardContent>
            </Card>
          ))}
      </div>
      <div className="home__total-amount">
        <div className="home__total-amount__title">Totalize:</div>
        <div className="home__total-amount__result">
          {totalAmount.toFixed(2)}
        </div>
      </div>

      {/* Form */}

      <form onSubmit={handleSubmit} className="home__form">
        <div className="home__form__title">Add expenses</div>
        <div className="home__form__items">
          {/* Fixing time */}

          {/*  <div className="home__form__items__time">
          <FormControl >{currentTime}</FormControl>
          </div>
 */}

          {/* Add category */}
          <div className="home__form__items__category">
            <FormControl sx={{width: 100,}}>
              <InputLabel
                sx={{ px: 0, py: 0.5, fontSize: 12, color: "#0beeeaef" }}
                htmlFor="select-multiple-native"
              >
                Category
              </InputLabel>
              <Select
                sx={{ px: 0, mb:0.5, pb: 0,  fontSize: 10, color: "#0beeeaef", mr: 0,
                }}
                label="Category"
                id="Category"
                value={selectedOption}
                onChange={handleOptionChange}
              >
                <MenuItem value="" >
                  <em>-Category-</em>
                </MenuItem>
                {iconOptions.map((option, index) => (
                  <MenuItem key={index} value={option.value} >
                    <ListItemIcon>
                      <img
                        src={option.value}
                        alt={option.label}
                        style={{ height: "20px", width: "20px" }}
                      />
                    </ListItemIcon>
                    <ListItemText primary={option.label} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>{" "}
          </div>

          {/* Add description */}

          <div className="home__form__items__discription">
            <TextField
              label="Descript"
              id="standard-start-adornment"
              sx={{ m: 1 }}
              variant="standard"
              value={text}
              onChange={handleTextChange}
            />
          </div>

          {/* Add Counter */}
          <div className="home__form__items__counter">
            <TextField
              label="Cost"
              variant="standard"
              type="number"
              inputProps={{ min: 0.01, max: 1000000, step: 0.01 }}
              value={counter}
              onChange={handleCounterChange}
            />
          </div>

          {/* Add Currency */}

          <div className="home__form__items__currency">
            <FormControl
              sx={{width: 100 }}
            >
              <InputLabel
                htmlFor="select-multiple-native"
                sx={{ px: 0, py: 0, fontSize: 12, color: "#0beeeaef" }}
              >
                Currency
              </InputLabel>
              <Select
                label="currency"
                id="currency"
                sx={{
                  mr: 0,
                  mt: 0,
                  mb: 0,
                  height: 40,
                }}
                value={currency}
                onChange={handleCurrencyChange}
                renderValue={(value) => getCurrencySymbol(value)}
              >
                <MenuItem value="">
                  <em>-Currency-</em>
                </MenuItem>
                {CurrencyList.map((item) => (
                  <MenuItem key={item.value} value={item.value}>
                    {item.value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>{" "}
          </div>
        </div>
        <div className="form__btn">
          <Button
            sx={{ transition: "none", color: "transparent" }}
            className="btn__wrapper btn__form-main"
            type="reset"
            onClick={handleReset}
          >
            <img
              src={Reset_green}
              alt="icon_send"
              className="form__btn__image btn"
            ></img>
          </Button>
          <Button
            sx={{ transition: "none", color: "transparent" }}
            className="btn__wrapper btn__form-main"
            type="submit"
            onClick={handleSendTime}
          >
            <img
              src={Add_green}
              alt="icon_send"
              className="form__btn__image btn"
            ></img>
          </Button>
        </div>
      </form>
      <div className="home__block-link"></div>
    </div>
  );
};

export default HomeMainExpencesItems;
