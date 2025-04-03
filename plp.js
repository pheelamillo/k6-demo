// Import the sleep function from the k6 library to pause execution between requests
import { sleep } from 'k6';

// Import the http module from k6 to make HTTP requests
import http from 'k6/http';

// Import the environment-specific configuration
import { BASE_URL } from './settings.js';

// Import the workload configuration
import { options as workloadOptions } from './workload.js';

// Merge workload options with additional thresholds and cloud distribution settings
export const options = {
  ...workloadOptions, // Use the stages defined in workload.js
  thresholds: {
    http_req_failed: ['rate<0.02'], // Ensure that less than 2% of requests fail
    http_req_duration: ['p(95)<2000'], // Ensure that 95% of requests complete in under 2 seconds
  },
  cloud: {
    distribution: {
      'amazon:us:ashburn': { loadZone: 'amazon:us:ashburn', percent: 100 }, // Use 100% of the load from the Ashburn region
    },
  },
};

// The main function that will be executed during the test
export default function main() {
  // Make a GET request to the specified BASE_URL
  let response = http.get(BASE_URL/furniture/sets/bedroom-furniture-sets/brset);
  // Pause execution for 1 second to simulate user think time
  sleep(1);
}