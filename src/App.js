import React from 'react';

import { Description } from './components/Description';
import { Students } from './components/Students';
import Image from './components/Image';

function App() {
  let javascriptClass = [
    {
      id: 1,
      firstname: 'onyeka',
      lastname: 'nwachukwu',
      occupation: 'photo grapher',
    },
    {
      id: 2,
      firstname: 'kunle',
      lastname: 'olawale',
      occupation: 'accountant',
    },
  ];
  let pythonClass = [
    {
      id: 1,
      firstname: 'john',
      lastname: 'kenechukwu',
      occupation: 'business man',
    },
    {
      id: 2,
      firstname: 'ebimo',
      lastname: 'ejire',
      occupation: 'student',
    },
    { id: 3, firstname: 'sylvia', lastname: 'mark', occupation: 'teacher' },
  ];

  return (
    <>
      <Image
        src={
          'https://thumbs.dreamstime.com/b/nigeria-logo-map-country-name-flag-artistic-vector-illustration-171028979.jpg'
        }
        alt="image for component"
        width={100}
        height={100}
      />
      <Students classTitle="Javascript Class" student={javascriptClass} />
      {/* write another student component for the python class
            and pass your class title props student for python class
        */}
      <Students classTitle="Python Class" student={pythonClass} />

      <Image
        alt={'image of javascript'}
        width={100}
        src={
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAk1BMVEX////13hkAAAD13QD56oj85RrbxxZ7bwz44Rn44BnOuhX75Br/5xr03RnWwhbs1hiomBGunhL78rjm0BdtYwu9qxMtKQSWiA+BdQ11agzDsRShkhBbUglVTQkYFgJpXwo/OQZGQAeFeQ3SvhUJBwAxLAVRSQi2pRIlIgNgVwpZUAiejxA5MwYfHAMbGAMoJASPgg7Qx6ldAAAEG0lEQVR4nO2da5PaIBSGG7okEIjRokaje3N367qXtv//1zVxNTkg+qUzDqTv8y0JOjxCcuBAxm/fAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArsGPm2vz48qGN9+vzc3VDZPrAkMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMIQhjCEIQxhCEMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGEZnKDqk76riWivNuRKxGpZ5R+oqSl7kq+X69ufbOhvnkp/+BBEYypR1LLl9SafZXX+V3WWpdh0jM8wsQ2WmzGVaquEY8tnziWDTjrndzhEb6rHHr2VmtWK8hmp2RpCxnCpGayjNWUHGDHncRGuo7i8Y3pJGjNVQji4IMjbpg3+shjyjQi/Txf2cHFfk47EaauIzr5shm+b1w+H4Z6rjN6TnmPm660Sx2x+OpTU+jdRQkFBRdfdm0fTUNzOMMY2Y9OfyrsnEiG2HMi6lhqO+Uwp3UDoMw613Whi9IbkP1/rixyM1tAL+mF/6eKSGVjxkm+L09ovfcEcVXyf6rGOshmLLLJ5XpSdHE7NhUvxmDouRN9kWraHauoaM7Wp96hitYaKWp4rsMeeuY7yGSfHgUWRvIyd2RGwoi0efIqsGMbc4KPozGY9mEJmoPXriVWSjAeRpDiiT+RXjz9N0F9XI90ydl134j92wXVwzi1PFZddP4zdsV9iS8cvZfjoEwwYlZ7e24fQ4axyIYbtOnNvh8XhhMIbtDbmihrUYnGETHmtiuFIDMDyZEGoSHY8L4oEaSlL582vAxjiOgqRvdkEbqpRsuqBZp00/HFNJxXZO7kKWfdFbHa6hKN7ZY193mrCojqeFmrWLTSs7k0iXTdfBGkpdfzQVnHT9kW/6ah+zvzo9hL+ZpajISHwaai9V5dcOkue0a0WyY+ZrjUIU/TiNLlQIWvQ9zGepkF1M+0x187yRgtOR9f7RIqw9CkvD95vBmpKGzvrDjIfyidaxGpkyrd/ImYd9n3RXuLM6LYvS5PZE6vidYRmK3K77r1f7+NDz1IY5vL7Mnd1D3f6wsAwTfWmHBWPloZg/CWXRhZvADJPyUq03Xcbb+PZ7URbBzg9Vfb7Wv/qJu3q6LPhRdt8YmqEV0hxqkiVUl/fTpCHnac7lz9jWGnWLcn3W77chv0V4hgl/mntqfVc7EyepVp9+waygKeEADffjUpeFu4kkaYc/73enfrvcLhmiYVP3YkJTEq+VUd7FQSXrzHqqvlSpu8QWpmHTjrrIJ9ViutyMZ0b7/fbluDb1eLO8v1/+mdSlp2Sohm3lhVKcK+V9BYEg9+XalxGifRvh34AhDGEIw0EaDv3/LYb/HyUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPhf+QtuG2g4jPOCggAAAABJRU5ErkJggg=='
        }
      />
    </>
  );
}

export default App;
