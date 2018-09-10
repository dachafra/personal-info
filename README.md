### My PhD TimeLine
Write your PhD Time Line to you, to your twitter account or to inform your PhD adivsor.


## Index.html
``` html
<div class="timeline-item">
    <div class="timeline-img"></div>
    <div class="timeline-content timeline-card js--fadeIn[Right|Left]">
        [<div class="timeline-img-header">]
            <h2>TiTle</h2>
        [</div>]
        <div class="date">DATE</div>
        <p>Description</p>
        <a class="bnt-more" href="http://...">Link</a>
    </div>
</div>
 ```
 In the index.html add your contributions or events with the side of the card (Left or Right), the title, the date, the description of the event and links to external resources.
 You also can include a \<div> tag with class="time-img-header" for showing a photo of the event between the title.
 
 
 ## Style.css
 Change the colours, the distribution of the items, the margins, etc.
 Add the url for your images as
 ``` css
 .timline-item:nth-child(NUMBER) .timeline-img-header {
   background: linear-gradient(transparent, rgba(0, 0, 0, 0.4)) ,url("URL") center center no-repeat;
   background-size: cover;
 }
 ```
 where NUMBER is the number of the card where you want to appear the image (from 1 to NumberOfCards in index.html)
and URL is the url of your image.