import React, { useState, useEffect } from 'react';
import { Card, CardContent, Grid, Typography, TextField, Button } from '@mui/material';
import Label from '../../components/common/Label';
import CustomTextField from '../../components/common/TextField';
import upload from "../../assets/images/upload_image.svg";
import Buttons from '../../components/common/Button';
import submit from "../../assets/images/submit_icon.svg"
const MediaManager = ({ item }: Props) => {
    const [fileName, setFileName] = useState('');
    const [imageName, setImageName] = useState('');
    const [youtubeVideoLink, setYoutubeVideoLink] = useState('');
    const [url, setUrl] = useState('');
    const [fileTypeFilter, setFileTypeFilter] = useState('');

    return (
        <div style={{ padding: '10px' }}>
            <Typography display="flex">
               <p style={{ marginBottom: '10px', fontSize: '20px', fontWeight: 'bold' }}>Media Manager</p>
            </Typography>
            <Card style={{ backgroundColor: '#D9D9D94D', borderRadius: '10px', border: '0.5px' }}>
                <CardContent>
                    <Grid alignItems="center" display="flex" gap="10px">
                        <Label text="Search By File Name" htmlFor="username" color="black" fontSize="15px" />
                        <CustomTextField
                            label="Enter keyword..."
                            variant="outlined"
                            fullWidth
                            backgroundColor="#FFFFFF"
                        />
                    </Grid>

                    <Card style={{ marginTop: '20px', borderRadius: '10px', border: '0.5px', margin: '10px', borderStyle: 'dotted' }}>
                        <CardContent style={{ textAlign: 'center' }}>
                            <Typography variant="h6" align="center" gutterBottom>
                                Upload Your File
                            </Typography>
                            <img src={upload} alt="upload image" />
                            <Typography align="center" gutterBottom>
                                Choose a file or drag it here.
                            </Typography>
                            <CustomTextField
                                label="Enter Image Name"
                                id="imageName"
                                variant="outlined"
                                value={imageName}
                                backgroundColor="#FFFFFF"
                            // width="300px"
                            />

                        </CardContent>
                    </Card>
                    <Grid container spacing={2} marginTop="10px">
                        <Grid item xs={6}>
                            <div style={{ display: 'flex', }}>
                                <Label text="Upload Youtube Video Link" htmlFor="youtubeVideoLink" color="black" fontSize="15px" />
                                <Typography style={{ color: 'red' }}>*</Typography>
                            </div>
                            <CustomTextField
                                id="url"
                                variant="outlined"
                                fullWidth
                                value={url}
                                label="URL"
                                backgroundColor="#FFFFFF"
                            />

                        </Grid>
                        <Grid item xs={6} marginTop="2px">
                            <Label text="Filter By File Type" htmlFor="fileTypeFilter" color="black" fontSize="15px" textAlign="start" />
                            <CustomTextField
                                id="fileTypeFilter"
                                variant="outlined"
                                fullWidth
                                value={fileTypeFilter}
                                label="Select"
                                backgroundColor="#FFFFFF"
                            />
                        </Grid>
                    </Grid>
                    <Grid>
                        <div style={{ marginTop: '10px' }}>
                            <Buttons
                                label="Submit"
                                color="primary"
                                variant="contained"
                                icon={submit}
                            // onClick={handleButtonClick}
                            />
                        </div>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    );
};

export default MediaManager;
