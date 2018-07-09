**Building the app**

(-) You need to have Node installed

(-) Run 'npm install' in root folder to install dependencies that are included at package.json


**Running unit tests**

(-) Run 'npm run test' in root folder


**Running the app**

(-) Run 'npm run server' in root folder. You can see at your console which url is available. If 8081 port 
is already used you can change it at package.json at line 6!



**About the development process**

This app was implemented using Angular 1.7.2 and Bootstrap 4 as basic frameworks.

The main idea is that a parent-component communicates with a child-component.
The parent-component based on the deck-list (card names) initially makes HTTP requests to an API(http://52.57.88.137/api/card_data/{{cardName}}) 
using httpService to build the list of cards (with card-name and card-type).

User can see a card's details by clicking the card-type of a card (button).
On click, parent tells to child which card has been selected(sending card's name) and child makes another HTTP request to the same API 
so as to build card's details. 

In our case, child's request is not necessary because parent can pass to child the response data of its (parent) requests.
But, it's a good practice to implement separately a slim-version payload and a full-version payload 
if we don't need all data in some requests(like these that parent makes). So, i choose to keep this practice here! 

Also, a request to another API (http://52.57.88.137/api/card_image/{{cardName}}) is made for child's img. 
