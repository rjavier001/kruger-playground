import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import React from "react";

const ContactComponent = () => {
  return (
    <div className="Contact__container">
        <h1>
        Ready to connect with me?
        </h1>
        <Grid>
          <Card
            style={{ height:450,maxWidth: 450, padding: " 5px", margin: "0 auto" }}
          >
            <CardContent>          
              <h4>
              Lets Connect!
              </h4>              
              <form>
                <Grid container spacing={1}>
                  <Grid xs={12} sm={6} item>
                    <TextField
                      placeholder="Enter first name"
                      label="First Name"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <TextField
                      placeholder="Enter last name"
                      label="Last Name"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="email"
                      placeholder="Enter email"
                      label="Email"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="number"
                      placeholder="Enter phone number"
                      label="Phone"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Message"
                      multiline
                      rows={2}
                      placeholder="Type your message here"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </div>
  );
};

export default ContactComponent;
