## Distrackt Records Website
![Distrackt Records Logo](https://scontent.fdub2-1.fna.fbcdn.net/v/t31.0-8/18401962_1476086745743030_3445565603802086013_o.jpg?oh=0083c356b5c2a288e3c03b7a33c63b92&oe=5A66A9E2)


## Synopsis
This project is designed to be the website for a new independent record label
called Distrackt Records. The site is supposed to showcase the artwork and music
of all the bands/artists on the label, be a place to find out news pertaining to 
the label (release dates etc) and be a place where people can contact the label from.

## Motivation
Distrackt Records wanted the site to be clean and functional in it's navigation while 
having a dark, gritty and industrial feel to the design that reflects the tone of the music.

The main focus of the site is the releases page as this showcases all the music the record 
label offers. The songs are available to stream freely and have links to where the music can 
be purchased. The audio player I built on this page is intended to be added to as the label grows
and more music becomes available. It is designed to be easy to use, yet eye-catching at the 
same time. The idea is to make the releases page be a place that people want to visit and listen 
to music on.

Later on, the website will include e-commerce sections to buy music directly from the site itself
and we plan to add a live podcast radio section to the audio player on the site. These will come
into being over the next 6 - 12 months.

------------------------------

## Build

### Base Dependencies
Technology | Reason For Use
--------- | ------------------
Bootstrap | I used Bootstrap for it's ease of building responsive layouts and navigation. Using Bootstrap I made a collapsable nav menu, and I made sure that all pages responded well to being viewed on different screen sizes. For example Bootstrap easiy allowed me to set the sizes and position of the article sections on the home page for each screen size so that they will always change to being the optimum size for the current screen.
jQuery | I used jQuery because it was a great choice for handling the controls of all the image swapping sections of the site and jQuery made this easier than native Javascript would have done. The fading images on the home screen is also written in jQuery.
Amplitude Js | Amplitude is a Javascript library for working with Audio files. Native javascript doesn't have too many features for playing audio other than using the standard ways to view audio files. This went against our idea to have a completely custom audio player on the site. Amplitude however provides excellent options for building an audio player to look exactly the way you want it. Amplitude also provides the functionality to link up with Spotify, which we will be doing in the future (the site will start to host a weekly Podcast Radio and we wan't to link it to Spotify to save on storage space on our own servers) and amplitude provides the ability to do this while still keeping our own custom audio player styles.

------------------------------

## Testing

### Manual Testing
* I manually tested every component of the site as I built it by running it in the browser and verifying that users could achieve the functionality they were after. For example when I set up logging in and logging out I manually verified that it worked in several different browsers (Chrome, Opera and Firefox) and when something wasn't working I would fix the problem and then reverify that everything was working in each broswer before moving on to the next stage of functionality. 
* I repeated this process to verify:
   * users can see the image fading with pop up links on the home page
   * users can use all the links in the navigation menu
   * all links on the releases page open up in new tabs so as not to interupt any currently playing music
   * all the social media and 'buy tracks' link work
   * verifying all the images on the releases page change background when intended
   * all the audio works so that users can play songs, pause songs, skip songs, choose songs etc
   * checking that the volume slider works
* I also had the owners of the site user test all of the above

## Author and Contributors
* Paul Fleming  - Coding and design

* Square Apple Graphics  - Artwork and design inspiration

* Distrackt Records  - Logos, artist artwork and release covers.

* Background Factory Image - 123rf.com

* Social Media Icon Inspiration - https://bootsnipp.com/snippets/mp3WO




