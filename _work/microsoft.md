---
layout: projectPost
title: Microsoft
role: Compiler and Language Platform Explorer Intern
start: May 2016
end: August 2016
image: microsoft.jpg
categories: ['software', 'recent']
location: Redmond, Washington
brief: Static analysis standard format SARIF viewing experiences with TypeScript
date: 2016-08-15 00:00:00
---
### A taste of the real world

From orientation on the first day of work to the presentation on the final day, my experience at Microsoft was nothing short of spectacular. I got to provide immediate value to my team and was able to work with teams on the Visual Studio Code team as well. As an intern, Microsoft did an excellent job at facilitating interviews and interactions with powerful players within Microsoft.

Some of the highlights from the summer (in no particular order):

- Satya Nadella intimate Q&A session
- Microsoft Signature Event (Space Needle rented out and private Ellie Goulding performance and Microsoft Surfacebook)
- Sailing on 50' sailboats
- Oneweek (Microsoft's week of hacking)
- Demoing to my team and other interns
- Builder (A retreat for all interns in the developer division)

### What I worked on

As a Microsoft explorer, I worked with three other interns on building Visual components to support the new static analysis standard that our team was developing, SARIF. In order to accurately understand which features of current static analysis products were most important, we conducted many user study interviews with other teams across our division and others. After these interviews took place we began to work on separate issues.

After beginning to work on our team's overall product, the [sarif-sdk](https://github.com/Microsoft/sarif-sdk), I noticed that we had several commits by both interns and full-time employees that had included code that either broke the build completely or failed some of the tests which proved to be a headache for members of our team. In order to solve this problem, I looked into various Continuous Integration platforms and ended up using [AppVeyor](https://www.appveyor.com/) which was free to use for open-source projects and provided the full suite of Visual Studio command prompt commands. This project turned out to be instrumental in my next project.

After completing this task, I began to focus more on what our intern team had been tasked with, and decided to add SARIF (which is the JSON static analysis error format) support to [VS Code](https://code.visualstudio.com/). I used the [Common Language Service Protocol](https://code.visualstudio.com/blogs/2016/06/27/common-language-protocol) developed for VS Code as a foundation and from there developed a plugin using TypeScript that would open the relevant SARIF file. Now here's where the magic would come in. As a part of AppVeyor, I wrote an additional script that would generate a SARIF log file as a build artifact which had the URI's sourced to the original file location in github. This meant that the build artifact and error log was always up to date with the github repository. This meant that as an end-user on any OS platform, you would be able to download the relevant SARIF file from the build-artifact, whether or not you were enlisted in the specified repository, and the plugin would download the file where the error was originally generated and highlight it in VS Code. This meant that you could consult other teams or individuals on an error, just by sending over the SARIF log file and they would automatically have the context necessary to get an overview of the project.

### Other highlights from my time in Seattle

- I lived in a million-dollar mansion with four other friends in Yarrow point.
- I bought and sold a BMW motorcycle for transportation
- I started Salsa dancing
- I walked in the Seattle Pride parade

Overall, Microsoft has been one of my favorite places to work and Seattle to live.
