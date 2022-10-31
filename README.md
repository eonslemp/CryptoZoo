# **Crypto Zoo**

Cryptocurrencies are an emerging financial instrument that have the potential to revolutionize commerce by providing a medium of exchange that can resist economic pressures that traditional currencies are vulnerable to.  These insturments are based in cryptographic work and algorithmically defined to give a currency properties desired by a creator.  They might be thought of as desinger currencies.  Such properties can, in theory,  allow a holder to escape the effects of inflation, as well as serve as assets for investment.  This project is an early exercize using the React front-end framework to build a interactive dashboard for a cryptocurrency enthusiast.  

## **The Stack** 
The primary purpose of this project is to practice using the 'React' part of the MERN stack and to practice interacting with an external API.  This project uses the CoinGecko API to access the data used in the application. React router is used to establish the routing functionality between the pages of the application.  The 'ReCharts' library is used to generate the graphs on the 'show' pages.  

## **Structure and Function of the CryptoZOO** 
As of this writing all intended functionality is not yet present.  The landing page of the application displays links to the current top 7 cryptocurrencies as ranked by market capitalization.  Market capitalization is the amount of value represented by a specific currency based on the price of one token in the currency and the ttal number of token in the market.  Clicking on one of the links sends the user to 'show' page with a graph of the price of the currencies for the last seven days.  The data for this graph is pulled from the API.  the landing page also has links at the top of the page to a currency converter that uses price data pulled from the API to calculate conversion between the top 30 crypto currencies by market capitalization.  The home page also a link to a 'trending' currency page that will, when complete, link to page with links to the top seven currencies trending in the CoinGecko market.  

## **Credit**
The code in this project is adapted from several resources found on the web as well as code developed during the course of this curriculum module:

[tutorial 1](https://www.youtube.com/watch?v=gxXw-M5lDOw)
[tutorial 2](https://www.youtube.com/watch?v=0sY4fUi5dMM)
[tutorial 3](https://www.youtube.com/resultssearch_query=currency+converter+web+dev+simplified)
