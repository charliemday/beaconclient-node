"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeaconClient = void 0;
const axios_1 = require("axios");
class BeaconClient {
    constructor(apiKey = null, debug = false) {
        this.send = (data = null) => {
            /**
             * Sends and event to the Beacon Server
             */
            if (this.apiKey === null) {
                throw new Error("API key is not set");
            }
            ;
            if (data === null) {
                throw new Error("Data is not set");
            }
            const message = data.message;
            const channel = data.channel;
            if (!message) {
                throw new Error('Message is not set');
            }
            ;
            if (!channel) {
                throw new Error('Channel is not set');
            }
            ;
            const headers = {
                "Beacon-Key": this.apiKey,
            };
            return (0, axios_1.default)({
                method: "post",
                url: this.url,
                data: {
                    body: message,
                    channel: channel,
                },
                headers,
            });
        };
        this.apiKey = apiKey;
        this.url = debug
            ? "http://localhost:8000/api/ping/"
            : "https://server-chat-backend.herokuapp.com/api/ping/";
    }
}
exports.BeaconClient = BeaconClient;
