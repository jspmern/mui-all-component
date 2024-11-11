import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'

function MuiTabs() {
    const [value, setValue] = React.useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
        <div style={{ marginTop: "20px" }}>
            {/* //normal tab */}
            {/* <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList
                        onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Item One" value="1" />
                        <Tab label="Item Two" value="2" />
                        <Tab label="Item Three" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">Item One</TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
            </TabContext> */}

            {/* //tab with diffrent color */}
            {/* <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList
                        onChange={handleChange}
                         aria-label="lab API tabs example" 
                        textColor='secondary' 
                        indicatorColor='secondary'
                        centered
                        >
                        <Tab label="Item One" value="1" />
                        <Tab label="Item Two" value="2" />
                        <Tab label="Item Three" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">Item One</TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
            </TabContext>
             */}

            {/* //scrollable tab */}
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', width: "300px" }}>
                    <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                        textColor='secondary'
                        indicatorColor='secondary'
                        variant="scrollable"
                        scrollButtons
                        allowScrollButtonsMobile
                        //By using this one you can set the align is verticle
                       // orientation='vertical'

                    >
                        <Tab label="Item One" value="1" />
                        <Tab label="Item Two" value="2" />
                        <Tab label="Item Three" value="3" />
                        <Tab label="Item Four" value="4" />
                        <Tab label="Item Five" value="5" />
                        <Tab label="Item Six" value="6" />
                        <Tab label="Item Seaven" value="7" />
                        <Tab label="Item Eight" value="8" />
                    </TabList>
                </Box>
                <TabPanel value="1">Item One</TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
                <TabPanel value="4">Item Fourth</TabPanel>
                <TabPanel value="5">Item Five</TabPanel>
                <TabPanel value="6">Item Six</TabPanel>
                <TabPanel value="7">Item Seaven </TabPanel>
                <TabPanel value="8">Item Eight</TabPanel>

            </TabContext>
        </div>
    )
}

export default MuiTabs