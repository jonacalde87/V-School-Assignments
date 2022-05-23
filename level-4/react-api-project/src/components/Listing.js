import React, { useState, useContext } from 'react'
import axios from 'axios'
import { SellContext } from '../sellContext'
//imports @mui so it looks pretty
import { Box, Button, TextField, FormControl, Typography } from '@mui/material';
import { Save, Delete, Edit } from '@mui/icons-material';

export default function Listing() {
    const { sellListing, setSellListing } = useContext(SellContext)
    // console.log(sellListing.map(listings => listings))
    const [toggleEdit, setToggleEdit] = useState(null)
    const [editListing, setEditListing] = useState()

    const handleChangeListing = (e) => {
        const { name, value } = e.target
        setEditListing((prevListing) => {
            return {
                ...prevListing,
                [name]: value
            }
        })
    }

    const handleDelete = (id) => {
        axios
            .delete(`https://api.vschool.io/jonacalde/todo/${id}`)
            .then((res) => getData())
            .catch((err) => console.log(err));
    }

    const handleEditListing = (id) => {
        const listingElement = sellListing.find((x) => x._id === id)
        setEditListing(listingElement)
        axios
            .put(`https://api.vschool.io/jonacalde/todo/${id}`, editListing)
            .then((res) => getData())
        setToggleEdit((prevState) => (prevState === id ? null : id))
    }

    const getData = () => {
        axios
            .get('https://api.vschool.io/jonacalde/todo')
            .then((res) => setSellListing(res.data))
    }


    return (
        <Box sx={{ textAlign: 'center' }}>
            {sellListing.map((listings) => (
                <Box
                    key={listings._id}
                    id={listings._id}
                    sx={{
                        display: 'inline-block',
                        margin: '10px',
                        textAlign: 'center',
                        mt: '20px',
                        m: '10px'
                    }}
                >
                    <Typography variant= "h4">{listings.title}</Typography>
                    <div>
                        <img className='pics' src={listings.imgUrl} alt={listings.title} />
                    </div>
                    <h4 style={{ fontSize: "20px" }}>${listings.price}</h4>

                    {toggleEdit === listings._id && (
                        <Box>
                            <FormControl style={{ display: "inline-block" }}>
                                <TextField                                  
                                    name='title'
                                    label='Item'
                                    id="outlined-name"
                                    fullWidth
                                    onChange={handleChangeListing}
                                    value={editListing.title}
                                />
                                <TextField
                                    name='imgUrl'
                                    label='Image Link'
                                    id="outlined-name"
                                    fullWidth
                                    onChange={handleChangeListing}
                                    value={editListing.imgUrl}
                                />
                                <TextField
                                    name='price'
                                    label='Price'
                                    id="outlined-name"
                                    fullWidth
                                    onChange={handleChangeListing}
                                    value={editListing.price}
                                />
                            </FormControl>
                        </Box>
                    )}

                    {!toggleEdit && (
                        <Button
                            onClick={() => handleEditListing(listings._id)}
                            startIcon={<Edit />}
                            variant="contained"
                        >
                            Edit
                        </Button>
                    )}

                    {toggleEdit === listings._id && (
                        <Button
                            onClick={() => handleEditListing(listings._id)}
                            startIcon={<Save />}
                            variant="contained"
                            sx={{ backgroundColor: 'green' }}
                        >Save
                        </Button>
                    )}

                    <Button
                        onClick={() => handleDelete(listings._id)}
                        startIcon={<Delete />}
                        variant="contained"
                        sx={{ backgroundColor: 'red' }}
                    >
                        Delete
                    </Button>
                </Box>
            ))}
        </Box>
    )
}
