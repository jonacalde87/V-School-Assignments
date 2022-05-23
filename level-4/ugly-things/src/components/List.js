import React, { useContext, useState } from 'react'
import axios from 'axios';
import { UglyContext } from '../uglyContext';

//imports @mui so it looks pretty
import { Box, Typography, Button, TextField, FormControl } from '@mui/material';
import { Save, Delete, Edit } from '@mui/icons-material';

export default function List() {
  const { uglyList, setUglyList } = useContext(UglyContext);
  const [toggleEdit, setToggleEdit] = useState(null);
  const [editUgly, setEditUgly] = useState();

  const handleChangeUgly = (e) => {
    const { name, value } = e.target;
    setEditUgly((prevUgly) => {
      return {
        ...prevUgly,
        [name]: value,
      };
    });
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://api.vschool.io/jonacalde/thing/${id}`)
      .then((res) => getData())
      .catch((err) => console.log(err));
  };

  const handleEditUgly = (id) => {
    const uglyElement = uglyList.find((x) => x._id === id);
    setEditUgly(uglyElement);
    axios
      .put(`https://api.vschool.io/jonacalde/thing/${id}`, editUgly)
      .then((res) => getData());
    setToggleEdit((prevState) => (prevState === id ? null : id));
  };

  const getData = () => {
    axios
      .get('https://api.vschool.io/jonacalde/thing')
      .then((res) => setUglyList(res.data));
  };


  return (
    <Box sx={{ textAlign: 'center' }}>
      {uglyList.map((ugly) => (
        <Box
          key={ugly._id}
          id={ugly._id}
          sx={{
            textAlign: 'center',
            mt: '20px',
            display: 'inline-block',
            m: '10px',
          }}
        >
          <Typography variant="h5">{ugly.title}</Typography>
          
          <Box>
            <img width={'200px'} src={ugly.imgUrl} alt={ugly.title} />
          </Box>

          <Typography sx={{ width: '200px' }} variant="subtitle2">
            {ugly.description}
          </Typography>

        

          {toggleEdit === ugly._id && (
            <Box>
              <FormControl sx={{ display: 'inline-block' }}>
                <TextField
                  fullWidth
                  required
                  inputProps={{ maxLength: '1000' }}
                  helperText={`${editUgly.imgUrl.length}/1000`}
                  name="imgUrl"
                  id="outlined-name"
                  label="IMG URL"
                  value={editUgly.imgUrl}
                  onChange={handleChangeUgly}
                />
                <TextField
                  fullWidth
                  required
                  inputProps={{ maxLength: '20' }}
                  helperText={`${editUgly.title.length}/20`}
                  name="title"
                  id="outlined-name"
                  label="TITLE"
                  value={editUgly.title}
                  onChange={handleChangeUgly}
                />
                <TextField
                  fullWidth
                  required
                  inputProps={{ maxLength: '100' }}
                  helperText={`${editUgly.description.length}/100`}
                  name="description"
                  id="outlined-name"
                  label="DESCRIPTION"
                  value={editUgly.description}
                  onChange={handleChangeUgly}
                />
              </FormControl>
            </Box>
          )}
          
          {!toggleEdit && (
            <Button
              startIcon={<Edit />}
              variant="contained"
              onClick={() => handleEditUgly(ugly._id)}
            >
              Edit
            </Button>
          )}

          {toggleEdit === ugly._id && (
            <Button
              startIcon={<Save />}
              variant="contained"
              sx={{ backgroundColor: 'green' }}
              onClick={() => handleEditUgly(ugly._id)}
            >
              Save
            </Button>
          )}

          <Button
            startIcon={<Delete />}
            variant="contained"
            sx={{ backgroundColor: 'red' }}
            onClick={() => handleDelete(ugly._id)}
          >
            Delete
          </Button>
        </Box>
      ))}
    </Box>
  );
}
