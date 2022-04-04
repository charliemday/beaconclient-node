## Beacon

This is the beaconclient package for https://getbeacon.xyz to help you
supercharge your Beacon integrations.

#### How to use 

```
import { BeaconClient } from 'beaconclient';

const client = new BeaconClient('<YOUR_BEACON_API_KEY>');

client.send({
    message: 'A new user signed up!',
    channel: '<YOUR_CHANNEL_NAME>'
})
```