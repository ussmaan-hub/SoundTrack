import {Pusher} from '@pusher/pusher-websocket-react-native';


const PUSHER_APP_ID="1454586"
const PUSHER_APP_KEY="072942f1a427dcf92c29"
const PUSHER_APP_SECRET="bfd65013f2157846274c"
const PUSHER_APP_CLUSTER="ap2"
const pusher = Pusher.getInstance();

export const initPusher = async () => {
  await pusher.init({
    apiKey: PUSHER_APP_KEY,
    cluster: PUSHER_APP_CLUSTER,
  });
};

export default pusher;