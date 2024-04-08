import {API_URL} from "@env";

interface CreateRequestOptions extends Omit<RequestInit, 'headers'> {}

const HEADERS = {
  "Content-Type": "application/json"
};

export function createRequest(baseDomain: string) {
  return (otherOptions: CreateRequestOptions, endPoint?: string) => {
    const options = {
      headers: HEADERS,
      ...otherOptions
    };
  
    if (otherOptions.body) {
      options.body = otherOptions.body.constructor === ({}).constructor ? JSON.stringify(otherOptions.body) : otherOptions.body
    }
    
    return fetch(`${API_URL}${baseDomain}${endPoint || ''}`, options)
  }
};
