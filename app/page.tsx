'use client'
import Banner from "./components/banner";
import Projectsections from "./components/projectsections";
export default function Home() {
  return (
    <>
      <Banner />
      <Projectsections
        ProjectTitle="Delivery cost calculator"
        ProjectDescription="For my programing assigment for my HNC qualification i had to make a app that calculated how mutch the customer would have to pay per distance.  
        The calculation is as follows £3 * DistanceTraveled + £2. £3 is the charge per mile and the £2 is the booking fee. The front end app was writen in C# and the API was 
        buit using JavaScript"
        ProjectImage= "./images/OrderApp.png"
        ProjectURL="https://github.com/fazemodz/orderapp2"
      />
      <Projectsections
        ProjectTitle="Blackhole Exploration"
        ProjectDescription="This was another project for my HNC qualification. We were tasked to build a website to advertise a conference about blackholes and space exploration. 
        I built this website using Vite and Reactjs which made it difficult as i was still quite new to both."
        ProjectImage= "./images/BlackholeExploraion.png"
        ProjectURL="https://blackhole-exploration.projectredacted.org/"
      />
        <Projectsections
        ProjectTitle="Youtube Search API Project"
        ProjectDescription="This was my first reactjs project that i did. It allows the user to look up information about a Video on youtube
        the app also automaticaly pulls any data about the channel too. There is a rework being done in nextjs as this version requires 2 seperate domains to operate one for the API 
        and one for the front end "
        ProjectImage= "./images/YTSearchProjectOld.png"
        ProjectURL="https://youtubevideosearchfrontend.projectredacted.org/"
      />
    </>
  );
}
