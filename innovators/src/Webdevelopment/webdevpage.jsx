
import { Box, Card, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

function WebDevelopmentPage() {
  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
    
   <Card sx={{width:"95%", padding:"40px", marginTop:"20px"}}>
   <Box
        sx={{
          position: "relative",
          width: "100%", 
          borderRadius: "20px",
          overflow: "hidden",
        //   paddingLeft:"70px",
         
        }}
      >
        <img
          src="https://innovatorstech.com/wp-content/uploads/2024/06/contact-bird.jpg"
          alt="innovators tech"
          style={{ width: "100%", height: "400px", display: "block" ,borderRadius:"30px",}}
        />
     
        <Typography
          variant="h3"
          sx={{
            position: "absolute",
            top: "50%",
            left: "5%",
            transform: "translateY(-50%)",
            fontFamily: "Sora, Arial, Helvetica, sans-serif",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Pro Services
        </Typography>


        <Typography variant="h6" sx={{position:"absolute",
                                      top:"92%",
                                      left:"75%",
                                      transform:"translateY(-50%)",
                                      backgroundColor:"white",
                                      padding:"24px",
                                      borderRadius:"20px"

        }}>
        <a href="#">Home</a> / Pro Services
        </Typography>
      </Box>
   </Card>

      {/* <Box sx={{ mt: 2, display: "flex", alignItems: "center", gap: 1 }}>
        <Typography variant="body2" sx={{ color: "#666" }}>Home</Typography>
        <Typography variant="body2" sx={{ color: "#000", fontWeight: "bold" }}>/ Pro Services</Typography>
      </Box> */}


                             {/* Title text */}
    
      <Box sx={{ width: "95%", marginTop:"20px", marginBottom:"20px" }}>
        <Typography variant="h6" sx={{margin:"10px"}}>/ Pro Services /</Typography>
        <Typography variant="h3" sx={{marginBottom:"40px"}}>Crafting Tomorrow's Customer Journeys with the 
            <br></br>power of
        </Typography>
      </Box>


                                      {/* Research */}

      
      <Box  sx={{display:"flex",
                gap:"100px",
                backgroundColor: "rgba(1, 45, 56, 0.93)",
                width:"90%", 
                borderRadius:"10px",
                marginBottom: "60px",
                padding:"20px"}}>

        <Typography variant="h2" sx={{ alignContent:"center", 
                                      paddingLeft:"20px",
                                      color:"white",
                                      }}>
                                        Research
        </Typography>

        <Typography variant="h6" sx={{ 
                                      alignContent:"center",
                                      color:"white",
                                      fontSize:"14px",}}>
                                        We provide data-driven insights that represent the 
                                        <br></br> 
                                        voice of the user and resonate with business objectives.
        </Typography>

        {/* <List sx={{padding: 0}}>

       <ListItem disableGutters sx={{ paddingY: "2px" }}>
        <ListItemText primary={<Typography sx={{fontWeight:"bold", color:"white",margin: 0, padding: 0}}>Heuristic Analysis</Typography>} />
       </ListItem>

       <ListItem>
        <ListItemText primary={<Typography sx={{fontWeight:"bold", color:"white",margin: 0, padding: 0}}>Design Audit</Typography>} />
       </ListItem>

       <ListItem>
        <ListItemText primary={<Typography sx={{fontWeight:"bold", color:"white",margin: 0, padding: 0}}>Usability Testing</Typography>} />
       </ListItem>

       <ListItem>
        <ListItemText primary={<Typography sx={{fontWeight:"bold", color:"white",margin: 0, padding: 0}}>Ethnographic Research</Typography>} />
       </ListItem>

       <ListItem>
        <ListItemText primary={<Typography sx={{fontWeight:"bold", color:"white",margin: 0, padding: 0}}>Emerging Trends</Typography>} />
       </ListItem>

       <ListItem>
        <ListItemText primary={<Typography sx={{fontWeight:"bold", color:"white", margin: 0, padding: 0}}>UX Research</Typography>} />
       </ListItem>
   
    </List> */}


        <List sx={{ padding: 0 }}>
        {[
            "Heuristic Analysis",
            "Design Audit",
            "Usability Testing",
            "Ethnographic Research",
            "Emerging Trends",
            "UX Research",
        ].map((item, index) => (

    <ListItem key={index} disableGutters sx={{ paddingY: "2px" }}>
        <ListItemText
             
            primary={
            <Typography sx={{  color: "white", margin: 0, }}>
            {item}
            </Typography>
            }
        />
        </ListItem>
    ))}
       </List>

   
      </Box>
      

                                  {/* Design */}

  

      <Box  sx={{display:"flex",
                gap:"140px",
                backgroundColor: "rgba(1, 71, 25, 0.93)",
                width:"90%", 
                borderRadius:"10px",
                padding:"20px",
                marginBottom: "60px"}}>

        <Typography variant="h2" sx={{alignContent:"center", 
                                      paddingLeft:"20px",
                                      color:"white",}}>
                                        Design
        </Typography>

        <Typography variant="h6" sx={{alignContent:"center",
                                      color:"white",
                                      fontSize:"14px",}}>
                                       Our team of UX-UI designers thrive to create designs 
                                        <br></br> 
                                        that users fall in love with, are intuitive and scalable.
                                        
        </Typography>

        

        <List sx={{ padding: 0 }}>
        {[
            
            "Digital Branding",
            "User Experience Design",
            "User interface Design",
            "Interaction Design",
            "Digital Prototyping",
            "Motion Graphics",
            "Illustrations and Iconography"

        ].map((item, index) => (

    <ListItem key={index} disableGutters sx={{ paddingY: "2px" }}>
        <ListItemText
             
            primary={
            <Typography sx={{  color: "white", margin: 0 }}>
            {item}
            </Typography>
            }
        />
        </ListItem>
    ))}
       </List>

      </Box>


                                   {/* build */}


      <Box  sx={{display:"flex",
                gap:"170px",
                backgroundColor: "rgba(20, 1, 71, 0.93)",
                width:"90%", 
                borderRadius:"10px",
                padding:"20px",
                marginBottom: "60px"}}>

        <Typography variant="h2" sx={{alignContent:"center", 
                                      paddingLeft:"20px",
                                      color:"white",}}>
                                        Build
        </Typography>

        <Typography variant="h6" sx={{alignContent:"center",
                                      color:"white",
                                      fontSize:"14px",}}>
                                       We help you translate any kind of design into pixel
                                        <br></br> 
                                        perfect, adaptable and scalable digital products for
                                        <br></br>
                                        businesses.
                                        
        </Typography>

        

        <List sx={{ padding: 0 }}>
        {[
            
            "Front-End Development",
            "Web Application",
            "Mobile Application",
            "Custom Application",
            "SAAS Implementation",
            "CRM & ERP Softwares",

        ].map((item, index) => (

    <ListItem key={index} disableGutters sx={{ paddingY: "2px" }}>
        <ListItemText
             
            primary={
            <Typography sx={{  color: "white", margin: 0 }}>
            {item}
            </Typography>
            }
        />
        </ListItem>
    ))}
       </List>

      </Box>



                          {/* ON DEMAND ERP */}


      
      <Box  sx={{display:"flex",
                gap:"550px",
                backgroundColor: "rgba(241, 239, 248, 0.73)",
                width:"90%", 
                borderRadius:"10px",
                padding:"20px",
                marginBottom: "60px"}}>

        <Typography variant="h3" sx={{alignContent:"center", 
                                      paddingLeft:"20px",
                                      }}>
                                        On Demand
                                        <br></br>
                                        ERp
        </Typography>

       

        <List sx={{ padding: 0 }}>
        {[
            
            "Front-End Development",
            "Web Application",
            "Mobile Application",
            "Custom Application",
            "SAAS Implementation",
            "CRM & ERP Softwares",

        ].map((item, index) => (

    <ListItem key={index} disableGutters sx={{ paddingY: "2px" }}>
        <ListItemText
             
            primary={
            <Typography sx={{  margin: 0 }}>
            {item}
            </Typography>
            }
        />
        </ListItem>
    ))}
       </List>

      </Box>

 



    </Box>
  );
}

export default WebDevelopmentPage;
