import { environment } from "../../environments/environment.development";

const url = environment.APIURL + '/api';
export const getProfiles = url + '/getProfiles';
export const saveProfile = url + '/saveProfile';
export const login = url + '/login';
export const sendInterest = url + '/sendInterest';
export const getReceivedInterests = url + '/interests/received';
export const interestSent = url + '/interests/sent';
export const acceptInterest = url + '/interests/accept';

