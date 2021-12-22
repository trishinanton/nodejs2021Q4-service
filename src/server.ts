import { app } from './app';

import  obj  from './common/config';


app.listen(obj.PORT,  () =>{
  console.log(`App is running on http://localhost:${obj.PORT}`)
})
