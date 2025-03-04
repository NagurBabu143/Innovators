
import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";

function AboutusPage(){
    return(
        
    <Box>
            <Card sx={{width:"95%", padding:"40px", marginTop:"20px", }}>

                <Box sx={{position: "relative",
                          width: "100%", 
                          borderRadius: "20px",
                          overflow: "hidden",
                        }}>

                        <img src="https://innovatorstech.com/wp-content/uploads/2024/06/contact-bird.jpg"alt="innovators tech"
                         style={{ width: "100%", height: "400px", display: "block" ,borderRadius:"30px",}}
                        />
     
                        <Typography variant="h3" sx={{position: "absolute",
                                                      top: "50%",
                                                      left: "5%",
                                                      transform: "translateY(-50%)",
                                                      fontFamily: "Sora, Arial, Helvetica, sans-serif",
                                                      color: "white",
                                                      fontWeight: "bold",
                                                    }}>
                                                    About Us
                        </Typography>


                        <Typography variant="h6" sx={{position:"absolute",
                                                      top:"92%",
                                                      left:"75%",
                                                      transform:"translateY(-50%)",
                                                      backgroundColor:"white",
                                                      padding:"24px",
                                                      borderRadius:"20px"
                                                    }}>
                                                    <a href="#">Home</a> / About Us
                        </Typography>
                  </Box>
            </Card>



            <Box sx={{display:"flex", gap:"150px",justifyContent:"center", margin:"20px" }}>
                <Box >
                    <img src="https://innovatorstech.com/wp-content/uploads/2024/06/why_3_1.png" alt="DEsigning" 
                    style={{ width: "300px", height: "300px", padding:"20px",justifyContent:"centre" }}/>
                </Box>


                <Box sx={{alignContent:"center", padding:"20px", }}>
                    <Typography variant="h3" sx={{color:"#AA00BA"}}> 
                        Designing & building intelligent and
                        
                    </Typography>
                    <Typography variant="h3" sx={{color:"#386BB7"}}>
                    scalable digital products
                    </Typography>

                    <Typography variant="h6" sx={{fontWeight:"bold"}}>
                        INNOVATORS TECH SOLUTIONS works with growth-oriented businesses to strategize &
                        <br></br>
                        implement digital initiatives

                    </Typography>
                </Box>
            </Box>




                                             {/* Empowering */}


            <Box sx={{display:"flex", gap:"80px"}}>
                    
                <Box sx={{padding:"20px", margin:"20px"}}>
                                           {/* Title */}
                    <Box sx={{marginTop:"20px", marginBottom:"20px"}}>
                        <Typography variant="h4">
                            "Empowering tomorrow's possibilities, today.
                        </Typography>

                        <Typography variant="h4">
                            Welcome to the future with our  
                            <span style={{backgroundImage: "linear-gradient(182deg,rgb(219, 91, 89) 0%,rgb(45, 99, 180) 100%)",
                                          WebkitBackgroundClip: "text",
                                          backgroundClip: "text",
                                          color: "transparent",}}> Innovators Tech</span>
                        </Typography>

                        <Typography variant="h4">
                        <span style={{backgroundImage: "linear-gradient(182deg,rgb(219, 91, 89) 0%,rgb(45, 99, 180) 100%)",
                                      WebkitBackgroundClip: "text",
                                      backgroundClip: "text",
                                      color: "transparent",}}>Solutions</span>."
                        </Typography>
                    </Box>    {/* title */}

                                {/* logo and description */}

                    <Box sx= {{display:"flex", alignItems:"flex-start", position:"relative", width:"100%"}}>
                                         {/* logo */}

                    <Box  sx={{ position: "absolute",
                                left: "-100px",
                                top: "50%",
                                transform: "translateY(-50%) rotate(-90deg)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "fit-content",
                                height: "fit-content",
                             }}>
                        <Typography variant="h1" sx={{fontSize: "65px",
                                                      fontWeight: 600,
                                                      color: "transparent",
                                                      WebkitTextStroke: "3px ",
                                                      backgroundImage: "linear-gradient(182deg, #E24C4A 0%, #386BB7 100%)",
                                                      WebkitBackgroundClip: "text",
                                                      backgroundClip: "text",
                                                      whiteSpace: "nowrap",
                                                    
                                                      
                                                      
                                                    }}>
                                                       Innovators
                        </Typography>
                    </Box>
                                                 {/* logo closed */}

                            <Box>
                                <Typography variant="h6" sx={{ marginLeft:"110px"}}>
                                    For the last 6 years, Innovators Tech Solutions has provided process-driven 
                                    <br></br>
                                    digital solutions for clients in the global marketplace.
                                    <br></br>
                                    <br></br>
                                    
                                    We primarily work growth-oriented, medium-size businesses hailing from a
                                    <br></br>
                                    diverse array of industries and needs. What ties our partners together is their
                                    <br></br>
                                    strong leadership teams that acknowledge their digital pain points and seek
                                    <br></br>
                                    to either improve or expand their current efforts.
                                    <br></br>
                                    <br></br>
                                    
                                    Get to know us, our history, our goals, our mission, and our success. You can
                                    <br></br>
                                    take your time. We are in this for the long haul.


                                </Typography>
                             </Box>   {/* Description closed */}

                  </Box>      {/*  Logo and description */}

                 </Box>     {/* title and logo and description */}


                                  {/* image src opened */}
                  <Box >
                  <img src="https://innovatorstech.com/wp-content/uploads/2024/06/about_4_1.png" alt="empower" 
                  style={{width:"400px", height:"400px", marginTop:"80px"}}/>
                  </Box>

            
                
            </Box>         {/*   Empowering closed */}



        <Box sx={{backgroundColor: "rgba(209, 222, 243, 0.93)",  margin:"20px", padding:"20px", borderRadius:"10px" }}>

                                   {/* Design, Intergrate and deploy */}
            <Box sx={{justifyContent:"space-between",display:"flex",marginTop:"70px" }}>     

                <Box>
                    <p>/ how it works /</p>

                    <Typography variant="h4">Design, integrate, and deploy a customized voice </Typography>
                    <br></br>
                    <Typography variant="h4">assistant, in six weeks or less.</Typography>

                </Box>
                <Box sx={{border:"1px solid black",
                        width:"10%",
                        borderRadius:"10px",
                        display:"flex",
                        padding:"0px",
                        margin:"0px", 
                        height:"60px",
                        alignContent:"center"}}>

                       <Button> ◀ </Button>
                       <Button> ▶ </Button>
                    
                </Box>
                                     
            </Box>
            
                            {/* 4 normal card details */}
             <Box sx={{backgroundColor: "rgba(209, 222, 243, 0.93)",
                       display:"flex", 
                       marginTop:"20px", 
                       marginBottom:"180px"}}>    

                <Card sx={{display:"flex", backgroundColor: "rgba(209, 222, 243, 0.93)",}}>
                     <h3>01</h3>
                    <Box>
                    <h2 style={{fontWeight:"bold", }}>Design</h2>
                    <p style={{fontSize:"24px"}}>Design a branded voice and personality that engages users to resolve inquiries.</p>
                    </Box>
                </Card>

                <Card sx={{display:"flex", backgroundColor: "rgba(209, 222, 243, 0.93)",}}>
                     <h3>02</h3>
                    <Box>
                    <h4 style={{fontWeight:"bold"}}>Integrate</h4>
                    <p>No risky replatforming. seamlessly plug into your exiting tech stack. Deploy at a speed that's right for you.</p>
                    </Box>
                </Card>

                <Card sx={{display:"flex", backgroundColor: "rgba(209, 222, 243, 0.93)",}}>
                     <h3>03</h3>
                    <Box>
                    <h4 style={{fontWeight:"bold"}}>Analyze</h4>
                    <p>A real-time dashboard helps you stay on top of issues such as site problems, trends, or a  rise in specific product inquiries</p>
                    </Box>
                </Card>

                <Card sx={{display:"flex", backgroundColor: "rgba(209, 222, 243, 0.93)",}}>
                     <h3>04</h3>
                    <Box>
                    <h4 style={{fontWeight:"bold"}}>Improve</h4>
                    <p>Manage ongoing performannce updates and maintenance controls, your assistant continuously learns and improves.</p>
                    </Box>
                </Card>

            </Box>

        </Box>    {/* All Design, Intergrate and deploy closing */}










 {/*  the main box */} </Box>                   
    )
}


export default AboutusPage