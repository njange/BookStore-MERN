export const PORT = 5000;
import { PORT } from './config.js';

const app = express();

app.listen (PORT, () => {
    console.log(`App is listening to port ${PORT}`);
});
