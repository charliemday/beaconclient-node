## Beacon

This is the beaconclient package for https://getbeacon.xyz to help you
supercharge your Beacon integrations.

#### How to use 

```
import { Beacon } from 'beaconclient';

const client = new Beacon('<YOUR_API_KEY>');

client.send({
    message: 'A new user signed up!',
    channel: '<YOUR_CHANNEL_NAME>'
})
```