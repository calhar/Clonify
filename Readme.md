# Clonify
###### Naming things continues to be a challenge

I want to use my Raspberry Pi as a music server. An opportunity to learn a few things and refresh my skills with various tools knocks.

Longterm plan is a music player that:
    - Automatically adds music added to its watched folders to the database
    - Allows for multiple users and hiding/sharing of playlists

## State of the Media Server

Basic backend Get stuff works fine but needs to be changed to actually run through the Data Transfer Objects.

Frontend is a mess, but allows for playing music and adding music to the play queue.

Immediate goals:
    - Media player controls. Play/pause/previous/next/repeat/shuffle/seek and volume sliders/etc
    - Create, delete, and edit playlists.
    - Separate the css into multiple files so it's not such a monolith

Slightly further off:
    - Automatically build database for files added to watched folders by reading tags and freedb or similar
    - Failing that, a tool to nicely add new albums/tracks/singles to the database
    - Pull album art as necessary and shift to images on tiles rather than text

## Tech stack

This is built using

C#, .Net core, and one of the releases of MS SQL Server localdb (probably 2014 or 2016) for the backend
Typescript, React, and eventually probably Redux or similar on the frontend