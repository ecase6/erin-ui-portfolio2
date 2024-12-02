---
title: Design Evolution Narrative
slug: /designNarrative
date: 2024-12-02T15:30:00Z
tags: [freeform]
---

# Design Evolution Narrative

**Part 1: The Idea**

When brainstorming what application I should create and design, I chose the idea that’s always been in the front of my mind: a Craft/DIY organizer. Ever since I can remember, I’ve loved creating. Knitting, sewing, painting, sculpting – you name it! I enjoy it all. I got this passion for creating from my mom, who also loves to craft and create in her free time. In fact, in my mom’s house (and my childhood home), we have a whole room dedicated to crafts and crafting materials. While this space was the source of many fond memories for the both of us, the organization of the space has always been a bit of a problem. We had so many things in there and so many opportunities that it was hard to keep track of what we had and what we wanted to create. I have always wished there was a tool to help with this problem. So, I decided to design one! I worked alone on this project to design a desktop prototype for a DIY/Craft Organization Solution, called Crafty. Ideally, this application would be available through mobile devices as well, but I decided to focus solely on a desktop application for now, as that’s what I prefer to use most of the time when I’m trying to plan/organize things. This application would not only be useful to my mom and I, but to creators all around the world, as this organizational problem I described is a common one for many people. 

Once I decided on this idea, the next step was to think through the details: what features are important, what should it convey, what styles would be best, etc. To help work through these questions, one method I used was creating a story about a hypothetical person who would benefit from this application. A summarized version of this story is as follows: 

*Late at night, Paul is about to sleep when inspiration strikes: a macramé plant hanger. He’s eager to start but the excitement is followed by concern – does he have enough rope? Digging through craft bins might wake his roommates, so he turns to his craft organizer app. Opening the "Materials Inventory," Paul quickly checks his supplies. The app confirms he has enough rope, saving him from a midnight search. Relieved, he logs a reminder in the "Current Projects" section to revisit another unfinished piece before starting this new one. Using the app’s time tracker, he estimates how long the hanger will take and sets a goal for tomorrow. Satisfied, Paul sets his laptop aside, confident his creativity is under control. Thanks to the app, he can rest easy, ready to craft stress-free in the morning.*

Writing this story revealed some key things that I should keep in mind while designing the app. 
- It should be simple to navigate and use
- Tracking projects, materials, time, and “due dates” are valuable 
- Having an area in the app to take quick notes is essential

Another method that I used to determine the details of the app was to come up with 2 main values that the app should embody. I decided that these would be **organization** and **playfulness**. I chose organization because it’s important that users feel in control of their materials, projects, and time, all from one place. For crafters, staying organized can make the difference between enjoying their projects and feeling overwhelmed. By making information easy to find and access, the UI helps crafters avoid wasting time, track what they have, and manage their creative process smoothly. I chose playfulness because crafting is an inherently creative process, so the app should reflect that energy. It’s not just about completing tasks, it’s about making the journey enjoyable and inspiring creativity. Adding playful elements keeps the experience lighthearted and encourages users to stay engaged.

**Part 2: Early Designs**

My next step was to start making some designs. The very first designs I created were by-hand, with regular-old pen and paper.

![Error getting image](/img/flowchartSketch.png)
The goal of the sketch above was to determine the screens/modals I would need and how they would work together for navigation. 

![Error getting image](/img/pagesSketch.png)
The above sketch is an example of a couple of pages/components I sketched out to get a rough idea of what the mockups might look like. These don’t include all of the details I had in mind, as it was a lot harder and more time-consuming to sketch designs by hand than I anticipated! 

![Error getting image](/img/firstCard.png)
The above screenshot is from the earliest version of Figma mockups. This was the design for a “project card” (when the user clicks on a project, this is the detailed view that would be shown). 

A lot ended up changing from these sketches/designs to my final mockups, which you will see further below.

After doing some sketches, it was time to take a stab at creating a design system. This concept was something that seemed very simple and easy to me before starting, but once I started, I found it was not as simple as I would have hoped! When making a design system from scratch, there are so many choices that need to be made: colors, fonts, buttons, etc. It took me a long time to make these decisions. 

<div style={{ border: '1px solid rgba(0, 0, 0, 0.1)', width: '800px', height: '450px' }}>
  <iframe
    width="800"
    height="450"
    src="https://embed.figma.com/design/018Q63YKHEEpRSEdmZALaj/FinalProject?node-id=0-1&embed-host=share"
    allowFullScreen
  ></iframe>
</div>

Creating my Style Guide within my Design System is where I wanted to start. In this, I identified the colors, font styles, and logos I wanted to use. For the colors, I chose bright (but not too “in-your-face”) colors, that would inspire creativity. For the background color, I decided on a cream color. I chose this instead of white because I often think white strains the eyes, and I thought a cream would better complement any pictures that users choose to upload, as well as the app as a whole. I made sure that my colors all had good contrast to ensure accessibility. The font styles I chose were meant to be simple, yet fun. I made sure to choose sans-serif fonts for accessibility. I also chose grays instead of black for the font colors because it’s easier on the eyes. 

**Part 3: Early Prototype**

