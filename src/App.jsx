import React, { useState} from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button, IconButton, TextField } from "@mui/material";
import {Container} from "@mui/system";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import {Slider} from "@mui/material";
import { createTheme } from '@mui/material/styles';
import {Checkbox} from "@mui/material";
import {PasswordGeneration} from './PasswordGen'



const App = () => 
{
    const [inputValue, setInputValue] = useState("");
    const [charLength, setCharLength] = useState(10);
    const [upperCase, setUpperCase] = useState(true);
    const [useNumbers, setUseNumbers] = useState(true);
    const [useSymbols, setUseSymbols] = useState(true);


    const theme = createTheme({
        typography: {
          fontFamily: [
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif'
          ].join(','),
        }
      });

      const styles = theme => ({
        input:{
            color:'red'
        }
    });
    return (
      <div>
        <style>{"body { background-color: #121117; }"}</style>
        <Container maxWidth="sm">
          <Grid
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: "80vh" }}
            container
            spacing={0}
            gap="500"
          >
            <Typography
              variant="h4"
              color="#2E2B49"
              gutterBottom
              marginBottom={5}
              fontFamily="sans-serif"
            >
              Password Generator
            </Typography>
            <Box
              sx={{
                width: 550,
                height: 100,
                backgroundColor: "#1A1921",
                marginBottom: 5,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                  paddingLeft: 20,
                  paddingRight: 20,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%"
                  }}
                >
                  <TextField
                    id="standard-basic"
                    color="warning"
                    type="text"
                    variant="outlined"
                    InputProps={{ readOnly: true}}
                    sx={{ width: "100%", marginRight: 4, color: "#ED6C02"}}
                    value={inputValue}
                    fontFamily="sans-serif"
                    onChange={(e) => setInputValue(e.target.value)}
                    label="Password"
                    
                  ></TextField>
                  <CopyToClipboard text={inputValue}>
                    <IconButton
                      sx={{
                        color: "#ED6C02",
                        "&:hover": {
                          backgroundColor: "#742D11",
                          borderColor: "#A2380D",
                        },
                      }}
                    >
                      <ContentPasteIcon />
                    </IconButton>
                  </CopyToClipboard>
                </div>
              </div>
            </Box>

            <Box width={550} height={325} backgroundColor="#1A1921" margin="500">
                <div style={{paddingBottom:5, paddingLeft:40, paddingRight:40, paddingTop:20 }}>
                    <div
                    style={{ display: "flex", justifyContent: "space-between", paddingBottom: 10}}
                    >
                    <Typography sx={{ variant: "h1", color: "#ED6C02" }} fontFamily="sans-serif">
                        Password Length
                    </Typography>

                    <Typography
                        sx={{
                        variant: "h1",
                        color: "#ED6C02",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "centre",
                        }}
                        fontFamily="sans-serif"
                    >
                        {charLength}
                    </Typography>
                    </div>
                    <Slider
                    defaultValue={10}
                    aria-label="Default"
                    max={30}
                  min={5}
                  sx={{ color: "#ED6C02" }}
                  color="warning"
                  onChange={(e) => setCharLength(e.target.value)}
                  />
              </div>
               <div style={{ paddingLeft: 30, display: "flex", justifyContent: "start", paddingTop:5}} >
                  <Checkbox checked={upperCase} label="UpperCase Letters" sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} color="warning" onChange={(e) => setUpperCase(e.target.checked)}>
                  </Checkbox>
                  <Typography style={{paddingRight: 20,paddingTop:8 ,fontSize:20, paddingLeft:10}} color="#ED6C02">
                      Include Uppercase Letters
                  </Typography>
              </div>
              <div style={{ paddingLeft: 30, display: "flex", justifyContent: "start", paddingTop:5}} >
                  <Checkbox checked={useNumbers} label="UpperCase Letters" sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} color="warning" onChange={(e) => setUseNumbers(e.target.checked)}>
                  </Checkbox>
                  <Typography style={{paddingRight: 20,paddingTop:8 ,fontSize:20, paddingLeft:10}} color="#ED6C02">
                      Include Numbers
                  </Typography>
              </div>
              <div style={{ paddingLeft: 30, display: "flex", justifyContent: "start", paddingTop:5}} >
                  <Checkbox checked={useSymbols} label="UpperCase Letters" sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} color="warning" onChange={(e) => setUseSymbols(e.target.checked)}>
                  </Checkbox>
                  <Typography style={{paddingRight: 20,paddingTop:8, fontSize:20, paddingLeft:10}} color="#ED6C02">
                      Include Symbols
                  </Typography>
              </div>
              <div style={{paddingLeft:40, paddingRight:40, paddingTop: 20, paddingBottom:20 }}>
                  <Button variant="contained" color="warning" sx={{size:"Large"}} onClick={() => {setInputValue(PasswordGeneration(upperCase, useNumbers, useSymbols, charLength))}}>
                      Generate Password
                  </Button>
              </div>
          </Box>
        </Grid>
      </Container>
    </div>
  );
}

export default App
