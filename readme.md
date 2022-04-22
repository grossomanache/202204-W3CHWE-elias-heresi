##My Pokemon
#App components

- App

  - Renders header, adding links to main page and my Pokemon collection
  - Renders footer with GitHub and Instagram logos
  - Sends basic information about Pokemons to Card
  - Sends detailed information about Pokemons to Card
  - Renders information in card
  - Renders information in back of card
  - Renders information in detailed description
  - Renders cross button in Card
  - Renders PageCounter component
  - Renders additional information in card
  - Sends page number information to PageCounter
  - Sends number of total pokemons to PageCounter

- Card

  - Receives information from app regarding all of the Pokemons
  - Receives image information from app for each Pokemon
  - Cross button adds Pokemon to collection if it hasn't been added
  - Cross button removes Pokemon from collection if it's already added
  - AdditionalInfo button redirects user to a DetailedCard
  - Receives detailed information from app to show details in back of card

- PageCounter

  - Receives page number information from app component
  - Receives number of total pokemons from app component
  - Arrows show next/previous pokemons of collection

- DetailedCard

  - Cross button adds Pokemon to collection if it hasn't been added
  - Cross button removes Pokemon from collection if it's already added
  - Receives detailed information from app to show details in back of card
  - Receives image information from app to show details in back of card
