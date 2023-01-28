import { app } from '@src/app';
import { env } from '@src/config/env';

app.listen(8080, () => {
    console.log(`Server is running on ${env.SERVER_URL}`);
});
