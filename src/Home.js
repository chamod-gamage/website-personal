import React, {useState, useEffect, Fragment, useRef} from 'react'
import {Container} from 'react-bootstrap'
import {Layout} from "./components/Layout"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import { Frame } from "framer";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';
import Slider from '@material-ui/core/Slider';
import { withStyles, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {aboutRef, experienceRef, projectsRef} from './components/NavigationBar.js'



// import Card from 'react-bootstrap/Card'
import "./App.css"
import { emphasize } from '@material-ui/core'

var scrollToElement = require('scroll-to-element');
 
scrollToElement('#id');
const ems = require("./assets/ems.png")
const website =  require("./assets/website.png")
const me = require("./assets/me.jpg")
const pygame = require('./assets/pygame.png')

const trashemon = require('./assets/trashemon.png')




export const Home = () => {
  const [idx, setIdx] = useState(0)

  const Ticker = () => {

    const roles = ["Developer", "Designer", "Student", "Teacher", "Musician", "Explorer", "Creator"]
    
    return(
      <h3 onAnimationEnd = {() => {setIdx(idx+1); console.log(idx)}}>
        {roles[idx % roles.length]}
      </h3>
    )
  }
  
  const Name = () => {
    return(
      <Fragment>
        <div style = {{border: "3px solid #e3e464", padding: 10, textAlign: "center"}}>
          <h1 style = {{padding: "0.5vw"}}><i>
            {" chamod gamage "}
          </i></h1>
        </div>
        <div style = {{height: 10}}/>
      </Fragment>
     )
  }

  const HeaderCard = (props) => {
    return(
      <Card className = "minicard">
        <div style = {{height: 5}}/>
          <h2 style = {{color: "#131313"}}><b>{props.title}</b></h2>
        <div style = {{height: 5}}/>
      </Card>
    )
  }
  
  const Introduction = (props) => {
    return(
      <Container>
        <Row>
          <Col lg = {3} style = {{textAlign: "center"}}>
            <div style = {{height: 20}}/>
            <Image src = {me} className = "profile" roundedCircle  />
            <div style = {{height: 10}}/>
          </Col>
          {/* <Col md = {1}/> */}
          
          <Col lg = {9} >
            <Row style = {{textAlign: "left", paddingTop: 0}}>
            <intro>
              Hi! I'm Chamod. I'm a Systems Design Engineering student at the University of Waterloo passionate about tech
              and using it to improve the lives of people. When I'm not busy bringing my ideas to life or developing new skills, 
              you can catch me on my bike outside or scrolling through r/NBA. <br/><br/><em>I'm currently looking for Fall 2020 internships in software development or product management!</em>
            </intro>
            </Row>
            <br/>
            <Row>
              <h1>
              <Col lg = "auto">
                {"\u0020"}
              <a href = "https://github.com/chamod-gamage" target = "_blank"><GitHubIcon fontSize = "inherit"/></a>
              {"\u0020"}
              <a href = "https://www.linkedin.com/in/chamod-gamage/" target = "_blank"><LinkedInIcon fontSize = "inherit"/></a>
              {"\u0020"}
              <a href = "https://www.instagram.com/chamod.og/" target = "_blank"><InstagramIcon fontSize = "inherit"/></a>
              {"\u0020"}
              <a href = "mailto: chamodgamage26@gmail.com" target = "_blank"><MailIcon fontSize = "inherit"/></a>
              {"\u0020"}
              </Col>
              </h1>
              {/* <Row> */}
              <Col lg >
              
              <SydeSlider max = {8} getAriaValueText={valuetext} valueLabelDisplay="off" marks = {[{label: "1B", value: 2}]} step = {null} aria-label="pretto slider" defaultValue={2} />
              {/* </Row> */}
              <h2 style = {{float: "right", marginTop: -5}}>SYDE Progress</h2>
              </Col>
              
              
            </Row>
          </Col>
        </Row>
      </Container>
    )  

  }

  const Job = (props) => {
    function markup() {
      return {__html: props.description };
    }

    return (
      <Fragment>
      <Row>
        <Col md = "auto" >
          <div className = "job-title"><em>{props.title}</em></div>
        </Col>
        <Col >
        <div className = "job">{props.company}</div>
        </Col>
        <Col md = "auto" style = {{marginRight: 0, paddingRight: 5, marginLeft: "auto"}}>
        <div className = "date">{props.date}</div>
        </Col>
      </Row>
      <Row>
        <Col >
        <div dangerouslySetInnerHTML = {markup()} className = "describe"/>
        <div style = {{height: 5}}/>
        {props.skills != "None" && props.skills.map(skill => {
            return(
              <div className = {"skillItemShape"}>
                <p className = {"skillItem"}>{skill}</p>
              </div>
            )
          })}
        <div style = {{height: 20}}/>
        </Col>

      </Row>
     
      </Fragment>
    )
  }
    
  const jobs = [
    {
      title: "Junior DevOps Developer @",
      date: "May 2020 - Present",
      company: "Honeybee Hub Inc.",
      description: 
        `<br/>Honeybee Hub is a digital marketplace startup connecting researchers and research study
         participants. In recent times, we've been assisting in the battle against COVID-19 by 
         connecting participants to dozens of COVID-19 studies hosted on a <a href = https://covid19.honeybeehub.io/ target = "_blank"><mark>separate platform</mark></a>.
         My most recent role as a Junior DevOps Developer allowed me to contribute to the team in 
         a new area. Here are some highlights of my achievements:
         <br/><br/>
         <ul><li>Single-handedly containerized applications using Docker and deployed them to Azure (and then eventually Google Kubernetes Engine) in order to ensure more efficient usage of software resources </li>
          <br/><li>Coordinated container migration to Google Cloud Platform, architecting a secure networking structure to enforce HIPAA compliance, enabling management of sensitive data and saving $1000/month (compared to external network management)</li>
        <br/><li>Conducted research into legal guidelines for HIPAA compliance and contacted third-party API providers to ensure their services were also compliant</li></ul>`,
      skills: ["Kubernetes", "Docker", "Google Cloud Platform", "MS Azure"]
    },
    {
      title: "Full Stack Web Developer (Co-op) @",
      date: "Jan 2020 - Apr 2020",
      company: "Honeybee Hub Inc.",
      description: `<br/>Before my role in DevOps at Honeybee, I was a Full Stack Web Developer. This was my first full-time position as a developer and I was certainly thrown for a spin at the beginning trying to acclimate myself to the fast-paced environment of a startup. However, I soon acclimated and was given the independence, advisement, and responsibility to tackle some hefty pursuits during my time. Here's just a few of the things I accomplished over my time:
      <br/><br/>
      <ul><li>Redeveloped the <a href = "https://www.honeybeehub.io" target = "_blank"><mark>landing page</mark></a> to increase user discovery & retention, reducing bounce rate from 60% to 10% </li>
       <br/><li>Implemented a user interview methodology for user research regarding planned product features, yielding key insights into the company’s user base during user interviews</li>
     <br/><li>Helped create an updated roadmap for internal usage regarding planned feature releases over the next quarter</li>
     <br/><li>Acted on user feedback by single-handedly developing a scheduled messaging feature for researchers, all the way from front-end styling to database architecture</li></ul>`,
      skills: ["React.js", "Node.js", "MongoDB", "Mongoose.js", "Express.js", "HTML", "CSS", "User Research"]
    },
    
    {
      title: "Lead Mechanical Executive @",
      date: "Sep 2015 - Jun 2019",
      company: "Absolute Robotics",
      description: `<br/>Throughout my time in high school, I was an integral part of Absolute Robotics, my FRC team, an experience very similar to working in a professional engineering environment. During this time, I saw my team grow from a relatively average FRC team to a tightly-knit well-oiled machine capped off by our semifinalist position at the 2018 World Championships (losing to the champions). 
      <br/>As Mechanical Executive, I was really a jack-of-all-trades. Primarily, I was focused on the preliminary designs, prototypes, and final construction of the competition robot. However, I also had to train junior members up and raise thousands of dollars in funds by pitching to sponsors prior to the build season, manage a hectic 6-week build season by delegating roles and planning workflows effectively 
      within my large subteam of >60 members, and finally, coordinate with my fellow executives and assist them with their roles (such as coding autonomous functionality for our robot). All in all, my time in FRC was the launchpad for my career in STEM. <br/><br/>`,
      skills: [ "Java", "Fundraising", "Team Management","Sprint Planning", "Competitive Analysis" ]
    },

    {
      title: "Piano Teacher",
      date: "Jul 2017 - Jan 2019",
      company: "(Self-Employed)",
      description: `<br/>Growing up, one of the largest parts of my life was learning to play the 
      piano and consistently improving my skill level, just as I do today with my development 
      and product management skills. Having been a student for 8 years, I decided it was finally 
      time to transition into the role of giving back and sharing what I had learned. As such, 
      I became a piano teacher for elementary school kids around the age I had been when I first 
      started. This was my first taste of entrepreneurship and I took the opportunity and ran with it. 
      I made personalized lesson plans to ensure the effectiveness of my teaching for each individual student,
       a penchant for detail that has happened to present itself throughout my career in tech.<br/><br/>`,
      skills: ["User Research"]
    },

  ]

  const Experience = () => {
    return(
      <Fragment>
      <HeaderCard title = {"Experience"}/> 
      <div style = {{height: 10}}/>
      {/* <Card style = {{backgroundColor: "#1d1f2f"}}> */}
      {/* <Card className = "projects"> */}

      <div style = {{height: 10}}/>
        {/* <Container style = {{padding: "5%"}}> */}
        {jobs.map(job => {
          return(<Job 
            title = {job.title} 
            company = {job.company} 
            description = {job.description} 
            date = {job.date}
            skills = {job.skills ? job.skills : "None"}
            />)
        })}
        {/* <div style = {{height: 100}}/> */}
        {/* </Container> */}
      {/* </Card> */}
      </Fragment>
    )
  }

  const Project = (props) => {
    return (
      <Fragment>
      <Row>
        <Col xl = "auto" style = {{paddingLeft: 0}}>
          <div className = "job-title"><em>{props.title}</em></div>
        </Col>
        
        <Col xl = "auto" style = {{marginRight: 0, paddingRight: 0, marginLeft: "auto"}}>
          
            
          
        </Col>
      </Row>
      <div style = {{height: 10}}/>
      <Row>
        <Col style = {{padding: 15, textAlign: "center"}} xl = {6}>
          <img src = {props.image} style = {{maxWidth: "100%"}}/>
          <div style = {{height: 5}}/>
          {props.skills.map(skill => {
            return(
              <div className = {"skillItemShape"}>
                <p className = {"skillItem"} >{skill}</p>
              </div>
            )
          })}
        </Col>
        <Col style = {{padding: "0px 0px 0px 0px", textAlign: "center"}}>
        
        <div style = {{height: 5}}/>
        <div className = "describe">
          {props.description}
        </div>
        <div style = {{height: 15}}/>
        <a target="_blank" href={props.link}><button><p>
          {props.buttonText}
        </p></button></a>
        
        </Col>

      </Row>
     
      </Fragment>
    )
  }

  const Projects = () => {
    return(
      <Fragment>
        <HeaderCard title = {"Projects"}/> 
        {projects.map(project => {
          return (
            <Fragment>
            <div style = {{height: 40}}/>
            <Card className = "projects">
            <div style = {{height: 5}}/>
              <Container style = {{padding: "5%"}}>
              <Project 
                title = {project.title} 
                description = {project.description} 
                skills={project.skills}
                image = {project.image}
                buttonText = {project.buttonText}
                link = {project.link}
              />
              <div style = {{height: 10}}/>
              </Container>
            </Card>
            
            </Fragment>
          )
    })}
      </Fragment>
    )
  }
  
  const projects = [
    {
      title: "Employee Management System",
      skills: ["Java", "Java"],
      image: ems,
      buttonText: "Take a look at the code on GitHub",
      link: "https://github.com/chamod-gamage/ems",
      description: `Initially a simple computer science exercise to learn about hash tables, the Employee Management System (EMS) is a fully functional Java application developed in NetBeans which 
      allows users to manage a company's employees. Users are provided with password functionality, long-term storage of data, simple payroll functionality, and CRUD operations for both employees
       and their work locations. This project was built completely from scratch - 
      this project was foundational in developing my understanding of Object-Oriented Programming.`
    },
    {
      title: "Personal Website",
      skills: ["React.js", "HTML", "CSS", "Keyframes"],
      image: website,
      buttonText: "Take a look at the code on GitHub",
      link: "https://github.com/chamod-gamage/personal-website",
      description: `This is actually the second major iteration of my personal website. While my initial version was a hodgepodge of HTML and CSS and contained somewhat hacky code, 
      this version is much sleeker, responsive, aesthetically pleasing, and easy to modify. I developed this website using the skills I gained in React.js over my first co-op term 
      in addition to the HTML and CSS skills I had acquired over time beforehand, as well as a new skill I developed - CSS animations! This website is the best way to present myself
       in a more relaxed format and lets my personality come through. It's constantly under construction and is getting more and more interactive. `
    },
    {
      title: "PygamePaint",
      skills: ["Python"],
      image: pygame,
      buttonText: "Take a look at the code on GitHub",
      link: "https://github.com/chamod-gamage/pygamePAINT",
      description: `Pygame Paint was one of my first forays into the world of programming. Built in Pygame, 
      this simple program provides a simple alternative to other drawing applications, providing easy-to-follow
       instructions and versatility in illustration. With much room to improve, this program is definitely not
        without its flaws. However, I still look back fondly on it and like to show 
      it to demonstrate how far I have come in my journey in tech.`
    },
    {
      title: "Trashemon Go",
      skills: ["React Native", "Node.js", "Firebase"],
      image: trashemon,
      buttonText: "Take a look at this project on Devpost",
      link: "https://devpost.com/software/trashemon-go-3jomhr",
      description: `Trashemon Go is a mobile app that gamifies the upcycling/recycling of trash in your neighbourhood inspired by the star app of summer 2016 - Pokemon Go. The app was
       developed by me and a few classmates. We were very ambitious in trying to combine many different features in a short period of time, including Google Cloud Vision API (using ML
         to identify trash from visual images), Twilio Chat API (to create chat rooms for users to interact), as well as the user experience features required to make an effective app. 
         Personally, I planned out the overall software architecture that would allow all these features to work together and the React Native frontend as well.`
    },
    

  ]

  const Skills = (props) => {
    return(
      <Fragment>
      <HeaderCard title = {"Skills"}/> 
      <div style = {{height: 20}}/>
      {/* <Card style = {{backgroundColor: "#1d1f2f"}}> */}
      {/* <Card className = "projects"> */}
      <div className = "describe" style = {{fontFamily: "Raleway"}}>
        I'm a lifelong learner and I'm always trying to expand the number of skills and technologies
        I have on my toolbelt to help me build what I want. Here's a list of technical skills and 
        technologies that I have picked up over the years:
      </div>
      <div style = {{height: 20}}/>
        {/* <Container style = {{padding: "5%"}}> */}
        {props.skills.map(skill => {
            return(
              <div className = {"skillItemShape"}>
                <p className = {"skillItem"} >{skill}</p>
              </div>
            )
          })}
        {/* <div id = "experience" style = {{height: 100}}/> */}
        {/* </Container> */}
      {/* </Card> */}
      </Fragment>
    )
  }

  

  const skills = [
    "HTML",
    "CSS",
    "Keyframes",
    "React.js",
    "React Native",
    "Express.js",
    "Node.js",
    "Mongoose.js",
    "Python",
    "Java",
    "C++",
    "MongoDB",
    "SQL",
    "Docker",
    "Microsoft Azure",
    "Kubernetes",
    "Google Cloud Platform",
    "Git",
    "LaTeX",
    "Markdown",
    "User Research",
    "Prototyping",
    "Competitive Analysis",
    "Sprint Planning"
  ]

  const SydeSlider = withStyles({
    root: {
      marginTop: 5,
      color: '#4a93ff',
      height: 8,
      marginBottom: 0
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {
    },
    markLabelActive: {
      padding: 2,
      fontFamily: "Raleway",
      fontWeight: 600,
      color: "#4a93ff"
    },
    valueLabel: {
      color: "#4a93ff",
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);

  function valuetext(value) {
    return `${value}B`;
  }

  const Footer = () => {

    return(
      <Fragment>
        <h2>
        Made by  <mark>Chamod Gamage</mark>
      </h2>
      <h1>
    
      {"\u0020"}
      <a href = "https://github.com/chamod-gamage" target = "_blank"><GitHubIcon fontSize = "inherit"/></a>
      {"\u0020"}
      <a href = "https://www.linkedin.com/in/chamod-gamage/" target = "_blank"><LinkedInIcon fontSize = "inherit"/></a>
      {"\u0020"}
      <a href = "https://www.instagram.com/chamod.og/" target = "_blank"><InstagramIcon fontSize = "inherit"/></a>
      {"\u0020"}
      <a href = "mailto: chamodgamage26@gmail.com" target = "_blank"><MailIcon fontSize = "inherit"/></a>
      {"\u0020"}

      </h1>
      </Fragment>
      
    )
  }
    return(

        <div>
            <Jumbotron style = {{backgroundColor: '#131313', borderRadius: 0, margin: 0, zIndex: 20}}>
                <header className="App-header">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans|Roboto+Mono|Raleway"/>
                <div id = "about"/>
                    <Name/>
                    
                    <Ticker/>
                                      
                </header>
                
                <div style = {{height: 60}}/>
                <Layout>
                  
                  <Introduction />
                  
                  <div style = {{height: 100}}/>
                  <Skills skills = {skills}/>
                  <div  id = "experience"/>
                  <div style = {{height: 100}}/>
                  
                  <Experience />
                  <div id = "projects"  style = {{height: 20}}/>
                  <div style = {{height: 100}}/>
                  <Projects />
                  <div style = {{height: 100}}/>
                  <Footer/>
                </Layout>
            </Jumbotron>
              

            
            
        </div>
    )
}




  