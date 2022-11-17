# **Crypto Zoo**

Cryptocurrencies are an emerging financial instrument that have the potential to revolutionize commerce by providing a medium of exchange that can resist economic pressures that traditional currencies are vulnerable to.  These insturments are based in cryptographic work and algorithmically defined to give a currency properties desired by a creator.  They might be thought of as desinger currencies.  Such properties can, in theory,  allow a holder to escape the effects of inflation, as well as serve as assets for investment.  This project is an early exercize using the React front-end framework to build a interactive dashboard for a cryptocurrency enthusiast.  

## **The Stack** 
The primary purpose of this project is to practice building a full MERN stack and to practice interacting with an external API.  THe basic stack is MongoDB, express, React, and Node.  Further dependencies are bcrypt, axios, dotenv, cors, and concurrently.  This project uses the CoinGecko API to access the data used in the application. React router is used to establish the routing functionality between the pages of the application.  The 'ReCharts' library is used to generate the graphs on the 'show' pages.  Authorization and authentication are secured with JSON web tokens.

## **Structure and Function of the CryptoZOO** 
As of this writing all intended functionality are not yet present.  The landing page of the application displays links to the current top 7 cryptocurrencies as ranked by market capitalization.  Market capitalization is the amount of value represented by a specific currency based on the price of one token in the currency and the ttal number of token in the market.  The navigation bar at the top invites the user to register or login.    When the user registers he has assigned to his his profile a simulated amount equal to the value of 1 bitcoin in United States Dollars.  Upon login the user is navigated to a profile page and has access, by way of the navigation bar, to several pages.  The profile page is intended to be a simulated portfolio that allows the user to practice crypto currency investment with the amount assigned at registration.  The profile page has thumbnail links for the top 100 crypto currencies by market capitalization that link to a page that allows the user to make a simulated purchase.  The in addition to the profile page, a user has links to a catolog of the top 7 cryptocurrencies by market capitalization.   Clicking on an item links to a show page that displays a graph of the price of the currency for the past seven day and other data.  The data for these displays is pulled from the CoinGecko API.   The profile page also a link to a 'trending' currency page that link to page with links to the top seven currencies trending in the CoinGecko market.  

## **Credit**
The code in this project is adapted from several resources found on the web as well as code developed during the course of this curriculum module:

[tutorial 1](https://www.youtube.com/watch?v=gxXw-M5lDOw)
[tutorial 2](https://www.youtube.com/results?search_query=recharts+tutorial)
[tutorial 3](https://www.youtube.com/resultssearch_query=currency+converter+web+dev+simplified)


