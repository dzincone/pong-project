# g10-project-week-proposals

### Students should submit a pull request with an updated README that outlines their project idea

### Your README should include the following:

1. A brief description of your project
2. What technologies do you plan to use (libraries?)
3. What will your MVP be?
4. What features will you add if you have time?


## Ping Pong Scheduler
  Users can create a profile and log-in to view or create matchups against other users.

  Events can be created for individual games or team games. Tournaments can also be created. Users can click on One Time Play! and see a list of users and invite them to play. On the home screen, once logged in, a user can see all pending games, completed games, and the options to create a new game using the buttons.

## Resources
  - Express
  - MongoDB to store player information and game scheduling
  - Monk
  - Possible API to other people's projects for displaying status of players and/or player status
  - Jade
  - Javascript
  - CSS
  - Deployment to Heroku
  - Git
  - Player Images
  - Possible D3 for statistic manipulation
  - Possible slack api to ping people after an invite

## MVP Features
  - Create the home page with a log-in screen and a create account link
  - User can create an account and redirect to the profile page where they can edit profiel, or skip and go to home page.
    - With creating account, users will get redirected to edit profile info with some things including what hand they use, nickname, short bio.
  - When a user logs in they are redirected to the welcome home page with a logout function in the top right. This page will display the "One Time Play" or "Tournament" blocks. These will be large buttons that will use javascript to cycle through menu. Data will not be sent until the final submit form.
  - Welcome page has two sections on the bottom or sidebar that have Upcoming games including waiting on people to accept invitation, or to accept invitation from others.
  - Users can click on the front page "One Time Play" or "Tournament"
    - "One Time Play" opens up "Individual" or "Team Play"
      - "Individual" has a subset of How Many games
        - Subset of How many points
          - Subset of who wants to play
            - Submit the form
      - "Team Play" has a subset of potential partners
        - Submit form
          - This puts your new team in the pool of teams to play, cannot be on multiple to teams
      - Once "Team Play" team is confimed, you will have New box show up that says "Find Team to Play" as a banner to find a match of other teams to play which goes through same subset of How many games, How many points, and Which teams you want to challenge.
        - Games show up in Upcoming games, to wait on team to accept, or to accept a challenge from other teams
  - Create Upcoming Games / Completed Games below the large buttons.
    - This will allow one to be selected already which is Upcoming Games. A button right next to it will say Completed Games which will show current up to date statistics of previous games. Will show in rows up to the past 5. Green highlighted for wins, red for losses. Will show images of you (or teammate) vs opponent (team)
    -Upcoming games will be in rows as well up to 5 that either show Accept Challenge for people challenging you, a Team request to play a team game, or waiting on challenger to accept game for individual or teams.
  - When a game has been confirmed, a slack will be sent to those users with notification that they are being challenged, or a person has accepted a team membership.
  - Once a game has been accepted, it will show up under upcoming games until you complete the game where you will say if you have won or lost. This will then go in the completed games section for all users involved, and removed from pending or upcoming games.

## Future Goals
  - Create an API to sync with other classmates, and pull in their info as well.
  - Create tournament play
    - How to create events, and invite users
    - Show upcoming tournaments and join them
    - Record stats on profiles of which tournaments have been won, or which place you came in
  - Actual game page where you can keep score as the game goes on and record score of each match
  - Use d3 to manipulate data and show cool statistics for each player and game
  - Maybe use email api to send notifications through email as well or upcoming tournaments