<div style={{ border: '1px solid rgba(0, 0, 0, 0.1)', width: '800px', height: '450px' }}>
  <iframe
    width="800"
    height="450"
    src="https://embed.figma.com/proto/av70StQnfcSz2XkeL4pdcn/FinalProject-Prototype?node-id=2021-4333&starting-point-node-id=2021%3A4333&embed-host=share"
    allowFullScreen
  ></iframe>
</div>

The prototype above is the earliest working prototype of the application that I created. The navigation is meant to be pretty straightforward. There is a dashboard that displays some information at a glance, along with pages for projects, inventory, shopping list, calendar, and finished projects. Feel free to click around and explore!

After creating this prototype, I had a colleague look at it and give me some feedback. A strength that was identified during this was that the prototype was simple, intuitive, and easy to navigate. I was glad to hear this, as this was an important goal of mine. Another strength was the color scheme. My colleague liked the design system I chose and thought it matched the functionality of the application. One major weakness was that there were some inconsistencies with margins, buttons, and components. For example, it’s easy to see that the shopping list component on the dashboard doesn’t match the style of everything else. This is something I made sure to put more effort into to fix in the future. It was important to me that everything looked cohesive.

**Part 4: User Tests**

I conducted a number of user tests throughout the process of creating the design of the application – some formal, and some less so. For the formal ones, I had a script that I would read to the participants, and I would ask them to explore the application as well as complete a task. For the less formal ones, I would just ask for general feedback as the user explored the application. I had a wide variety of participants do user testing with me. Some were colleagues, others were friends – all with varying levels of experience with crafting. 

Some common feedback I got during user testing:
- Users enjoyed the colors and styling
- Users thought the purpose of the app was clear
- Users thought the app was easy to navigate
- Users didn’t get the “whole image” of the app, as not every feature is interactive/implemented (this is to be expected, as actually developing the app was not the purpose of the project)
- Some users found the differences in margins/spacing distracting or not as clean as it could be

Specific usability issues I committed to changing:

- The shopping list cards didn’t match the style of the others

Design consistency plays a big role in user experience because it makes the user more comfortable and eases navigation within the app. When the shopping list cards don’t match the style of other elements, it can distract or confuse users. I fixed this by making these cards more similar to the rest (matching border radius, drop shadow, font, size, etc.).

- The calendar looks off

The calendar is important for visualizing timelines and deadlines. A wonky layout makes it harder for users to read and navigate, which could lead to missed deadlines or scheduling errors. I made this fix by creating my own calendar in Figma, rather than using one that was pre-built. I used the pre-made one at first to save time, but I decided taking the time to make my own would be necessary and worth it.

- There is no interface for the filter/sort buttons.

Without an interface for filter and sort options, users are limited in their ability to manage projects efficiently, especially as their list of projects gets bigger. Filter and sort are essential for usability, and it would allow users to quickly locate specific projects. I fixed this by creating an interface and adding it to my prototype in the places it needed to be.

- It would be nice to have a “project type” field (e.g., sewing) for the projects so that the user could filter/sort by that.

Including a “project type” field (e.g., sewing, painting) provides a way to categorize projects, making it easier for users to filter by type. This feature would be particularly useful for users who create multiple kinds of projects, helping them to organize and look at projects without unnecessary scrolling or searching. I fixed this by adding a dropdown to the project card that allows the user to add the type of project. I also made this something the user could filter by.

- The margins/spacing is not always consistent.

Consistency in margins and spacing is important for visual hierarchy, readability, and aesthetic appeal. Inconsistent spacing can look disjointed or unprofessional. Correcting this will make the app look polished and cohesive. I fixed this by going through all of my pages and making the margins and spacing more consistent.

- It would be nice to have a space for more notes on a project once that project has been completed (e.g., what to do differently next time).

Allowing users to add notes to completed projects supports continuous learning and improvement in DIY/craft projects. This feature would enable users to reflect on what worked well and note any changes for future reference. I fixed this by adding a space to add notes to a finished project card. 

**Part 5: Final Design**

The following embedded prototype is the final version of the application I created, complete with the fixes above. 

<div style={{ border: '1px solid rgba(0, 0, 0, 0.1)', width: '800px', height: '450px' }}>
  <iframe
    width="800"
    height="450"
    src="https://embed.figma.com/proto/ApO4bf22i7H0JIClbw3GXG/Prototype-4?node-id=10013-7923&embed-host=share"
    allowFullScreen
  ></iframe>
</div>

As stated previously, the two values I deemed most important for this app were **organization** and **playfulness**. I believe this final version of the app embodies those values. It is straightforward, simple, and easy to use and navigate. It is also colorful and fun, and it allows the user to be creative and playful by uploading images, typing descriptions, and adding notes. 

I had such a fun time creating these mockups and prototypes. I wish I had more time to perfect and improve it. I would have loved to create more playful components, like snackbars, animations, and fun copy text if I had more time. I would’ve also liked to replace the gray image placeholders with real images – so people could better see the vision and potential of the app. 

All in all, I learned a lot about UI/UX through this project, and I’m thankful to all of the people who helped me along the way. 
