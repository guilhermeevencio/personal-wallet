# My Wallet 💵

This project aimed to build an application that would save the data of expenses added by the user and
convert it to the Brazilian Real (BRL) by adding them up.

Expenses can be divided into 4 categories: Food, Transport, Health and Work.
Payment methods can be Cash, Credit Card or Debit Card.

After saving, it is possible to edit the cards and change all their respective data.

This project was developed using the React library. For state management, the Redux library was used, by the Redux Toolkit.

The currency quote information was obtained through the following endpoint:

> `https://economia.awesomeapi.com.br/json/all`

On the home page, it is necessary to login, putting a username and a password that must be at least 6 characters long.

## How to run the project


#### To see the project running, we must follow these steps:

> 1- `git clone git@github.com:guilhermeevencio/personal-wallet.git`

> 2- `cd personal-wallet`

> 3- `npm install` 

> 4- `npm start`
