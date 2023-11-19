import { Box, Button, Grid, TextArea } from '@radix-ui/themes';
import { useState } from 'react';

const MainPage = () => {
  const [value, setValue] = useState('');
  const [showPdf, setShowPdf] = useState(false);

  const handleClick = () => {
    console.log(value);
    setShowPdf(true);
  };

  const handleClear = () => {
    setValue('');
    setShowPdf(false);
  };

  return (
    <Grid columns='2' gap='3' width='auto'>
      <Box className='h-screen p-6'>
        <TextArea
          placeholder='Paste your base64 here..'
          className='mb-6'
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <Button onClick={handleClick}>Decode</Button>
        <Button onClick={handleClear}>Clear</Button>
      </Box>
      <Box className='h-screen'>
        {showPdf && (
          <iframe
            src={`data:application/pdf;base64,${value}`}
            className='w-full h-full'
          />
        )}
        {!showPdf && (
          <div className='flex items-center justify-center w-full h-full'>
            <h1 className='text-3xl font-bold text-center text-gray-500'>
              No PDF to show yet
            </h1>
          </div>
        )}
      </Box>
    </Grid>
  );
};

export default MainPage;
