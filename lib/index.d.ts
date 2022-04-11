declare class BeaconClient {
    apiKey: string | null;
    url: string;
    constructor(apiKey?: string | null, debug?: boolean);
    send: (data?: {
        message: string;
        channel: string;
    } | null) => import("axios").AxiosPromise<any>;
}
export { BeaconClient };
