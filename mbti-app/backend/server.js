const express = require('express');
const cors = require('cors');
const PORT = 4000;
const app = express();

app.use(express.json());//바디파서
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const dataRouter = require('./routes/data');


app.use('/data', dataRouter);

app.listen(PORT, () => {
  console.log(`데이터 통신 서버가 ${PORT}에서 작동 중`);
});
