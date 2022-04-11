import axios from 'axios';

class BeaconClient {

  apiKey: string | null;
  url: string;

  constructor(apiKey: string | null = null, debug = false) {
    this.apiKey = apiKey;
    this.url = debug
      ? "http://localhost:8000/api/ping/"
      : "https://server-chat-backend.herokuapp.com/api/ping/";
  }

  send = (data: { message: string; channel: string } | null = null) => {
    /**
     * Sends and event to the Beacon Server
     */

    if (this.apiKey === null) {
      throw new Error("API key is not set");
    };

    if (data === null) {
      throw new Error("Data is not set");
    }

    const message = data.message;
    const channel = data.channel;

    if (!message) {
      throw new Error('Message is not set');
    };

    if (!channel) {
      throw new Error('Channel is not set');
    };

    const headers = {
      "Beacon-Key": this.apiKey,
    };

    return axios({
      method: "post",
      url: this.url,
      data: {
        body: message,
        channel: channel,
      },
      headers,
    });
  };
}

export { BeaconClient };